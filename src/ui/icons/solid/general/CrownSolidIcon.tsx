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
    <path d="m21.61 13.56.23-2.43c.18-1.92.27-2.87-.06-3.27-.18-.21-.42-.34-.67-.37-.48-.04-1.07.64-2.27 2-.62.71-.93 1.06-1.27 1.11-.19.03-.39 0-.56-.09-.32-.16-.53-.59-.96-1.46l-2.24-4.59C13.01 2.82 12.61 2 12 2s-1.01.82-1.81 2.46L7.95 9.05c-.42.87-.64 1.3-.96 1.46-.18.09-.37.12-.56.09-.34-.05-.65-.4-1.27-1.11-1.2-1.36-1.79-2.04-2.27-2-.26.03-.5.16-.67.37-.33.4-.24 1.35-.06 3.27l.23 2.43c.38 4.01.57 6.02 1.75 7.23S7.09 22 10.64 22h2.72c3.55 0 5.32 0 6.5-1.21s1.37-3.22 1.75-7.23" />
  </svg>
)

export const CrownSolidIcon = createIcon("CrownSolidIcon", SVGComponent, {
  fileName: "abs-crown-solid.svg",
  presentationName: "crown",
  style: "solid",
  category: "general",
})
