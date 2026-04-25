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
    <path d="M21.81 9.6a3.73 3.73 0 0 0-3.47-2.38H13v-1.2c.39-.02.7-.34.7-.73s-.33-.73-.73-.73H6.79c-.4 0-.73.33-.73.73s.31.72.7.73v1.2h-1.1c-1.53 0-2.92.96-3.47 2.38-.93 2.41-.93 5.06 0 7.47a3.74 3.74 0 0 0 3.47 2.38h12.67c1.53 0 2.92-.96 3.47-2.38.93-2.41.93-5.06 0-7.47ZM8.23 7.22v-1.2h3.31v1.2zm12.22 9.33c-.33.86-1.18 1.44-2.1 1.44H5.66c-.93 0-1.77-.58-2.1-1.44a9.1 9.1 0 0 1 0-6.42c.33-.86 1.18-1.44 2.1-1.44h12.67c.93 0 1.77.58 2.1 1.44.78 2.04.79 4.38 0 6.42Z" />
  </svg>
)

export const FuelTankEmptyOutlineIcon = createIcon(
  "FuelTankEmptyOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-fuel-tank-empty.svg",
    presentationName: "fuel-tank-empty",
    style: "outline",
    category: "energy",
  },
)
