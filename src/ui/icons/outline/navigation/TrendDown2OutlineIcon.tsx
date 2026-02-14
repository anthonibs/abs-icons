import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.53 17.68h-.1a.7.7 0 0 1-.27-.09s-.02 0-.02-.01l-4.69-2.65a.74.74 0 0 1-.28-1.02.74.74 0 0 1 1.02-.28l3.14 1.78-.19-.69a9.25 9.25 0 0 0-2.91-4.58l-3.19 3.12c-.29.29-.76.29-1.05 0L3.23 7.6c-.3-.29-.3-.76-.01-1.06s.77-.3 1.06-.01l5.25 5.13 3.14-3.07c.26-.26.68-.29.97-.07 1.93 1.44 3.33 3.49 3.96 5.78l.2.71 1.82-3.08a.74.74 0 0 1 1.03-.26c.36.21.48.67.26 1.03l-2.72 4.61a1 1 0 0 1-.18.21c-.08.06-.17.1-.26.13-.07.02-.13.03-.2.03Z" /></svg>;


      export const TrendDown2OutlineIcon = createIcon("TrendDown2OutlineIcon", SVGComponent, {
  "fileName": "abs-trend-down-2.svg",
  "presentationName": "trend-down-2",
  "style": "outline",
  "category": "navigation"
});