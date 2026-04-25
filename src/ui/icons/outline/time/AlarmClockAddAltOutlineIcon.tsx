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
      <path d="M12 22c-5.68 0-8.94-3.26-8.94-8.94S6.32 4.12 12 4.12s8.94 3.26 8.94 8.94S17.68 22 12 22m0-16.4c-4.81 0-7.46 2.65-7.46 7.46s2.65 7.46 7.46 7.46 7.46-2.65 7.46-7.46S16.81 5.6 12 5.6m-7.45-.03 3.67-2.3c.33-.2.42-.62.22-.95a.683.683 0 0 0-.95-.22L3.82 4.4c-.33.2-.42.63-.22.95.2.33.62.42.95.22m11.22-2.29 3.67 2.3c.33.2.75.11.95-.22s.11-.75-.22-.95l-3.67-2.3c-.33-.2-.75-.1-.95.22-.2.33-.11.75.22.95" />
      <path d="M14.75 12.37h-1.96c-.06 0-.12-.05-.12-.12v-1.96c0-.39-.31-.69-.69-.69s-.69.31-.69.69v1.96c0 .06-.05.12-.12.12H9.21c-.39 0-.69.31-.69.69s.31.69.69.69h1.96c.06 0 .12.05.12.12v1.96c0 .39.31.69.69.69s.69-.31.69-.69v-1.96c0-.06.05-.12.12-.12h1.96c.39 0 .69-.31.69-.69s-.31-.69-.69-.69" />
    </g>
  </svg>
)

export const AlarmClockAddAltOutlineIcon = createIcon(
  "AlarmClockAddAltOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-alarm-clock-add-alt.svg",
    presentationName: "alarm-clock-add-alt",
    style: "outline",
    category: "time",
  },
)
