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
    <path d="m4.8 11.01 6.54-6.54c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.72 5.72h12.19c.41 0 .75.34.75.75s-.34.75-.75.75H6.68l5.72 5.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L4.8 12.99c-.27-.27-.41-.62-.41-.99s.15-.73.41-.99" />
  </svg>
)

export const ArrowLeftAltOutlineIcon = createIcon(
  "ArrowLeftAltOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-arrow-left-alt.svg",
    presentationName: "arrow-left-alt",
    style: "outline",
    category: "arrows",
  },
)
