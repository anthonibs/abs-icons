import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2C7.98 2 3.91 3.21 3.91 5.52v12.95c0 2.31 4.07 3.52 8.09 3.52.41 0 .75-.34.75-.75s-.34-.75-.75-.75c-4.27 0-6.59-1.34-6.59-2.02v-4.34c1.55.92 4.08 1.39 6.59 1.39.41 0 .75-.34.75-.75s-.34-.75-.75-.75c-4.27 0-6.59-1.34-6.59-2.02V7.66c1.55.92 4.08 1.39 6.59 1.39s5.05-.47 6.59-1.39V12c0 .41.34.75.75.75s.75-.34.75-.75V5.52C20.09 3.21 16.02 2 12 2m0 5.55c-4.27 0-6.59-1.34-6.59-2.02S7.74 3.51 12 3.51s6.59 1.34 6.59 2.02S16.26 7.55 12 7.55" /><path d="M7.63 10.21c-.4-.12-.82.1-.93.5-.12.4.1.81.5.94.59.18 1.25.32 1.94.43h.11c.36 0 .68-.27.74-.64a.747.747 0 0 0-.63-.85c-.62-.1-1.21-.22-1.73-.38m0 6.48c-.4-.12-.82.1-.93.5-.12.4.1.81.5.94.59.18 1.24.32 1.94.43h.11c.36 0 .68-.27.74-.64a.747.747 0 0 0-.63-.85c-.63-.1-1.21-.23-1.73-.38m11.12 1.62-.96 1.22v-5.68c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.68l-.96-1.22a.757.757 0 0 0-1.05-.13.75.75 0 0 0-.13 1.05l1.08 1.38c.68.86 1.08 1.39 1.81 1.39s1.13-.52 1.81-1.38l1.08-1.38c.26-.33.2-.8-.13-1.05-.33-.26-.8-.2-1.05.13Z" /></svg>;


      export const DatabaseDownloadOutlineIcon = createIcon("DatabaseDownloadOutlineIcon", SVGComponent, {
  "fileName": "abs-database-download.svg",
  "presentationName": "database-download",
  "style": "outline",
  "category": "general"
});