import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.07 4.43c-2.17-2.04-4.3-1.97-6.35.19s-8.21 8.69-8.21 8.69c-.41.44-.79 1.23-.87 1.86l-.37 3.24c-.09.8.16 1.54.69 2.03.42.39.98.6 1.59.6.15 0 .31-.01.47-.04l3.22-.55c.62-.11 1.4-.53 1.8-.97l6.77-7.16s.08-.07.11-.12l1.33-1.41c.94-.99 1.42-1.93 1.49-2.89.08-1.18-.48-2.34-1.67-3.47M9.94 18.46c-.19.21-.67.46-.96.52l-3.22.55c-.32.05-.59 0-.77-.17s-.26-.44-.22-.77l.37-3.23c.04-.3.27-.8.47-1.01l5.93-6.28a6.84 6.84 0 0 0 4.35 4.11l-5.94 6.28Zm8.22-8.7-1.1 1.16a5.35 5.35 0 0 1-4.34-4.12l1.09-1.16c1.24-1.3 2.43-1.83 4.23-.13.86.81 1.25 1.56 1.2 2.27-.04.6-.4 1.24-1.08 1.97Z" /></svg>;


      export const PencilEditAltOutlineIcon = createIcon("PencilEditAltOutlineIcon", SVGComponent, {
  "fileName": "abs-pencil-edit-alt.svg",
  "presentationName": "pencil-edit-alt",
  "style": "outline",
  "category": "documents"
});