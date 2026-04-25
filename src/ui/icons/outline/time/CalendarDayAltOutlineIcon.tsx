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
      <path d="M16.64 4.02V2.79a.781.781 0 0 0-1.56 0v.98c-.91-.1-1.92-.16-3.07-.16s-2.16.05-3.07.16v-.98a.781.781 0 0 0-1.56 0v1.23c-3.89.9-5.15 3.39-5.15 8.78 0 7.14 2.19 9.2 9.78 9.2s9.78-2.06 9.78-9.2c0-5.39-1.26-7.89-5.15-8.78M7.36 5.61v.38a.781.781 0 0 0 1.56 0v-.67c.88-.1 1.89-.15 3.07-.15s2.19.05 3.07.15v.67a.781.781 0 0 0 1.56 0v-.38c2.83.77 3.58 2.74 3.58 7.19 0 1.42-.08 2.58-.28 3.54H4.06c-.19-.96-.28-2.12-.28-3.54 0-4.45.74-6.42 3.58-7.19M12 20.43c-4.27 0-6.42-.54-7.43-2.52h14.85c-1.01 1.98-3.16 2.52-7.43 2.52Z" />
      <path d="M9.39 13.32c0 1.3.99 2.1 2.61 2.1s2.61-.8 2.61-2.1c0-.71-.37-1.33-1.01-1.69.47-.32.76-.8.76-1.45 0-1.36-1.08-2.06-2.36-2.06s-2.37.7-2.37 2.06c0 .65.3 1.14.76 1.45-.64.38-1 .98-1 1.69M12 9.42c.54 0 .94.3.94.83s-.4.84-.94.84-.94-.32-.94-.84.4-.83.94-.83m0 2.77c.69 0 1.19.34 1.19.96s-.5.97-1.19.97-1.19-.34-1.19-.97.5-.96 1.19-.96" />
    </g>
  </svg>
)

export const CalendarDayAltOutlineIcon = createIcon(
  "CalendarDayAltOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-calendar-day-alt.svg",
    presentationName: "calendar-day-alt",
    style: "outline",
    category: "time",
  },
)
