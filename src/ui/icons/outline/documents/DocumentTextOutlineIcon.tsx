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
      <path d="M17.14 2H6.86a2.96 2.96 0 0 0-2.95 2.97v14.06c0 1.64 1.33 2.97 2.95 2.97h10.28a2.96 2.96 0 0 0 2.95-2.97V4.97c0-1.64-1.33-2.97-2.95-2.97m1.45 17.03c0 .81-.65 1.47-1.45 1.47H6.86c-.8 0-1.45-.66-1.45-1.47V4.97c0-.81.65-1.47 1.45-1.47h10.28c.8 0 1.45.66 1.45 1.47z" />
      <path d="M8.4 8.99h2.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H8.4c-.41 0-.75.34-.75.75s.34.75.75.75m7.21 2.26H8.39c-.41 0-.75.34-.75.75s.34.75.75.75h7.22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 3.76H8.39c-.41 0-.75.34-.75.75s.34.75.75.75h7.22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" />
    </g>
  </svg>
)

export const DocumentTextOutlineIcon = createIcon(
  "DocumentTextOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-document-text.svg",
    presentationName: "document-text",
    style: "outline",
    category: "documents",
  },
)
