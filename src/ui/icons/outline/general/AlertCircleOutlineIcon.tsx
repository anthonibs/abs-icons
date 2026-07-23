import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18.5c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5" /><path d="M12 12.75c-.41 0-.75-.34-.75-.75V8.3c0-.41.34-.75.75-.75s.75.34.75.75V12c0 .41-.34.75-.75.75m.01 3.7a.749.749 0 1 1 0-1.5c.41 0 .75.34.75.75s-.34.75-.75.75" /></g></svg>;


      export const AlertCircleOutlineIcon = createIcon("AlertCircleOutlineIcon", SVGComponent, {
  "fileName": "abs-alert-circle.svg",
  "presentationName": "alert-circle",
  "style": "outline",
  "category": "general",
  "isNew": true
});