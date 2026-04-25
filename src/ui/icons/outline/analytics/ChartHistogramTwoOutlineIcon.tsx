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
    <path d="M21.25 20.44h-.17v-6.15c0-1.17-.96-2.13-2.14-2.13h-2.78c-.22 0-.43.04-.64.11V5.56c0-1.41 0-2.26-.63-2.89-.63-.62-1.43-.62-2.9-.62s-2.27 0-2.9.62-.63 1.48-.63 2.89v2.12a2.2 2.2 0 0 0-.64-.11H5.04c-1.18 0-2.14.96-2.14 2.13v10.74h-.17c-.41 0-.75.34-.75.75s.34.75.75.75h18.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-5.09-6.77h2.78c.35 0 .64.28.64.63v6.15h-4.05V14.3c0-.35.29-.63.64-.63Zm-6.19-8.1c0-.99 0-1.64.18-1.82.19-.19.85-.19 1.84-.19s1.65 0 1.84.19c.19.18.19.84.19 1.82v14.88H9.97V5.56ZM4.42 9.71c0-.35.29-.63.64-.63h2.78c.35 0 .64.28.64.63v10.74H4.43V9.71Z" />
  </svg>
)

export const ChartHistogramTwoOutlineIcon = createIcon(
  "ChartHistogramTwoOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-chart-histogram-two.svg",
    presentationName: "chart-histogram-two",
    style: "outline",
    category: "analytics",
  },
)
