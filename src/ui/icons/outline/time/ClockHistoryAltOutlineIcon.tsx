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
      <path d="M21.61 10.32c-.66-3.9-3.73-7.08-7.61-7.86-3.34-.66-6.64.38-8.91 2.7 0 0-1.6 1.83-1.6 2.25 0 .29.24.52.52.52h3.94c.46-.01.8-.37.8-.81s-.37-.79-.81-.79H6.16A8.13 8.13 0 0 1 12 3.86c5.03 0 9 4.58 7.99 9.78-.62 3.17-3.18 5.72-6.35 6.35A8.16 8.16 0 0 1 3.86 12c0-.46-.37-.8-.81-.8s-.79.38-.79.8h.02c.01 5.36 4.37 9.73 9.74 9.73 5.92 0 10.62-5.31 9.6-11.41" />
      <path d="M11.98 6.36c-.41 0-.73.32-.73.73v4.53c0 .27.16.53.41.64l3.62 1.82c.36.18.8.03.98-.33s.03-.8-.33-.98l-3.23-1.61V7.08c0-.41-.32-.73-.73-.73Z" />
    </g>
  </svg>
)

export const ClockHistoryAltOutlineIcon = createIcon(
  "ClockHistoryAltOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-clock-history-alt.svg",
    presentationName: "clock-history-alt",
    style: "outline",
    category: "time",
  },
)
