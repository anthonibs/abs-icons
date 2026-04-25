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
      <path d="M14.42 2.64c-1.5-.85-3.34-.85-4.84 0L4 5.77c-1.35.76-1.35 2.7 0 3.45l5.58 3.14c1.5.84 3.34.84 4.84 0L20 9.22c1.35-.76 1.34-2.7 0-3.45zM3.98 15.2a.47.47 0 0 0-.61.14c-.67.91-.46 2.29.63 2.9l5.58 3.13c1.5.85 3.34.85 4.84 0L20 18.24c1.09-.61 1.3-1.99.63-2.9a.48.48 0 0 0-.61-.14l-4.92 2.76a6.34 6.34 0 0 1-6.2 0z" />
      <path d="M3.87 10.75a.465.465 0 0 0-.64.19c-.48.9-.23 2.11.77 2.67l5.58 3.14c1.5.84 3.34.84 4.84 0L20 13.61c1-.56 1.26-1.78.77-2.67a.465.465 0 0 0-.64-.19l-5.03 2.82a6.34 6.34 0 0 1-6.2 0z" />
    </g>
  </svg>
)

export const LayerThreeAltSolidIcon = createIcon(
  "LayerThreeAltSolidIcon",
  SVGComponent,
  {
    fileName: "abs-layer-three-alt-solid.svg",
    presentationName: "layer-three-alt",
    style: "solid",
    category: "interface",
  },
)
