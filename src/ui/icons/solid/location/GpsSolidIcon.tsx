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
    <path
      fillRule="evenodd"
      d="M2 12c0 .39.31.7.7.7h1.89a7.445 7.445 0 0 0 6.71 6.71v1.89c0 .39.31.7.7.7s.7-.31.7-.7v-1.89a7.445 7.445 0 0 0 6.71-6.71h1.89c.39 0 .7-.31.7-.7s-.31-.7-.7-.7h-1.89a7.445 7.445 0 0 0-6.71-6.71V2.7c0-.39-.31-.7-.7-.7s-.7.31-.7.7v1.89a7.445 7.445 0 0 0-6.71 6.71H2.7c-.39 0-.7.31-.7.7m6.51 0c0-1.93 1.56-3.49 3.49-3.49s3.49 1.56 3.49 3.49-1.56 3.49-3.49 3.49S8.51 13.93 8.51 12"
    />
    <path d="M9.91 12a2.09 2.09 0 1 1 4.178-.002A2.09 2.09 0 0 1 9.91 12" />
  </svg>
)

export const GpsSolidIcon = createIcon("GpsSolidIcon", SVGComponent, {
  fileName: "abs-gps-solid.svg",
  presentationName: "gps",
  style: "solid",
  category: "location",
})
