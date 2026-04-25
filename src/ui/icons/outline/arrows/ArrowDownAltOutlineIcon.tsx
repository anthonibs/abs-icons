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
    <path d="m11.01 19.2-6.54-6.54c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l5.72 5.72V5.14c0-.41.34-.75.75-.75s.75.34.75.75v12.19l5.72-5.72c.29-.29.77-.29 1.06 0 .15.15.22.34.22.53s-.07.38-.22.53l-6.54 6.54c-.27.27-.62.41-.99.41s-.73-.15-.99-.41Z" />
  </svg>
)

export const ArrowDownAltOutlineIcon = createIcon(
  "ArrowDownAltOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-arrow-down-alt.svg",
    presentationName: "arrow-down-alt",
    style: "outline",
    category: "arrows",
  },
)
