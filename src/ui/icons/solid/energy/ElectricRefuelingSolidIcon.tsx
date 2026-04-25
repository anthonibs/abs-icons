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
    <path
      fillRule="evenodd"
      d="M10.14 2.35h-.93c-2.63 0-3.95 0-4.76.82s-.82 2.13-.82 4.76v12.33H2.7c-.39 0-.7.31-.7.7s.31.7.7.7h14.19c.39 0 .7-.31.7-.7s-.31-.7-.7-.7h-1.16V17h1.46c.35 0 .63.28.63.63v.07a2.09 2.09 0 1 0 4.18 0V7.21a3.5 3.5 0 0 0-1.42-2.62l-1.16-.93a.699.699 0 0 0-.87 1.09l1.15.92c.13.11.18.14.22.18.41.37.66.89.69 1.44v.64h-.7c-.77 0-1.4.62-1.4 1.4v2.25c0 .6.38 1.13.95 1.32l1.14.38v4.42c0 .39-.31.7-.7.7s-.7-.31-.7-.7v-.07c0-1.12-.91-2.03-2.03-2.03h-1.46V7.93c0-2.63 0-3.95-.82-4.76s-2.13-.82-4.76-.82Zm-.11 6.84c.33.2.44.63.24.96l-.76 1.27h1.56c.25 0 .48.13.61.35.12.22.12.49 0 .7l-1.4 2.33a.7.7 0 0 1-1.2-.72l.76-1.27H8.28c-.25 0-.48-.14-.61-.35a.73.73 0 0 1 0-.7l1.4-2.33a.7.7 0 0 1 .96-.24"
    />
  </svg>
)

export const ElectricRefuelingSolidIcon = createIcon(
  "ElectricRefuelingSolidIcon",
  SVGComponent,
  {
    fileName: "abs-electric-refueling-solid.svg",
    presentationName: "electric-refueling",
    style: "solid",
    category: "energy",
  },
)
