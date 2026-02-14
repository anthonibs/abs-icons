import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.42 6.99c-.23 0-.47-.11-.61-.31-.6-.85-1.41-1.54-2.34-2a.75.75 0 0 1-.34-1c.18-.37.63-.52 1-.34a7.75 7.75 0 0 1 2.89 2.47.753.753 0 0 1-.61 1.19Zm1.41 7.92h-.12a.76.76 0 0 1-.62-.86c.11-.64.16-1.32.16-2.04s-.05-1.4-.16-2.04c-.07-.41.21-.79.62-.86s.79.21.86.62c.12.72.18 1.49.18 2.28s-.06 1.57-.18 2.28a.75.75 0 0 1-.74.63Zm-8.76 6.84c-5.38.02-9.82-4.37-9.82-9.75 0-6.19 3.56-9.75 9.75-9.75.07 0 1.49.02 2.31.2.4.09.66.49.57.9-.09.4-.5.66-.9.57-.49-.11-1.46-.16-1.99-.16-5.26-.01-8.19 2.87-8.24 8.1-.04 4.57 3.68 8.39 8.25 8.39 3.35 0 5.81-1.18 7.11-3.4a.752.752 0 1 1 1.3.76c-1.58 2.69-4.46 4.12-8.33 4.14Z" /><path d="M14.97 16.57c-.21 0-.42-.09-.57-.26l-2.93-3.41a.94.94 0 0 1-.22-.6V8.76c0-.41.34-.75.75-.75s.75.34.75.75v2.98c0 .22.08.43.22.6l2.57 2.99c.27.31.23.79-.08 1.06-.14.12-.32.18-.49.18" /></svg>;


      export const StopWatchOutlineIcon = createIcon("StopWatchOutlineIcon", SVGComponent, {
  "fileName": "abs-stop-watch.svg",
  "presentationName": "stop-watch",
  "style": "outline",
  "category": "time"
});