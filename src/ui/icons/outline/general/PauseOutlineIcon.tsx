import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.4 5h-2.7c-.88 0-1.6.72-1.6 1.6v10.8c0 .88.72 1.6 1.6 1.6h2.7c.88 0 1.6-.72 1.6-1.6V6.6c0-.88-.72-1.6-1.6-1.6m-.25 2.14v9.72c0 .16-.13.29-.29.29h-1.62a.29.29 0 0 1-.29-.29V7.14c0-.16.13-.29.29-.29h1.62c.16 0 .29.13.29.29M9.3 5H6.6C5.72 5 5 5.72 5 6.6v10.8c0 .88.72 1.6 1.6 1.6h2.7c.88 0 1.6-.72 1.6-1.6V6.6c0-.88-.72-1.6-1.6-1.6m-.25 2.14v9.72c0 .16-.13.29-.29.29H7.14a.29.29 0 0 1-.29-.29V7.14c0-.16.13-.29.29-.29h1.62c.16 0 .29.13.29.29" /></svg>;


      export const PauseOutlineIcon = createIcon("PauseOutlineIcon", SVGComponent, {
  "fileName": "abs-pause.svg",
  "presentationName": "pause",
  "style": "outline",
  "category": "general",
  "isNew": false
});