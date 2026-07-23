import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18.5c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5" /><path d="M18.17 12.75h-5.14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.14c.41 0 .75.34.75.75s-.34.75-.75.75m-1.03 3.08h-4.11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.11c.41 0 .75.34.75.75s-.34.75-.75.75m-3.08 3.09h-1.03c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.03c.41 0 .75.34.75.75s-.34.75-.75.75m3.08-9.25h-4.11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.11c.41 0 .75.34.75.75s-.34.75-.75.75m-3.08-3.09h-1.03c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.03c.41 0 .75.34.75.75s-.34.75-.75.75" /></g></svg>;


      export const ShadowOutlineIcon = createIcon("ShadowOutlineIcon", SVGComponent, {
  "fileName": "abs-shadow.svg",
  "presentationName": "shadow",
  "style": "outline",
  "category": "general",
  "isNew": true
});