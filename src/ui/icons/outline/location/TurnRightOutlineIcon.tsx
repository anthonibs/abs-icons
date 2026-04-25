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
    <path d="M6.29 18.42c.41 0 .75-.34.75-.75V9.98c0-.09.03-.16.09-.22s.13-.09.22-.09h8.25c.13 0 .19.15.1.24l-1.08 1.08a.742.742 0 1 0 1.05 1.05l2.53-2.53c.33-.33.33-.86 0-1.19l-2.53-2.53a.742.742 0 1 0-1.05 1.05l1.08 1.08c.09.09.03.24-.1.24H7.35c-.5 0-.92.18-1.28.53-.35.35-.53.78-.53 1.28v7.69c0 .41.34.75.75.75Z" />
  </svg>
)

export const TurnRightOutlineIcon = createIcon(
  "TurnRightOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-turn-right.svg",
    presentationName: "turn-right",
    style: "outline",
    category: "location",
  },
)
