import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.11 6.98 17.03 3.9a5.72 5.72 0 0 0-4.08-1.69H8c-1.55 0-3.01.6-4.1 1.7-1.1 1.1-1.7 2.55-1.7 4.1v8c0 1.55.6 3.01 1.7 4.1 1.1 1.1 2.55 1.7 4.1 1.7h8c1.55 0 3.01-.6 4.1-1.7 1.1-1.09 1.7-2.55 1.7-4.1v-4.93c0-1.55-.6-3-1.69-4.09ZM20.2 16c0 1.12-.44 2.18-1.23 2.97S17.12 20.2 16 20.2h-3.2V18c0-.44-.36-.8-.8-.8s-.8.36-.8.8v2.2H8c-1.12 0-2.18-.44-2.97-1.23A4.18 4.18 0 0 1 3.8 16V8c0-1.12.44-2.18 1.23-2.97S6.88 3.8 8 3.8h4.95c1.11 0 2.16.44 2.95 1.23l3.08 3.08c.79.79 1.23 1.85 1.23 2.96V16Z" /><path d="M12 9.2c-1.54 0-2.8 1.26-2.8 2.8s1.26 2.8 2.8 2.8 2.8-1.26 2.8-2.8-1.26-2.8-2.8-2.8m0 4c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2" /></svg>;


      export const SaveOutlineIcon = createIcon("SaveOutlineIcon", SVGComponent, {
  "fileName": "abs-save.svg",
  "presentationName": "save",
  "style": "outline",
  "category": "documents"
});