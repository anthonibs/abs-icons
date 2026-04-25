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
    <path d="M21.75 3.43 6.32 18.85c.33.16.7.25 1.07.25h2.64c.22 0 .43.09.59.24l1.43 1.43a4.14 4.14 0 0 0 2.93 1.22c.45 0 .91-.08 1.34-.22a4.11 4.11 0 0 0 2.79-3.32l2.81-13.37c.13-.56.07-1.14-.18-1.66Zm-2.81-1.37L5.6 4.87a4.16 4.16 0 0 0-3.56 4.69c.12.9.54 1.73 1.18 2.38l1.43 1.43c.16.16.24.37.24.59v2.64c0 .37.09.74.25 1.07L20.57 2.25c-.51-.25-1.08-.31-1.63-.19" />
  </svg>
)

export const PaperPlaneSolidIcon = createIcon(
  "PaperPlaneSolidIcon",
  SVGComponent,
  {
    fileName: "abs-paper-plane-solid.svg",
    presentationName: "paper-plane",
    style: "solid",
    category: "general",
  },
)
