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
    <circle cx={10.92} cy={6.5} r={4} />
    <path
      fillRule="evenodd"
      d="M17.92 16.84c.41 0 .75.34.75.75v.66h.66c.41 0 .75.34.75.75s-.34.75-.75.75h-.66v.66c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.66h-.66c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.66v-.66c0-.41.34-.75.75-.75"
    />
    <path d="M15.06 20.73c-1.16.49-2.59.77-4.14.77-3.87 0-7-1.79-7-4s3.13-4 7-4c2.61 0 4.89.82 6.09 2.03-.57.25-1.02.74-1.22 1.34a2.248 2.248 0 0 0-.72 3.86Z" />
  </svg>
)

export const UserAddSolidIcon = createIcon("UserAddSolidIcon", SVGComponent, {
  fileName: "abs-user-add-solid.svg",
  presentationName: "user-add",
  style: "solid",
  category: "users",
})
