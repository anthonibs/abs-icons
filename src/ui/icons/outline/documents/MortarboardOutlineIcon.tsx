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
      d="M9.64 3.46c1.52-.71 3.21-.71 4.73 0l6.22 2.92c.98.46 1.41 1.45 1.41 2.36s-.44 1.91-1.41 2.36l-1.32.62s-.05.05-.05.08v4.49c0 1.17-.59 2.29-1.65 2.88-.7.39-1.62.85-2.59 1.22-.96.37-2.02.66-2.98.66s-2.02-.3-2.98-.66c-.97-.37-1.89-.84-2.59-1.22-1.06-.59-1.65-1.72-1.65-2.88V11.8s-.02-.07-.05-.08l-1.32-.62h-.02v2.75c0 .39-.32.7-.7.7s-.7-.31-.7-.7V8.73c0-.91.44-1.91 1.41-2.36l6.22-2.92Zm-3.32 9.01c-.06-.03-.13.02-.13.08v3.75c0 .71.35 1.34.93 1.66.67.37 1.53.8 2.41 1.14.89.34 1.77.57 2.47.57s1.58-.23 2.47-.57c.88-.34 1.74-.77 2.41-1.14.58-.32.93-.95.93-1.66v-3.75c0-.07-.07-.11-.13-.08l-3.32 1.56c-1.52.71-3.21.71-4.73 0l-3.32-1.56ZM4.01 9.85c-.37-.18-.61-.6-.61-1.1s.24-.93.61-1.1l6.22-2.92c1.12-.53 2.42-.53 3.53 0l6.22 2.92c.37.18.61.6.61 1.1s-.24.93-.61 1.1l-6.22 2.92c-1.12.53-2.42.53-3.53 0z"
    />
  </svg>
)

export const MortarboardOutlineIcon = createIcon(
  "MortarboardOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-mortarboard.svg",
    presentationName: "mortarboard",
    style: "outline",
    category: "documents",
  },
)
