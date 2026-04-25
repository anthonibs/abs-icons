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
    <path d="M5.84 2c.39 0 .7.32.7.7v1.47c0 .13.12.22.24.2l1.36-.27c1.53-.3 3.11-.16 4.56.41l.91.36c1.24.49 2.57.36 3.87.03.71-.18 1.39.36 1.39 1.09v6.85c0 .6-.41 1.13-.99 1.27l-.42.1c-1.63.38-3.32.15-4.89-.44a7.97 7.97 0 0 0-4.43-.36l-1.44.28c-.09.02-.16.1-.16.2v7.42c0 .38-.31.7-.7.7s-.7-.32-.7-.7V2.7c0-.38.31-.7.7-.7" />
  </svg>
)

export const FlagAltSolidIcon = createIcon("FlagAltSolidIcon", SVGComponent, {
  fileName: "abs-flag-alt-solid.svg",
  presentationName: "flag-alt",
  style: "solid",
  category: "general",
})
