import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M7.28 7.47c.29.29.29.77 0 1.06l-3.06 3.06c-.23.23-.23.6 0 .83l3.06 3.06c.29.29.29.77 0 1.06s-.77.29-1.06 0l-3.43-3.43c-.61-.61-.61-1.59 0-2.2l3.43-3.43c.29-.29.77-.29 1.06 0Zm9.44 0c-.29.29-.29.77 0 1.06l3.06 3.06c.23.23.23.6 0 .83l-3.06 3.06c-.29.29-.29.77 0 1.06s.77.29 1.06 0l3.43-3.43c.61-.61.61-1.59 0-2.2l-3.43-3.43a.754.754 0 0 0-1.06 0Z" /></svg>;


      export const CodeOutlineIcon = createIcon("CodeOutlineIcon", SVGComponent, {
  "fileName": "abs-code.svg",
  "presentationName": "code",
  "style": "outline",
  "category": "documents"
});