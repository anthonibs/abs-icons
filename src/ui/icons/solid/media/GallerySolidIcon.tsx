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
      d="M18.28 15.82c-.38.17-.82 0-.99-.38-.28-.64-1.12-1.95-1.86-1.95-.41 0-1.18.92-1.69 1.53-.82.98-1.59 1.91-2.57 1.91-.92 0-1.56-.48-2.08-.86-.43-.32-.71-.51-1.02-.51-.53 0-1.12.82-1.32 1.22-.13.26-.4.41-.67.41a.748.748 0 0 1-.67-1.08c.1-.21 1.07-2.05 2.67-2.05.82 0 1.43.45 1.91.81.47.35.78.56 1.18.56.28 0 1.02-.89 1.42-1.37.85-1.02 1.72-2.08 2.84-2.08 1.91 0 3.1 2.55 3.23 2.84.17.38 0 .82-.38.99Zm-9.7-8.77c1.13 0 2.06.92 2.06 2.06s-.92 2.06-2.06 2.06-2.06-.92-2.06-2.06.92-2.06 2.06-2.06M12 2.25C4.8 2.25 2.25 4.8 2.25 12S4.8 21.75 12 21.75s9.75-2.55 9.75-9.75S19.2 2.25 12 2.25"
    />
  </svg>
)

export const GallerySolidIcon = createIcon("GallerySolidIcon", SVGComponent, {
  fileName: "abs-gallery-solid.svg",
  presentationName: "gallery",
  style: "solid",
  category: "media",
})
