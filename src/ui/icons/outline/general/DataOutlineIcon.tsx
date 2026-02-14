import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 2C7.98 2 3.91 3.21 3.91 5.52v12.95c0 2.31 4.07 3.52 8.09 3.52s8.09-1.21 8.09-3.52V5.52C20.09 3.21 16.02 2 12 2m0 1.5c4.27 0 6.59 1.34 6.59 2.02S16.26 7.54 12 7.54 5.41 6.2 5.41 5.52 7.74 3.5 12 3.5m0 17c-4.27 0-6.59-1.34-6.59-2.02v-4.34c1.55.92 4.08 1.39 6.59 1.39s5.05-.47 6.59-1.39v4.34c0 .69-2.33 2.02-6.59 2.02m0-6.48c-4.27 0-6.59-1.34-6.59-2.02V7.66c1.55.92 4.08 1.39 6.59 1.39s5.05-.47 6.59-1.39V12c0 .69-2.33 2.02-6.59 2.02" /><path d="M9.36 10.59c-.62-.1-1.21-.22-1.73-.38-.4-.12-.82.1-.93.5-.12.4.1.81.5.94.59.18 1.25.32 1.94.43h.11c.36 0 .68-.27.74-.64a.747.747 0 0 0-.63-.85m0 6.48c-.63-.1-1.21-.23-1.73-.38-.4-.12-.82.1-.93.5-.12.4.1.81.5.94.59.18 1.24.32 1.94.43h.11c.36 0 .68-.27.74-.64a.747.747 0 0 0-.63-.85" /></g></svg>;


      export const DataOutlineIcon = createIcon("DataOutlineIcon", SVGComponent, {
  "fileName": "abs-data.svg",
  "presentationName": "data",
  "style": "outline",
  "category": "general"
});