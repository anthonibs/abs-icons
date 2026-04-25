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
    <path d="M5.13 4.85c-.08 0-.13-.06-.14-.13-.05-.35-.27-.64-.58-.78.14-.11.32-.19.51-.22l10.8-1.54A2 2 0 0 1 18 4.16v.82c-.32-.08-.66-.13-1-.13zm4.62 8c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25S13.24 15.1 12 15.1s-2.25-1.01-2.25-2.25" />
    <path
      fillRule="evenodd"
      d="M18 6.02c1.16.41 2 1.52 2 2.83v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3v-14c0 .18.05.35.13.5.17.3.5.5.87.5h12a3 3 0 0 1 1 .17M12 9.1c-2.07 0-3.75 1.68-3.75 3.75S9.93 16.6 12 16.6s3.75-1.68 3.75-3.75S14.07 9.1 12 9.1m-2 9c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
    />
  </svg>
)

export const BookAltSolidIcon = createIcon("BookAltSolidIcon", SVGComponent, {
  fileName: "abs-book-alt-solid.svg",
  presentationName: "book-alt",
  style: "solid",
  category: "documents",
})
