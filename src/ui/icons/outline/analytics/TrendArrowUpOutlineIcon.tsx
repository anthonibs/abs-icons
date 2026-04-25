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
    <path d="M6.3 4.53a.863.863 0 0 0-1.21 0L2.23 7.39c-.32.35-.3.89.04 1.21.33.31.84.31 1.17 0l1.4-1.4v11.66c0 .47.38.86.86.86s.86-.38.86-.86V7.21l1.4 1.4c.35.32.89.3 1.21-.04.31-.33.31-.84 0-1.17L6.31 4.54Zm6.83.89c-.47 0-.86.38-.86.86s.38.86.86.86h8.01c.47 0 .86-.38.86-.86s-.38-.86-.86-.86zm-1.14 4c-.47 0-.86.38-.86.86s.38.86.86.86h5.72c.47 0 .86-.38.86-.86s-.38-.86-.86-.86zm0 4c-.47 0-.86.38-.86.86s.38.86.86.86h3.43c.47 0 .86-.38.86-.86s-.38-.86-.86-.86zm0 3.43c-.47 0-.86.38-.86.86s.38.86.86.86h1.14c.47 0 .86-.38.86-.86s-.38-.86-.86-.86z" />
  </svg>
)

export const TrendArrowUpOutlineIcon = createIcon(
  "TrendArrowUpOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-trend-arrow-up.svg",
    presentationName: "trend-arrow-up",
    style: "outline",
    category: "analytics",
  },
)
