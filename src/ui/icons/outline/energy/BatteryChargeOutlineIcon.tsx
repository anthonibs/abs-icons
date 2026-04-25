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
    <path d="M21.31 9.49c-.38 0-.69.31-.69.69v3.69c0 .38.31.69.69.69s.69-.31.69-.69v-3.69c0-.38-.31-.69-.69-.69m-8.77 1.85h-1.75l1.36-1.63c.25-.29.21-.73-.09-.97a.7.7 0 0 0-.98.09L8.77 11.6a.698.698 0 0 0 .54 1.14h1.75L9.7 14.37c-.25.29-.21.73.09.97a.683.683 0 0 0 .97-.09l2.31-2.77a.698.698 0 0 0-.54-1.14Z" />
    <path d="M10.84 3.98C4.23 3.98 2 3.98 2 12s2.23 8.02 8.84 8.02 8.84 0 8.84-8.02-2.23-8.02-8.84-8.02m0 14.65c-6.46 0-7.45 0-7.45-6.63s.99-6.63 7.45-6.63 7.45 0 7.45 6.63-.99 6.63-7.45 6.63" />
  </svg>
)

export const BatteryChargeOutlineIcon = createIcon(
  "BatteryChargeOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-battery-charge.svg",
    presentationName: "battery-charge",
    style: "outline",
    category: "energy",
  },
)
