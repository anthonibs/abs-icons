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
    <path d="m7.71 8.67-2.32 2.32c-.09.09-.03.23.1.23h15.24a.781.781 0 0 1 0 1.56H5.47c-.12 0-.18.15-.1.23l2.32 2.32c.3.3.3.79 0 1.1-.3.3-.79.3-1.1 0l-3.88-3.88s0-.01-.01-.02a.77.77 0 0 1-.15-.83c.04-.09.09-.17.15-.23 0 0 0-.01.01-.02l3.88-3.88c.3-.3.79-.3 1.1 0 .3.3.3.79 0 1.1h.01Z" />
  </svg>
)

export const ArrowBackOutlineIcon = createIcon(
  "ArrowBackOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-arrow-back.svg",
    presentationName: "arrow-back",
    style: "outline",
    category: "arrows",
  },
)
