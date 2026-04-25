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
    <path d="M21.29 9.38c-.39 0-.71.32-.71.71v3.79c0 .39.32.71.71.71s.71-.32.71-.71v-3.79c0-.39-.32-.71-.71-.71M18.8 8.06c-.85-3.61-3.35-3.61-8.22-3.61-4.61 0-7.1 0-8.07 3.06-.34 1.07-.5 2.52-.5 4.49s.16 3.41.5 4.49v.04c.99 3.03 3.47 3.03 8.06 3.03 4.88 0 7.38 0 8.22-3.63v-.04c.24-1 .34-2.27.34-3.88s-.1-2.86-.33-3.86c0-.03 0-.06-.02-.08Zm-5.98 4.38-2.37 2.85a.712.712 0 1 1-1.09-.92l1.39-1.68h-1.8c-.28 0-.52-.16-.64-.41a.7.7 0 0 1 .09-.76l2.37-2.85a.712.712 0 1 1 1.09.92l-1.39 1.68h1.79c.28 0 .53.16.65.41a.7.7 0 0 1-.09.76" />
  </svg>
)

export const BatteryChargeSolidIcon = createIcon(
  "BatteryChargeSolidIcon",
  SVGComponent,
  {
    fileName: "abs-battery-charge-solid.svg",
    presentationName: "battery-charge",
    style: "solid",
    category: "energy",
  },
)
