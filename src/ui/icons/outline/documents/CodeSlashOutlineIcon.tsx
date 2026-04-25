import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.51 4.16a.75.75 0 0 0-.57-.89c-.4-.09-.81.17-.89.57l-3.56 16c-.09.4.17.81.57.89.4.09.81-.17.89-.57zM7.28 7.47c.29.29.29.77 0 1.06l-3.06 3.06c-.23.23-.23.6 0 .83l3.06 3.06c.29.29.29.77 0 1.06s-.77.29-1.06 0l-3.43-3.43c-.61-.61-.61-1.59 0-2.2l3.43-3.43c.29-.29.77-.29 1.06 0Zm9.44 0c-.29.29-.29.77 0 1.06l3.06 3.06c.23.23.23.6 0 .83l-3.06 3.06c-.29.29-.29.77 0 1.06s.77.29 1.06 0l3.43-3.43c.61-.61.61-1.59 0-2.2l-3.43-3.43a.754.754 0 0 0-1.06 0Z" /></svg>;


      export const CodeSlashOutlineIcon = createIcon("CodeSlashOutlineIcon", SVGComponent, {
  "fileName": "abs-code-slash.svg",
  "presentationName": "code-slash",
  "style": "outline",
  "category": "documents"
});