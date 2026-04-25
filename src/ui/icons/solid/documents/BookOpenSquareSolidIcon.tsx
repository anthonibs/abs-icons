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
    <path d="M12 2.19C4 2.19 2 4.14 2 12s2 9.81 10 9.81S22 19.86 22 12s-2-9.81-10-9.81m-.52 14.71h-.01c-.63-.34-1.71-.87-2.57-1.09-.46-.1-1.01-.17-1.54-.21-.86-.07-1.56-.77-1.56-1.62V8.39c0-.86.68-1.55 1.54-1.49.53.04 1.11.1 1.56.22.85.21 1.91.72 2.55 1.05.01.01.02.01.03.02zm6.72-2.92c0 .86-.7 1.55-1.56 1.62-.53.04-1.09.1-1.54.21-.87.22-1.94.74-2.57 1.08h-.01V8.16c.58-.33 1.52-.84 2.28-1.04.56-.16 1.28-.23 1.92-.26.83-.04 1.49.65 1.49 1.48v5.65Z" />
  </svg>
)

export const BookOpenSquareSolidIcon = createIcon(
  "BookOpenSquareSolidIcon",
  SVGComponent,
  {
    fileName: "abs-book-open-square-solid.svg",
    presentationName: "book-open-square",
    style: "solid",
    category: "documents",
  },
)
