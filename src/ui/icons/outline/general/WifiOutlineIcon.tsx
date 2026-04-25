import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12.01 19.43a.749.749 0 1 1 0-1.5c.41 0 .75.34.75.75s-.34.75-.75.75M21 9.48c-.18 0-.35-.06-.5-.19C15.65 5 8.34 5 3.49 9.29c-.31.27-.78.25-1.06-.06a.756.756 0 0 1 .06-1.06c5.41-4.79 13.58-4.79 18.99 0 .31.27.34.75.06 1.06-.15.17-.35.25-.56.25Z" /><path d="M18.3 13.07c-.19 0-.38-.07-.52-.21-3.19-3.09-8.37-3.09-11.55 0-.3.29-.77.28-1.06-.02s-.28-.77.02-1.06c3.76-3.65 9.88-3.65 13.64 0 .3.29.3.76.02 1.06-.15.15-.34.23-.54.23Z" /><path d="M15.15 16.25c-.19 0-.38-.07-.52-.21-1.45-1.4-3.81-1.4-5.26 0-.3.29-.77.28-1.06-.02s-.28-.77.02-1.06c2.02-1.96 5.32-1.96 7.34 0 .3.29.31.76.02 1.06-.15.15-.34.23-.54.23" /></g></svg>;


      export const WifiOutlineIcon = createIcon("WifiOutlineIcon", SVGComponent, {
  "fileName": "abs-wifi.svg",
  "presentationName": "wifi",
  "style": "outline",
  "category": "general"
});