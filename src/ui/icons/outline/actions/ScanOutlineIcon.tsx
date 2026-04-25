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
    <path d="M3 7.75c-.41 0-.75-.34-.75-.75v-.8c0-2.18 1.77-3.95 3.95-3.95H7c.41 0 .75.34.75.75s-.34.75-.75.75h-.8c-1.35 0-2.45 1.1-2.45 2.45V7c0 .41-.34.75-.75.75m18 0c-.41 0-.75-.34-.75-.75v-.8c0-1.35-1.1-2.45-2.45-2.45H17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.8c2.18 0 3.95 1.77 3.95 3.95V7c0 .41-.34.75-.75.75m-3.2 14H17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.8c1.35 0 2.45-1.1 2.45-2.45V17c0-.41.34-.75.75-.75s.75.34.75.75v.8c0 2.18-1.77 3.95-3.95 3.95m-10.8 0h-.8c-2.18 0-3.95-1.77-3.95-3.95V17c0-.41.34-.75.75-.75s.75.34.75.75v.8c0 1.35 1.1 2.45 2.45 2.45H7c.41 0 .75.34.75.75s-.34.75-.75.75" />
  </svg>
)

export const ScanOutlineIcon = createIcon("ScanOutlineIcon", SVGComponent, {
  fileName: "abs-scan.svg",
  presentationName: "scan",
  style: "outline",
  category: "actions",
})
