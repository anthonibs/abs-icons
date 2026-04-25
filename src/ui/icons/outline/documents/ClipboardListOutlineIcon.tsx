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
    <g>
      <path d="M15.9 10.29H12c-.4 0-.73.33-.73.73s.33.73.73.73h3.9c.4 0 .73-.33.73-.73s-.33-.73-.73-.73m0 4.88H12c-.4 0-.73.33-.73.73s.33.73.73.73h3.9c.4 0 .73-.33.73-.73s-.33-.73-.73-.73m-7.79-4.88c-.4 0-.73.33-.73.73a.736.736 0 0 0 1.47 0c0-.4-.33-.73-.73-.73Zm0 4.88c-.4 0-.73.33-.73.73a.736.736 0 0 0 1.47 0c0-.4-.33-.73-.73-.73Z" />
      <path d="M16.37 3.93C16.12 2 14.67 2 13.86 2h-3.72c-.81 0-2.26 0-2.51 1.93-3.32.36-4.7 2.2-4.7 6.2v5.58c0 3.88 1.05 6.28 6.28 6.28h5.58c5.23 0 6.28-2.4 6.28-6.28v-5.58c0-4-1.37-5.84-4.7-6.2m-6.23-.54h3.72c.92 0 1.16 0 1.16 1.16 0 .92 0 1.16-1.16 1.16h-3.72c-.92 0-1.16 0-1.16-1.16s.24-1.16 1.16-1.16m9.53 12.33c0 3.44-.68 4.88-4.88 4.88H9.21c-4.2 0-4.88-1.44-4.88-4.88v-5.58c0-3.58 1.12-4.56 3.32-4.81.31 1.78 1.7 1.79 2.49 1.79h3.72c1.92 0 2.4-.94 2.52-1.79 2.19.26 3.29 1.24 3.29 4.81z" />
    </g>
  </svg>
)

export const ClipboardListOutlineIcon = createIcon(
  "ClipboardListOutlineIcon",
  SVGComponent,
  {
    fileName: "abs-clipboard-list.svg",
    presentationName: "clipboard-list",
    style: "outline",
    category: "documents",
  },
)
