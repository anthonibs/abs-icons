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
    <path d="M12 4.24c-7.28 0-9.73 0-9.73 7.76s2.45 7.76 9.73 7.76 9.73 0 9.73-7.76S19.28 4.24 12 4.24m-3.88 8.68c0 .41-.33.75-.74.75h-.93c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.93c.41 0 .74.33.74.75m-1.67 2h3.7c.41 0 .75.34.75.75s-.34.75-.75.75h-3.7a.749.749 0 1 1 0-1.5m3.24-1.25a.749.749 0 1 1 0-1.5h1.85a.749.749 0 1 1 0 1.5zm2.77 1.25h1.39c.41 0 .75.34.75.75s-.34.75-.75.75h-1.39a.749.749 0 1 1 0-1.5m2.95.75c0-.41.34-.75.75-.75h1.39c.41 0 .75.34.75.75s-.34.75-.75.75h-1.39c-.41 0-.75-.33-.75-.75m2.14-2h-3.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.7a.749.749 0 1 1 0 1.5" />
  </svg>
)

export const CreditCardAltSolidIcon = createIcon(
  "CreditCardAltSolidIcon",
  SVGComponent,
  {
    fileName: "abs-credit-card-alt-solid.svg",
    presentationName: "credit-card-alt",
    style: "solid",
    category: "commerce",
  },
)
