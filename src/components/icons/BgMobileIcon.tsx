"use client";

import { useId } from "react";

export default function BgMobileIcon(props: React.SVGProps<SVGSVGElement>) {
  const uid = useId();
  const id = (key: string) => `${uid}-${key}`;
  const ref = (key: string) => `url(#${id(key)})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={375}
      height={373}
      viewBox="0 0 375 373"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient
          id={id("a")}
          x1="221.401%"
          x2="-5.513%"
          y1="-103.001%"
          y2="110.015%"
        >
          <stop offset="0%" stopColor="#FF52C1" />
          <stop offset="7.3%" stopColor="#F952C5" />
          <stop offset="100%" stopColor="#9952FF" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={id("b")}
          x1="212.128%"
          x2="-5.513%"
          y1="-106.466%"
          y2="110.015%"
        >
          <stop offset="0%" stopColor="#FF52C1" />
          <stop offset="0%" stopColor="#F952C5" />
          <stop offset="100%" stopColor="#9952FF" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={id("c")}
          x1="21.681%"
          x2="145.861%"
          y1="5.006%"
          y2="145.591%"
        >
          <stop offset="0%" stopColor="#FF52C1" />
          <stop offset="100%" stopColor="#9952FF" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill={ref("a")} d="M0 265.7 319.689 0H375v73.607L0 313.664z" />
        <path
          fill={ref("b")}
          d="M0 318.687 375 102v119.176L0 360.228z"
          transform="matrix(-1 0 0 1 375 0)"
        />
        <rect
          width={28}
          height={28}
          x={318.799}
          y={166.799}
          fill={ref("c")}
          opacity={0.558}
          rx={3}
          transform="rotate(45 332.799 180.799)"
        />
        <rect
          width={9}
          height={9}
          x={117.864}
          y={361.864}
          fill={ref("c")}
          opacity={0.387}
          rx={1}
          transform="rotate(45 122.364 366.364)"
        />
        <rect
          width={18}
          height={18}
          x={155.728}
          y={335.728}
          fill={ref("c")}
          opacity={0.387}
          rx={1}
          transform="rotate(45 164.728 344.728)"
        />
        <rect
          width={14}
          height={14}
          x={132.728}
          y={79.899}
          fill={ref("c")}
          opacity={0.387}
          rx={1}
          transform="rotate(45 139.728 86.9)"
        />
        <rect
          width={17}
          height={17}
          x={316.521}
          y={335.521}
          fill={ref("c")}
          opacity={0.387}
          rx={1}
          transform="rotate(45 325.02 344.02)"
        />
        <rect
          width={42}
          height={42}
          x={42.598}
          y={261.497}
          fill={ref("c")}
          opacity={0.503}
          rx={3}
          transform="rotate(45 63.598 282.497)"
        />
      </g>
    </svg>
  );
}
