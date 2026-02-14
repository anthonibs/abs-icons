import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.99 9.1a2.11 2.11 0 1 0 0-4.22 2.11 2.11 0 0 0 0 4.22m0-2.71c.33 0 .61.27.61.61s-.27.61-.61.61-.61-.27-.61-.61.27-.61.61-.61m2.51 10.25-3.85-6.16c-.3-.48-.81-.76-1.37-.76s-1.07.28-1.37.76L13.9 12.1l-2.79-3.98c-.6-.86-2.05-.86-2.65 0l-5.92 8.45c-.35.5-.39 1.14-.11 1.67.28.54.83.87 1.43.87h16.27c.59 0 1.13-.32 1.41-.83.29-.51.27-1.14-.04-1.64m-10.64.97H3.87s-.07 0-.1-.06 0-.11 0-.12l5.92-8.45s.05-.05.1-.05.07.02.1.05l5.92 8.45s.04.06 0 .12c-.03.06-.09.06-.1.06h-4.83Zm9.37-.06c-.03.06-.08.06-.1.06H17.3c.03-.36-.06-.73-.27-1.04l-2.19-3.13 1.35-2.16c.04-.07.15-.07.2 0l3.85 6.16s.04.06 0 .12Z" /></svg>;


      export const PhotoOutlineIcon = createIcon("PhotoOutlineIcon", SVGComponent, {
  "fileName": "abs-photo.svg",
  "presentationName": "photo",
  "style": "outline",
  "category": "general"
});