import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16.38 3.93C16.11 2.01 14.66 2 13.84 2h-3.68c-.82 0-2.27 0-2.54 1.93-3.29.38-4.64 2.23-4.64 6.22v5.55c0 3.89 1.05 6.3 6.26 6.3h5.51c5.21 0 6.26-2.41 6.26-6.3v-5.55c0-4-1.36-5.84-4.64-6.22Zm-6.21-.43h3.68c.9 0 1.09 0 1.09 1.1 0 .91 0 1.1-1.09 1.1h-3.68c-.9 0-1.09 0-1.09-1.1s.19-1.1 1.09-1.1m9.36 12.2c0 3.38-.66 4.8-4.76 4.8H9.26c-4.1 0-4.76-1.42-4.76-4.8v-5.55c0-3.51 1.03-4.46 3.16-4.72.33 1.77 1.72 1.77 2.52 1.77h3.68c1.91 0 2.41-.92 2.54-1.77 2.12.26 3.14 1.22 3.14 4.72v5.55Z" /></svg>;


      export const ClipboardOutlineIcon = createIcon("ClipboardOutlineIcon", SVGComponent, {
  "fileName": "abs-clipboard.svg",
  "presentationName": "clipboard",
  "style": "outline",
  "category": "documents"
});