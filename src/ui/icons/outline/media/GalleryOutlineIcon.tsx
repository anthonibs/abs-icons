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
    <path
      fillRule="evenodd"
      d="M8.58 11.41a2.311 2.311 0 0 1 0-4.62c1.27 0 2.31 1.04 2.31 2.31s-1.04 2.31-2.31 2.31m0-3.12c-.44 0-.81.36-.81.81s.36.81.81.81.81-.36.81-.81-.36-.81-.81-.81"
    />
    <path d="M6.07 17.21c-.11 0-.23-.02-.33-.08a.75.75 0 0 1-.34-1c.11-.21 1.07-2.05 2.67-2.05.82 0 1.43.45 1.91.81.47.35.78.56 1.18.56.29 0 1.02-.89 1.42-1.37.85-1.02 1.72-2.08 2.84-2.08 1.91 0 3.1 2.55 3.23 2.84.17.38 0 .82-.38.99s-.82 0-.99-.38c-.28-.64-1.12-1.95-1.86-1.95-.41 0-1.18.92-1.68 1.53-.82.99-1.59 1.92-2.58 1.92-.92 0-1.56-.48-2.08-.86-.43-.32-.7-.51-1.02-.51-.53 0-1.12.82-1.32 1.22-.13.26-.4.41-.67.41" />
    <path
      fillRule="evenodd"
      d="M2 12c0 7.38 2.62 10 10 10s10-2.62 10-10S19.38 2 12 2 2 4.62 2 12m1.5 0c0-6.51 1.99-8.5 8.5-8.5s8.5 1.99 8.5 8.5-1.99 8.5-8.5 8.5-8.5-1.99-8.5-8.5"
    />
  </svg>
)

export const GalleryOutlineIcon = createIcon(
  "GalleryOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-gallery.svg",
    presentationName: "gallery",
    style: "outline",
    category: "media",
  },
)
