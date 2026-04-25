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
    <path d="M18 8.38q.15.06.27.18l2.85 2.85c.08.07.14.16.18.26.09.21.09.44 0 .64a.8.8 0 0 1-.18.27l-2.85 2.85a.9.9 0 0 1-.42.23c-.16.03-.33.01-.48-.05s-.28-.17-.37-.31a.8.8 0 0 1-.14-.45v-1.89c0-.08-.06-.14-.14-.14H3.44c-.22 0-.43-.09-.58-.25-.31-.3-.31-.85 0-1.16.15-.15.36-.24.58-.24h13.28c.08 0 .14-.06.14-.14V9.14c0-.16.05-.32.14-.46a.86.86 0 0 1 .37-.31c.1-.03.21-.05.31-.05.12 0 .22.02.32.06" />
  </svg>
)

export const ArrowForwardSolidIcon = createIcon(
  "ArrowForwardSolidIcon",
  SVGComponent,
  {
    fileName: "abs-arrow-forward-solid.svg",
    presentationName: "arrow-forward",
    style: "solid",
    category: "arrows",
  },
)
