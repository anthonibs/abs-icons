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
    <path d="m4.56 5.57 3.67-2.3c.33-.2.42-.62.22-.95a.683.683 0 0 0-.95-.22L3.83 4.4c-.33.2-.42.63-.22.95.2.33.62.42.95.22m11.21-2.29 3.67 2.3c.33.2.75.11.95-.22s.11-.75-.22-.95l-3.67-2.3c-.33-.2-.75-.1-.95.22-.2.33-.11.75.22.95M12 4.12c-5.68 0-8.94 3.26-8.94 8.94S6.32 22 12 22s8.94-3.26 8.94-8.94S17.68 4.12 12 4.12m2.63 12.41c-.28.27-.71.27-.98 0l-2.21-2.21a.96.96 0 0 1-.29-.69v-3.55c0-.39.31-.69.69-.69s.69.31.69.69v3.27c0 .07.03.15.08.2l2.01 2.01c.27.28.27.71 0 .98Z" />
  </svg>
)

export const AlarmClockAltSolidIcon = createIcon(
  "AlarmClockAltSolidIcon",
  SVGComponent,
  {
    fileName: "abs-alarm-clock-alt-solid.svg",
    presentationName: "alarm-clock-alt",
    style: "solid",
    category: "time",
  },
)
