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
    <path d="m12.54 19.08 1.08-1.07c.3-.3.79-.3 1.09 0 .3.31.3.79 0 1.09l-2.17 2.17c-.3.3-.79.3-1.09 0L9.28 19.1c-.3-.3-.3-.79 0-1.09.3-.31.79-.3 1.08 0l1.07 1.07c.3.3.79.3 1.09 0Zm-7.63-6.54 1.07 1.07c.3.3.3.78 0 1.08-.3.31-.79.31-1.09.01l-2.17-2.17c-.3-.3-.3-.79 0-1.09l2.17-2.17c.3-.3.79-.3 1.09 0 .3.31.3.79 0 1.09l-1.07 1.08c-.3.3-.3.79 0 1.09Zm14.17-1.09L18 10.37a.76.76 0 0 1 0-1.08c.3-.3.79-.31 1.09 0l2.17 2.17c.3.3.3.79 0 1.09l-2.17 2.17c-.3.3-.8.3-1.09 0a.79.79 0 0 1 0-1.09l1.08-1.08c.3-.3.3-.79 0-1.09ZM11.44 4.9l-1.08 1.08c-.3.3-.78.3-1.08 0-.31-.3-.31-.8 0-1.1l2.17-2.17c.3-.3.79-.3 1.09 0l2.17 2.17c.3.3.3.79 0 1.09s-.78.3-1.08 0l-1.08-1.08c-.3-.3-.79-.3-1.09 0Z" />
  </svg>
)

export const OpenRunOutlineIcon = createIcon(
  "OpenRunOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-open-run.svg",
    presentationName: "open-run",
    style: "outline",
    category: "general",
  },
)
