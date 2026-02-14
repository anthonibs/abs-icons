import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16 15.2H8c-.44 0-.8.36-.8.8s.36.8.8.8h8c.44 0 .8-.36.8-.8s-.36-.8-.8-.8m-8.07-2.4H13c.44 0 .8-.36.8-.8s-.36-.8-.8-.8H7.93c-.44 0-.8.36-.8.8s.36.8.8.8" /><path d="M20.11 6.98 17.03 3.9a5.72 5.72 0 0 0-4.08-1.69H8c-1.55 0-3.01.6-4.1 1.7-1.1 1.1-1.7 2.55-1.7 4.1v8c0 1.55.6 3.01 1.7 4.1 1.1 1.1 2.55 1.7 4.1 1.7h8c1.55 0 3.01-.6 4.1-1.7 1.1-1.09 1.7-2.55 1.7-4.1v-4.93c0-1.55-.6-3-1.69-4.09Zm-1.13 1.13c.1.1.17.21.26.31-.39-.13-.8-.22-1.23-.22h-1c-.32 0-.62-.13-.85-.35-.11-.11-.2-.24-.26-.39s-.09-.3-.09-.46V6c0-.43-.09-.84-.22-1.23.1.09.22.16.31.26zm1.23 7.9c0 1.12-.44 2.18-1.23 2.97s-1.85 1.23-2.97 1.23h-8c-1.12 0-2.18-.44-2.97-1.23a4.18 4.18 0 0 1-1.23-2.97v-8c0-1.12.44-2.18 1.23-2.97s1.85-1.23 2.97-1.23h4c.59 0 1.14.23 1.56.65s.64.98.64 1.56v1c0 .37.07.73.21 1.07s.35.65.61.91c.53.53 1.23.82 1.98.82h1c.59 0 1.14.23 1.56.65s.64.98.64 1.56v4Z" /></svg>;


      export const FileTypeTextOutlineIcon = createIcon("FileTypeTextOutlineIcon", SVGComponent, {
  "fileName": "abs-file-type-text.svg",
  "presentationName": "file-type-text",
  "style": "outline",
  "category": "documents"
});