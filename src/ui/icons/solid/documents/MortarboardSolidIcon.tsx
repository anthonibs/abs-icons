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
    <path d="M14.22 3.5a5.23 5.23 0 0 0-4.44 0L3.09 6.64c-1.06.5-1.34 1.89-.86 2.87.01.03.02.05.02.08v4.91c0 .41.34.75.75.75s.75-.34.75-.75v-3.7c0-.06.06-.1.11-.07l5.92 2.77c1.41.66 3.03.66 4.44 0l6.69-3.14c1.45-.68 1.45-3.04 0-3.73l-6.69-3.14Z" />
    <path d="M5.11 12.97c-.05-.02-.11.01-.11.07v3.58c0 1.01.5 1.95 1.39 2.44 1.46.81 3.81 1.93 5.61 1.93s4.15-1.12 5.61-1.93c.89-.49 1.39-1.43 1.39-2.44v-3.58c0-.06-.06-.1-.11-.07l-4.04 1.89a6.69 6.69 0 0 1-5.7 0z" />
  </svg>
)

export const MortarboardSolidIcon = createIcon(
  "MortarboardSolidIcon",
  SVGComponent,
  {
    fileName: "abs-mortarboard-solid.svg",
    presentationName: "mortarboard",
    style: "solid",
    category: "documents",
  },
)
