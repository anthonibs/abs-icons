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
    <circle cx={12} cy={12} r={1.52} />
    <path
      fillRule="evenodd"
      d="M12 2C5.64 2 2 5.64 2 12s3.64 10 10 10 10-3.64 10-10S18.36 2 12 2m5.6 6.63-1.06 4.26a5.01 5.01 0 0 1-3.65 3.65L8.63 17.6q-.225.06-.45.06a1.834 1.834 0 0 1-1.78-2.29l1.06-4.26a5.01 5.01 0 0 1 3.65-3.65l4.26-1.06a1.834 1.834 0 0 1 2.23 2.23"
    />
  </svg>
)

export const CompassSolidIcon = createIcon("CompassSolidIcon", SVGComponent, {
  fileName: "abs-compass-solid.svg",
  presentationName: "compass",
  style: "solid",
  category: "location",
})
