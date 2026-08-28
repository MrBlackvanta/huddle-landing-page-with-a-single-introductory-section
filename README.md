# Huddle landing page with a single introductory section

My solution to the [Huddle landing page](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://huddle-landing-page-with-a-single-introductory-section.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/huddle-landing-page-with-a-single-introductory-section

## Built with

- Next.js 16, App Router, static
- React 19 and TypeScript
- Tailwind CSS v4
- Poppins and Open Sans via `next/font`

## Notes

**Figma-exported SVGs collide on their internal ids.** They ship with `id="a"`, `id="b"`
for gradients and filters, so two of them on one page means `url(#a)` resolves to whichever
came first in the DOM and the second one silently breaks. Scoping the ids with a `useId()`
prefix fixes it, but `useId` is a hook, so the component has to become a client component.

That's worth it for the main illustration, which has eleven ids and real filters. It isn't
worth it for the two background SVGs, so those moved to `public/` and are applied as CSS
`background-image`. `bg-cover` already does what `preserveAspectRatio="slice"` would have
done inside an inline SVG, and it drops two client components.

**Sticky footer.** `min-h-dvh flex flex-col` on the body, `flex-1` on `<main>`. I tried
`grid place-content-center` first, which centres the rows as a group and floats the footer
up with the content instead of pinning it to the bottom.

**`title` is not an accessible name.** Screen readers treat it as advisory. Icon-only links
need `aria-label` on the `<a>` with `aria-hidden` on the SVG inside. Same for the logo,
which is only paths, so it needs `role="img"` and a label or the brand name is invisible.

**The Register button's hover fails contrast and ships as designed.** White on the soft
magenta is about 1.8:1. In a real product I'd push back on that hover colour, or keep the
violet text, which gets to around 4.1:1. Shipped as drawn for fidelity, noted here.

**I scaffolded this with shadcn out of habit and then took it out.** The page renders one
button and nothing that benefits from cva variants or Radix. The cleanup removed shadcn,
cva, clsx, tailwind-merge, radix-ui, tw-animate-css, the `cn` helper and the whole
`:root` / `.dark` theme block. Dependencies are now `next`, `react` and `react-dom`.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
