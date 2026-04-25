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
    <path d="M5.09 19.47c.34.33.88.33 1.21 0l2.86-2.86c.35-.32.37-.87.04-1.21a.846.846 0 0 0-1.21-.04l-.04.04-1.4 1.4V5.14c0-.47-.38-.86-.86-.86s-.86.38-.86.86V16.8l-1.4-1.4a.863.863 0 0 0-1.21.04c-.31.33-.31.84 0 1.17l2.86 2.86Zm7.18-1.75c0 .47.38.86.86.86h8.01c.47 0 .86-.38.86-.86s-.38-.86-.86-.86h-8.01a.86.86 0 0 0-.86.86m-1.14-4c0 .47.38.86.86.86h5.72c.47 0 .86-.38.86-.86s-.38-.86-.86-.86h-5.72a.86.86 0 0 0-.86.86m0-4c0 .47.38.86.86.86h3.43c.47 0 .86-.38.86-.86s-.38-.86-.86-.86h-3.43a.86.86 0 0 0-.86.86m0-3.43c0 .47.38.86.86.86h1.14c.47 0 .86-.38.86-.86s-.38-.86-.86-.86h-1.14a.86.86 0 0 0-.86.86" />
  </svg>
)

export const TrendArrowDownOutlineIcon = createIcon(
  "TrendArrowDownOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-trend-arrow-down.svg",
    presentationName: "trend-arrow-down",
    style: "outline",
    category: "analytics",
  },
)
