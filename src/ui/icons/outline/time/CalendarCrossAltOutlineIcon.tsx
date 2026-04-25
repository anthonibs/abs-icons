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
      <path d="M16.64 4.02V2.79a.781.781 0 0 0-1.56 0v.98c-.91-.1-1.92-.16-3.07-.16s-2.16.05-3.07.16v-.98a.781.781 0 0 0-1.56 0v1.23c-3.89.9-5.15 3.39-5.15 8.78 0 7.14 2.19 9.2 9.78 9.2s9.78-2.06 9.78-9.2c0-5.39-1.26-7.89-5.15-8.78M7.36 5.61v.38a.781.781 0 0 0 1.56 0v-.67c.88-.1 1.89-.15 3.07-.15s2.19.05 3.07.15v.67a.781.781 0 0 0 1.56 0v-.38c1.69.46 2.64 1.36 3.13 2.95H4.24c.48-1.59 1.43-2.49 3.13-2.95ZM12 20.43c-6.76 0-8.22-1.35-8.22-7.63 0-1.02.04-1.9.14-2.67h16.16c.09.77.14 1.65.14 2.67 0 6.28-1.46 7.63-8.22 7.63" />
      <path d="M15.44 12.62c.3-.3.3-.81 0-1.12s-.81-.3-1.12 0l-2.24 2.24s-.11.04-.15 0L9.69 11.5a.81.81 0 0 0-1.12 0c-.31.3-.3.81 0 1.12l2.24 2.24s.04.11 0 .15l-2.24 2.24c-.3.3-.3.81 0 1.12.16.16.36.23.55.23s.41-.07.55-.23l2.24-2.24s.11-.04.15 0l2.24 2.24c.16.16.36.23.55.23s.41-.07.55-.23c.3-.3.3-.81 0-1.12L13.15 15s-.04-.11 0-.15l2.27-2.25Z" />
    </g>
  </svg>
)

export const CalendarCrossAltOutlineIcon = createIcon(
  "CalendarCrossAltOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-calendar-cross-alt.svg",
    presentationName: "calendar-cross-alt",
    style: "outline",
    category: "time",
  },
)
