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
      <path d="M12 2C5.64 2 2 5.64 2 12s3.64 10 10 10 10-3.64 10-10S18.36 2 12 2m0 18.48c-5.47 0-8.48-3.01-8.48-8.48S6.53 3.52 12 3.52s8.48 3.01 8.48 8.48-3.01 8.48-8.48 8.48" />
      <path d="M16.69 11.24H7.31a.76.76 0 1 0 0 1.52h9.38a.76.76 0 1 0 0-1.52" />
    </g>
  </svg>
)

export const RemoveCircleOutlineIcon = createIcon(
  "RemoveCircleOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-remove-circle.svg",
    presentationName: "remove-circle",
    style: "outline",
    category: "general",
  },
)
