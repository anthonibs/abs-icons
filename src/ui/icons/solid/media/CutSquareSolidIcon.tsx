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
    <path d="M12 2C4 2 2 4 2 12s2 10 10 10 10-2 10-10S20 2 12 2m-1.47 5.25h1.52c.9 0 1.65 0 2.24.08.63.08 1.2.27 1.65.72s.65 1.03.73 1.66c.08.59.08 1.34.08 2.24v1.52a.749.749 0 1 1-1.5 0V12c0-.96 0-1.61-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07h-1.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75m7.47 9.5h-1.25V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.25h-3.3c-.9 0-1.65 0-2.24-.08-.63-.08-1.2-.27-1.65-.72s-.65-1.03-.73-1.66c-.08-.59-.08-1.34-.08-2.24v-3.3H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25V6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .96 0 1.61.07 2.1.06.46.17.65.3.78s.32.24.79.3c.48.07 1.13.07 2.09.07h6c.41 0 .75.34.75.75s-.34.75-.75.75" />
  </svg>
)

export const CutSquareSolidIcon = createIcon(
  "CutSquareSolidIcon",
  SVGComponent,
  {
    fileName: "abs-cut-square-solid.svg",
    presentationName: "cut-square",
    style: "solid",
    category: "media",
  },
)
