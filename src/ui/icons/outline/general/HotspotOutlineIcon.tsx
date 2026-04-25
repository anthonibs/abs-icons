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
    <g fillRule="evenodd">
      <path d="M12 12.18c-.65 0-1.17.53-1.17 1.17s.53 1.17 1.17 1.17 1.17-.53 1.17-1.17-.53-1.17-1.17-1.17m-2.58 1.17a2.58 2.58 0 1 1 5.16 0 2.58 2.58 0 0 1-5.16 0" />
      <path d="M12 8.42c-2.72 0-4.93 2.21-4.93 4.93 0 1.31.52 2.56 1.44 3.48.28.27.29.72.02 1a.71.71 0 0 1-1 .02l-.02-.02a6.325 6.325 0 0 1 0-8.96 6.325 6.325 0 0 1 8.96 0 6.325 6.325 0 0 1 0 8.96c-.28.27-.73.25-1-.04a.71.71 0 0 1 0-.96 4.92 4.92 0 0 0 0-6.97 4.9 4.9 0 0 0-3.49-1.44" />
      <path d="M12 4.76c-4.74 0-8.59 3.85-8.59 8.59 0 2.28.91 4.46 2.52 6.08.28.27.3.71.04 1s-.71.3-1 .04l-.04-.04c-3.91-3.9-3.91-10.24 0-14.14 3.9-3.91 10.24-3.91 14.14 0 3.91 3.9 3.91 10.24 0 14.14a.71.71 0 0 1-1-.03.71.71 0 0 1 0-.96c3.36-3.36 3.36-8.8 0-12.15a8.6 8.6 0 0 0-6.08-2.52" />
    </g>
  </svg>
)

export const HotspotOutlineIcon = createIcon(
  "HotspotOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-hotspot.svg",
    presentationName: "hotspot",
    style: "outline",
    category: "general",
  },
)
