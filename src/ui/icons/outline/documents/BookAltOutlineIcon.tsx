import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M12.59 9.14a3.756 3.756 0 0 0-4.3 4.3 3.76 3.76 0 0 0 3.11 3.11c2.53.39 4.69-1.76 4.3-4.3a3.76 3.76 0 0 0-3.11-3.11M9.81 13.4a2.253 2.253 0 0 1 2.74-2.74c.79.19 1.43.84 1.62 1.62.4 1.68-1.07 3.15-2.74 2.74-.79-.19-1.43-.84-1.62-1.62" /><path d="M10 18.1c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" /><path fillRule="evenodd" d="M15.61 1.43a2.748 2.748 0 0 1 3.14 2.72V5.3c0 .14.08.26.2.34 1.08.66 1.8 1.85 1.8 3.21v10c0 2.07-1.68 3.75-3.75 3.75H7c-2.07 0-3.75-1.68-3.75-3.75V4.79c0-.91.66-1.68 1.56-1.81l10.8-1.54ZM5.07 6.6h-.32v12.25c0 1.24 1.01 2.25 2.25 2.25h10c1.24 0 2.25-1.01 2.25-2.25v-10c0-1.24-1-2.24-2.24-2.25zm12.18-1.5H5.07c-.17 0-.32-.15-.32-.32 0-.16.12-.3.28-.32l10.8-1.54c.75-.11 1.43.48 1.43 1.24v.94Z" /></svg>;


      export const BookAltOutlineIcon = createIcon("BookAltOutlineIcon", SVGComponent, {
  "fileName": "abs-book-alt.svg",
  "presentationName": "book-alt",
  "style": "outline",
  "category": "documents"
});