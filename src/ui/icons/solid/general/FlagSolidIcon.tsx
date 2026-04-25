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
    <path d="M19.54 3.38c-.33-.21-.74-.25-1.1-.09-.69.31-3.19 1.17-6.07-.12-1.66-.93-5.21-2.02-7.98-.15-.31.21-.46.57-.46.94v17.25c0 .43.36.79.79.79s.79-.36.79-.79v-5.94c2.62-1.55 5.95.27 6.16.39 3.44 1.55 6.64.64 7.99-.14.26-.15.4-.43.39-.72V4.34c0-.39-.19-.75-.52-.96Z" />
  </svg>
)

export const FlagSolidIcon = createIcon("FlagSolidIcon", SVGComponent, {
  fileName: "abs-flag-solid.svg",
  presentationName: "flag",
  style: "solid",
  category: "general",
})
