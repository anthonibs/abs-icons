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
    <path d="M12 2.11c-6.29 0-9.89 3.6-9.89 9.89s3.61 9.89 9.89 9.89 9.89-3.61 9.89-9.89-3.6-9.89-9.89-9.89M20.39 12c0 1.91-.38 3.51-1.1 4.79l-.97-.97a.46.46 0 0 1-.13-.31v-.85c0-1.47-1.19-2.66-2.66-2.66h-2.66c-.49 0-.89-.4-.89-.89v-.44c0-.24.2-.44.44-.44 1.22 0 2.21-.99 2.21-2.21v-.89c0-.24.2-.44.44-.44h1.22c.59 0 1.15-.23 1.57-.65l.3-.3c1.45 1.42 2.21 3.53 2.21 6.26ZM12 3.61c1.89 0 3.47.37 4.74 1.07l-.11.11c-.08.08-.2.13-.31.13H15.1c-1.22 0-2.21.99-2.21 2.21v.89c0 .24-.2.44-.44.44-1.22 0-2.21.99-2.21 2.21v.44c0 1.47 1.19 2.66 2.66 2.66h2.66c.49 0 .89.4.89.89v.85c0 .59.23 1.15.65 1.57l1.15 1.15c-1.26 1.26-3.06 1.99-5.34 2.14v-3.05c0-1.47-1.19-2.66-2.66-2.66H7.88c-.24 0-.46-.09-.63-.26l-3.57-3.57c.41-4.66 3.33-7.22 8.34-7.22Zm-8.32 9.74 2.3 2.3c.5.5 1.17.78 1.88.78h2.37c.49 0 .89.4.89.89v3.05c-4.4-.29-6.99-2.74-7.43-7.01Z" />
  </svg>
)

export const GlobeAltOutlineIcon = createIcon(
  "GlobeAltOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-globe-alt.svg",
    presentationName: "globe-alt",
    style: "outline",
    category: "location",
  },
)
