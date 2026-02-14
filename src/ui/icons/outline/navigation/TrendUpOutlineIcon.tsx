import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19 8.22c0-.06-.02-.12-.04-.18 0-.03-.01-.07-.02-.1-.02-.04-.05-.07-.07-.1a.5.5 0 0 0-.1-.13V7.7c-.03-.03-.06-.04-.09-.06-.05-.03-.09-.07-.14-.09s-.1-.02-.16-.03c-.04 0-.07-.02-.12-.02h-2.78c-.41 0-.75.34-.75.75s.34.75.75.75h1.06l-4 4.34-1.7-2.77a.73.73 0 0 0-.57-.35.71.71 0 0 0-.62.24l-4.44 4.82c-.28.3-.26.78.04 1.06a.75.75 0 0 0 1.06-.04l3.77-4.09 1.7 2.77c.12.2.33.33.57.35.23.02.46-.07.62-.24l4.53-4.91v1.09c0 .41.34.75.75.75s.75-.34.75-.75V8.25Z" /></svg>;


      export const TrendUpOutlineIcon = createIcon("TrendUpOutlineIcon", SVGComponent, {
  "fileName": "abs-trend-up.svg",
  "presentationName": "trend-up",
  "style": "outline",
  "category": "navigation"
});