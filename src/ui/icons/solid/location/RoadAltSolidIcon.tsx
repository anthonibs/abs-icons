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
    <path d="M19.02 3H12.9v3.35c0 .49-.4.9-.9.9s-.9-.41-.9-.9V3H4.98C3.89 3 3 3.89 3 4.98v14.04C3 20.11 3.89 21 4.98 21h6.12v-3.35c0-.49.4-.9.9-.9s.9.41.9.9V21h6.12c1.09 0 1.98-.89 1.98-1.98V4.98C21 3.89 20.11 3 19.02 3M12.9 13.22c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-2.44c0-.5.4-.9.9-.9s.9.4.9.9z" />
  </svg>
)

export const RoadAltSolidIcon = createIcon("RoadAltSolidIcon", SVGComponent, {
  fileName: "abs-road-alt-solid.svg",
  presentationName: "road-alt",
  style: "solid",
  category: "location",
})
