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
    <path d="M21.27 2.73a2.46 2.46 0 0 0-2.33-.67L5.61 4.87a4.16 4.16 0 0 0-3.56 4.69c.12.9.54 1.74 1.18 2.38l1.43 1.43c.16.16.24.37.24.59v2.64c0 .37.09.74.25 1.07s.02.03.02.03c.24.49.64.89 1.14 1.13l.02.02c.33.16.7.24 1.07.24h2.64c.22 0 .43.09.59.24l1.43 1.43a4.15 4.15 0 0 0 2.93 1.23c.45 0 .91-.07 1.34-.22a4.13 4.13 0 0 0 2.79-3.32l2.81-13.36c.21-.85-.04-1.75-.66-2.36M5.83 12.2 4.4 10.77c-.68-.66-.92-1.66-.6-2.56.3-.92 1.12-1.58 2.08-1.69l13.2-2.78L6.56 16.26v-2.3c0-.66-.26-1.3-.73-1.77Zm11.64 5.98a2.495 2.495 0 0 1-2.82 2.13c-.54-.07-1.04-.32-1.42-.71l-1.43-1.43c-.47-.47-1.1-.73-1.77-.73h-2.3L20.25 4.92l-2.79 13.26Z" />
  </svg>
)

export const PaperPlaneOutlineIcon = createIcon(
  "PaperPlaneOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-paper-plane.svg",
    presentationName: "paper-plane",
    style: "outline",
    category: "general",
  },
)
