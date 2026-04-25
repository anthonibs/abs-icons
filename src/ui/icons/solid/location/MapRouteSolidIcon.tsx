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
    <path d="m10.39 11.68-8.1 2.21c-.13.03-.25-.05-.26-.18Q2 12.93 2 12c0-3.17.25-5.01.9-6.34.41-.83 1.03-1.55 1.79-2.08.87-.62 1.96-.95 3.37-1.13.1-.01.21.05.23.16l2.23 8.84c.03.11-.04.22-.14.25Zm.4 1.65c.11-.03.22.04.25.15l2.05 8.12c.05.18-.67.14-1.04.14-.88 0-1.69-.01-2.43-.05-2.2-.11-3.75-.43-4.92-1.26a5.6 5.6 0 0 1-1.79-2.08c-.32-.66-.55-1.45-.69-2.48-.01-.1.05-.21.15-.23l8.42-2.3ZM22 12c0 3.69-.19 5.71-1.3 7.18-.03.03-.06.08-.09.11-.34.44-.73.82-1.19 1.14-1.08.76-2.47 1.09-4.39 1.23-.1 0-.19-.06-.22-.16L10.04 2.54a.21.21 0 0 1 .19-.26c.57-.02 1.18-.03 1.82-.03.89 0 1.7.01 2.44.05 2.21.11 3.75.43 4.93 1.26.46.32.85.7 1.19 1.14.03.03.09.11.09.11C21.81 6.28 22 8.3 22 11.99Z" />
  </svg>
)

export const MapRouteSolidIcon = createIcon("MapRouteSolidIcon", SVGComponent, {
  fileName: "abs-map-route-solid.svg",
  presentationName: "map-route",
  style: "solid",
  category: "location",
})
