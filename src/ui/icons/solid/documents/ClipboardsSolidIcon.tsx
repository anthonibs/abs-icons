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
    <g>
      <path d="M21.45 5.58c-.64-1.04-1.91-1.74-4.01-2.23l-1.81-.41c-.91-.22-1.69-.33-2.39-.33-1.8 0-2.93.74-3.69 2.32-.07.14-.14.29-.21.46-.2.48-.38 1.06-.53 1.74l-1.07 4.53c-.48 2.07-.41 3.51.22 4.54.65 1.02 1.92 1.73 4 2.22l1.83.44c.58.14 1.13.22 1.62.27 2.93.27 4.38-.98 5.19-4.48l1.07-4.53c.49-2.07.42-3.51-.22-4.53Z" />
      <path d="m12.46 20.34-1.65.54c-3.85 1.24-5.65.32-6.9-3.49l-1.39-4.28c-.64-1.95-.68-3.35-.15-4.39s1.69-1.81 3.67-2.45l1.28-.42c-.08.27-.15.56-.22.86l-1.07 4.54c-.6 2.55-.46 4.42.45 5.87s2.52 2.4 5.08 3.01l.91.21Z" />
    </g>
  </svg>
)

export const ClipboardsSolidIcon = createIcon(
  "ClipboardsSolidIcon",
  SVGComponent,
  {
    fileName: "abs-clipboards-solid.svg",
    presentationName: "clipboards",
    style: "solid",
    category: "documents",
  },
)
