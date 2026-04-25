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
    <path d="M11.99 22c-.76 0-1.52-.2-2.19-.6-2.09-1.23-2.81-3.95-1.61-6.07.24-.43.55-.81.92-1.13.2-.18.32-.43.32-.7V4.6C9.43 3.17 10.58 2 12 2s2.57 1.17 2.57 2.6v8.9c0 .26.11.52.31.69 1.58 1.39 1.97 3.74.92 5.58a4.33 4.33 0 0 1-2.68 2.08c-.37.1-.75.15-1.13.15m0-18.5c-.59 0-1.07.49-1.07 1.1v8.9c0 .69-.3 1.36-.83 1.82q-.36.315-.6.75c-.8 1.41-.33 3.22 1.06 4.04.66.39 1.44.49 2.18.3.75-.2 1.38-.69 1.77-1.37.7-1.23.44-2.79-.61-3.71-.52-.46-.82-1.12-.82-1.82V4.6c0-.61-.48-1.1-1.07-1.1Z" />
  </svg>
)

export const TemperatureOutlineIcon = createIcon(
  "TemperatureOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-temperature.svg",
    presentationName: "temperature",
    style: "outline",
    category: "nature",
  },
)
