import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18.5c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5" /><path d="M12.01 9.67c-.41 0-.76-.34-.76-.75s.33-.75.75-.75h.01c.41 0 .75.34.75.75s-.34.75-.75.75m1.02 7.19H12c-.41 0-.75-.34-.75-.75v-3.36h-.28c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H12c.41 0 .75.34.75.75v3.36h.28c.41 0 .75.34.75.75s-.34.75-.75.75" /></g></svg>;


      export const InfoCircleOutlineIcon = createIcon("InfoCircleOutlineIcon", SVGComponent, {
  "fileName": "abs-info-circle.svg",
  "presentationName": "info-circle",
  "style": "outline",
  "category": "general",
  "isNew": true
});