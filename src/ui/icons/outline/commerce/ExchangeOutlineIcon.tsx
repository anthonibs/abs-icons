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
    <path d="M18 10c0-.55-.45-1-1-1H5.41l2.3-2.29c.39-.39.39-1.03 0-1.42s-1.03-.39-1.42 0l-4 4c-.28.29-.37.72-.21 1.09.15.37.52.62.92.62h14c.55 0 1-.45 1-1m3.92 3.62c-.15-.37-.52-.62-.92-.62H7c-.55 0-1 .45-1 1s.45 1 1 1h11.59l-2.3 2.29a.996.996 0 1 0 1.41 1.41l4-4c.28-.29.37-.72.21-1.09" />
  </svg>
)

export const ExchangeOutlineIcon = createIcon(
  "ExchangeOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-exchange.svg",
    presentationName: "exchange",
    style: "outline",
    category: "commerce",
  },
)
