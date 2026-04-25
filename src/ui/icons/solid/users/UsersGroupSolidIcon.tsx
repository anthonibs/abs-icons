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
    <path d="M15.5 7.5c0 1.93-1.57 3.5-3.5 3.5S8.5 9.43 8.5 7.5 10.07 4 12 4s3.5 1.57 3.5 3.5m2.5 9c0 1.93-2.69 3.5-6 3.5s-6-1.57-6-3.5S8.69 13 12 13s6 1.57 6 3.5M7.35 5.01c.14.01.22.17.16.3C7.19 5.97 7 6.72 7 7.5s.17 1.49.48 2.14c.06.13-.02.28-.16.29-1.51.11-2.76-1.03-2.76-2.46s1.27-2.59 2.79-2.46M4.98 18.93c.17.03.29-.17.2-.31-.41-.61-.67-1.32-.67-2.13s.24-1.47.63-2.06c.09-.14-.03-.33-.2-.31-1.68.27-2.93 1.24-2.93 2.4s1.28 2.15 2.98 2.4ZM17 7.5c0 .77-.17 1.49-.48 2.14-.06.13.02.28.16.29 1.51.11 2.76-1.03 2.76-2.46s-1.27-2.59-2.79-2.46c-.14.01-.22.17-.16.3.32.66.51 1.41.51 2.19m1.83 11.13c-.09.14.03.33.2.31 1.7-.26 2.98-1.24 2.98-2.4s-1.25-2.13-2.93-2.4c-.17-.03-.29.17-.2.31.39.59.63 1.28.63 2.06s-.26 1.52-.67 2.13Z" />
  </svg>
)

export const UsersGroupSolidIcon = createIcon(
  "UsersGroupSolidIcon",
  SVGComponent,
  {
    fileName: "abs-users-group-solid.svg",
    presentationName: "users-group",
    style: "solid",
    category: "users",
  },
)
