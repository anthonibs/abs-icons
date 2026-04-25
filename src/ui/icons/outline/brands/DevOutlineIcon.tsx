import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M7.85 10.08a.8.8 0 0 0-.49-.17h-.7v4.15h.7a.7.7 0 0 0 .49-.17c.17-.12.2-.29.2-.52v-2.82a.58.58 0 0 0-.2-.46ZM19.2 3.03H4.8c-.99 0-1.8.81-1.8 1.8v14.43c0 .9.81 1.71 1.8 1.71h14.46c.99 0 1.74-.78 1.74-1.74V4.83c-.03-.99-.81-1.8-1.8-1.8M9.21 13.39c0 .78-.49 1.92-1.92 1.92H6.08c-.36 0-.64-.29-.64-.64V9.31c0-.36.29-.64.64-.64h1.27c1.42 0 1.92 1.13 1.92 1.92l-.06 2.82Zm3.98-3.51h-1.66c-.25 0-.46.21-.46.46v1.08h1.31v1.19h-1.31v1.08c0 .25.21.46.46.46h1.66v1.19h-2.5c-.44 0-.81-.32-.87-.78V9.51c0-.44.32-.81.78-.87h2.58v1.25Zm4.18 4.56c-.52 1.22-1.48.99-1.92 0l-1.54-5.81h1.07c.16 0 .29.11.33.26l.79 3.03c.09.34.58.34.67 0l.79-3c.04-.15.18-.26.33-.26h1.04l-1.57 5.78Z" /></svg>;


      export const DevOutlineIcon = createIcon("DevOutlineIcon", SVGComponent, {
  "fileName": "abs-dev.svg",
  "presentationName": "dev",
  "style": "outline",
  "category": "brands"
});