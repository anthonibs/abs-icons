import { createIcon } from "../../../createIcon"

import type { SVGProps } from "react"
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    color="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g>
      <path d="M17.83 14.93c.29-.3.29-.77 0-1.07l-1.94-1.94a.75.75 0 0 1-.22-.53V8.9c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.11c0 .2.08.39.22.53l2.37 2.39c.29.29.77.3 1.06 0Z" />
      <rect width={3.81} height={1.5} x={2.62} y={7.25} rx={0.75} ry={0.75} />
      <rect width={4.81} height={1.5} x={1.62} y={11.25} rx={0.75} ry={0.75} />
      <rect width={3.81} height={1.5} x={2.62} y={15.25} rx={0.75} ry={0.75} />
      <path d="M14.93 4.54c-4.11 0-7.46 3.34-7.46 7.46a7.46 7.46 0 1 0 7.46-7.46M21.08 12c0 3.39-2.76 6.15-6.15 6.15S8.78 15.39 8.78 12s2.76-6.15 6.15-6.15 6.15 2.76 6.15 6.15" />
    </g>
  </svg>
)

export const ClockAcuteOutlineIcon = createIcon(
  "ClockAcuteOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-clock-acute.svg",
    presentationName: "clock-acute",
    style: "outline",
    category: "time",
  },
)
