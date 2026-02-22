import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M13.46 9.35h3.38c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.38c-.41 0-.75.34-.75.75s.34.75.75.75m3.39 3.85H7.17c-.41 0-.74.34-.74.75s.34.75.76.75h9.66c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-.25 7.3H7.41c-.41 0-.75.34-.75.75s.34.75.75.75h9.19c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M7.59 9.58c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m3.04 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1" /><path d="M12.08 1.89c-7.62 0-10.19 0-10.19 8.54s2.57 8.53 10.18 8.53 10.18 0 10.18-8.53-2.55-8.54-10.17-8.54m0 15.57c-7.53 0-8.68 0-8.68-7.03S4.56 3.4 12.08 3.4s8.68 0 8.68 7.03-1.16 7.03-8.68 7.03" /></svg>;


      export const MonitorScreenOutlineIcon = createIcon("MonitorScreenOutlineIcon", SVGComponent, {
  "fileName": "abs-monitor-screen.svg",
  "presentationName": "monitor-screen",
  "style": "outline",
  "category": "general"
});