#!/usr/bin/env node
/**
 * scope-svg-ids — rewrites an SVG React component so its internal ids are
 * scoped per-render via React's useId() hook. Prevents collisions when the
 * same exported SVG (or two different SVGs that both use id="a") end up on
 * the same page.
 *
 * Usage:
 *   node scripts/scope-svg-ids.mjs <file.tsx> [more files...]
 *   pnpm scope-svg src/components/icons/*.tsx
 *
 * What it does:
 *   - collects every id="X" declared inside the file
 *   - rewrites   id="X"             -> id={id('X')}
 *   - rewrites   xlinkHref="#X"     -> xlinkHref={`#${id('X')}`}
 *   - rewrites   href="#X"          -> href={`#${id('X')}`}
 *   - rewrites   attr="url(#X)"     -> attr={ref('X')}
 *   - injects    'use client' + useId import + helper setup in the component
 *
 * Caveats:
 *   - the file must be a default-exported function component
 *   - params must not use object destructuring with braces (keeps the regex simple)
 *   - run prettier afterwards if you want tidy formatting
 */

import fs from 'node:fs';
import path from 'node:path';

function expandGlob(pattern) {
  if (!pattern.includes('*')) return [pattern];

  const dir = path.dirname(pattern);
  const fileGlob = path.basename(pattern);

  if (!fs.existsSync(dir)) return [];

  const re = new RegExp(
    '^' +
      fileGlob.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') +
      '$',
  );

  return fs
    .readdirSync(dir)
    .filter((name) => re.test(name))
    .map((name) => path.join(dir, name));
}

const args = process.argv.slice(2);
const files = args.flatMap(expandGlob);

if (args.length === 0) {
  console.error('Usage: node scripts/scope-svg-ids.mjs <file.tsx> [...]');
  process.exit(1);
}

if (files.length === 0) {
  console.error(`No files matched: ${args.join(', ')}`);
  process.exit(1);
}

function transform(source) {
  const declaredIds = new Set(
    [...source.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]),
  );

  if (declaredIds.size === 0) {
    return { source, changed: false, reason: 'no id="..." attributes found' };
  }

  let out = source;

  // id="X"  ->  id={id('X')}
  out = out.replace(
    /\bid="([^"]+)"/g,
    (_, v) => `id={id(${JSON.stringify(v)})}`,
  );

  // xlinkHref="#X"  ->  xlinkHref={`#${id('X')}`}
  out = out.replace(/\bxlinkHref="#([^"]+)"/g, (m, v) =>
    declaredIds.has(v) ? `xlinkHref={\`#\${id(${JSON.stringify(v)})}\`}` : m,
  );

  // href="#X" (modern SVG 2)  ->  href={`#${id('X')}`}
  out = out.replace(/(\s)href="#([^"]+)"/g, (m, ws, v) =>
    declaredIds.has(v) ? `${ws}href={\`#\${id(${JSON.stringify(v)})}\`}` : m,
  );

  // attr="url(#X)"  ->  attr={ref('X')}
  out = out.replace(/(\b\w+)="url\(#([^)]+)\)"/g, (m, attr, v) =>
    declaredIds.has(v) ? `${attr}={ref(${JSON.stringify(v)})}` : m,
  );

  // 'use client' directive
  if (!/^\s*['"]use client['"]/.test(out)) {
    out = `'use client';\n\n${out}`;
  }

  // useId import (merge into existing react import if present)
  if (!/import\s*\{[^}]*\buseId\b[^}]*\}\s*from\s*['"]react['"]/.test(out)) {
    const reactImport = /import\s*\{([^}]*)\}\s*from\s*['"]react['"]/;
    if (reactImport.test(out)) {
      out = out.replace(reactImport, (_, named) => {
        const items = named
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean);
        if (!items.includes('useId')) items.push('useId');
        return `import { ${items.join(', ')} } from 'react'`;
      });
    } else {
      out = out.replace(
        /^('use client';\n\n)/,
        `$1import { useId } from 'react';\n\n`,
      );
    }
  }

  // Inject hook setup at the top of the component body
  if (!/const\s+uid\s*=\s*useId\(\)/.test(out)) {
    const hookSetup =
      `\n  const uid = useId();\n` +
      `  const id = (key: string) => \`\${uid}-\${key}\`;\n` +
      `  const ref = (key: string) => \`url(#\${id(key)})\`;\n`;

    const fnSignature = /(export default function \w+[^{]*\{)/;
    if (!fnSignature.test(out)) {
      return {
        source,
        changed: false,
        reason: 'could not find `export default function NAME(...) {`',
      };
    }
    out = out.replace(fnSignature, `$1${hookSetup}`);
  }

  return { source: out, changed: true };
}

let failed = 0;

for (const input of files) {
  const resolved = path.resolve(input);
  if (!fs.existsSync(resolved)) {
    console.error(`✗ ${input} — file not found`);
    failed++;
    continue;
  }

  const source = fs.readFileSync(resolved, 'utf8');
  const result = transform(source);

  if (!result.changed) {
    console.log(`- ${input} — skipped (${result.reason})`);
    continue;
  }

  fs.writeFileSync(resolved, result.source);
  console.log(`✓ ${input} — scoped`);
}

process.exit(failed > 0 ? 1 : 0);
