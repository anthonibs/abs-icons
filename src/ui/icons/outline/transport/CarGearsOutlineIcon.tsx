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
    <path d="M15.7 8.49c-.41 0-.75.34-.75.75 0 .71 0 1.14-.08 1.33-.12.28-.33.49-.59.6-.21.08-1.53.08-1.53.08V9.24c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.89c0 .07-.05.12-.12.12H9.17c-.07 0-.12-.05-.12-.12V9.24c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.52c0 .41.34.75.75.75s.75-.34.75-.75v-1.89c0-.07.05-.12.12-.12h1.96c.07 0 .12.05.12.12v1.89c0 .41.34.75.75.75s.75-.34.75-.75v-1.92s.03-.09.08-.09c.34 0 1.6-.03 2.01-.2.63-.26 1.13-.75 1.41-1.4.19-.47.19-.98.19-1.91 0-.41-.34-.75-.75-.75Z" />
    <path d="M12 2.31c-6.06 0-9.54 3.53-9.54 9.69s3.48 9.69 9.54 9.69 9.54-3.53 9.54-9.69S18.06 2.31 12 2.31m0 17.88c-5.18 0-8.04-2.91-8.04-8.19S6.82 3.81 12 3.81s8.04 2.91 8.04 8.19-2.86 8.19-8.04 8.19" />
  </svg>
)

export const CarGearsOutlineIcon = createIcon(
  "CarGearsOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-car-gears.svg",
    presentationName: "car-gears",
    style: "outline",
    category: "transport",
  },
)
