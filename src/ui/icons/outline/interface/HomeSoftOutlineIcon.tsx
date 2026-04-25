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
    <path d="M13.02 22h-2.03c-3.35 0-5.03 0-6.32-1.12s-1.53-2.78-2-6.09l-.26-1.8c-.37-2.59-.56-3.89.04-5.13.6-1.25 1.79-1.97 3.96-3.27l1.28-.76c1.96-1.18 3.05-1.84 4.33-1.84s2.36.65 4.33 1.84l1.27.76c2.17 1.3 3.37 2.02 3.96 3.27.59 1.24.41 2.54.04 5.13l-.26 1.79c-.47 3.31-.71 4.98-2 6.09-1.29 1.12-2.97 1.12-6.33 1.12Zm-9.14-9.22.26 1.79c.42 2.95.63 4.42 1.5 5.17s2.36.75 5.34.75h2.03c2.98 0 4.47 0 5.34-.75s1.08-2.23 1.5-5.17l.26-1.8c.33-2.29.49-3.44.09-4.27-.39-.82-1.26-1.36-3.38-2.63l-1.27-.76c-1.92-1.16-2.73-1.62-3.56-1.62s-1.64.47-3.56 1.62l-1.28.76C5.03 7.14 4.16 7.68 3.77 8.5c-.4.83-.24 1.98.09 4.27Z" />
    <path d="M12 17.38c-1.16 0-2.26-.37-3.21-1.07a.75.75 0 0 1 .9-1.2 3.9 3.9 0 0 0 4.62 0 .75.75 0 0 1 .9 1.2A5.34 5.34 0 0 1 12 17.38" />
  </svg>
)

export const HomeSoftOutlineIcon = createIcon(
  "HomeSoftOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-home-soft.svg",
    presentationName: "home-soft",
    style: "outline",
    category: "interface",
  },
)
