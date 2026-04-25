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
      d="M5.93 3.14C8.04 2.08 10.51 2 12 2s3.96.09 6.07 1.14c1.07.53 2.06 1.33 2.79 2.49S22 8.27 22 10.15c0 4.33-1.87 7.31-4.05 9.19-.98.84-2.09 1.53-3.28 2.03-1.03.42-1.98.64-2.67.64s-1.64-.22-2.67-.64c-1.19-.5-2.3-1.18-3.28-2.03C3.87 17.46 2 14.49 2 10.15c0-1.87.42-3.36 1.14-4.52s1.72-1.95 2.79-2.49m1.43 5.34c.66.04 1.41.29 2.03.94s.89 1.49.98 2.24c.07.56.04 1.1-.03 1.51-.05.33-.35.66-.67.75-.4.11-.82.15-1.24.13a3.02 3.02 0 0 1-2.03-.94c-.62-.65-.89-1.49-.98-2.24-.07-.54-.05-1.08.05-1.61.05-.28.25-.52.53-.61.44-.14.9-.19 1.36-.16m9.22 0c-.77.04-1.5.38-2.03.94-.62.65-.89 1.49-.98 2.24-.07.56-.04 1.09.03 1.5.06.36.31.66.66.76s.78.16 1.24.12c.77-.04 1.5-.38 2.03-.94.62-.65.89-1.49.98-2.24.07-.54.05-1.08-.05-1.61a.79.79 0 0 0-.53-.61c-.44-.14-.9-.19-1.36-.16"
    />
  </svg>
)

export const AlienAltSolidIcon = createIcon("AlienAltSolidIcon", SVGComponent, {
  fileName: "abs-alien-alt-solid.svg",
  presentationName: "alien-alt",
  style: "solid",
  category: "general",
})
