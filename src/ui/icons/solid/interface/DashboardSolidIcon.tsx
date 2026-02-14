import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><rect width={8.76} height={11.43} x={12.74} y={10.07} rx={1.24} ry={1.24} /><path d="M21.5 3.74v3.59c0 .69-.56 1.25-1.24 1.25h-6.27c-.68 0-1.24-.56-1.24-1.25V3.74c0-.68.56-1.24 1.24-1.24h6.27c.68 0 1.24.56 1.24 1.24" /><rect width={8.76} height={11.43} x={2.5} y={2.5} rx={1.24} ry={1.24} /><path d="M11.26 16.66v3.59c0 .68-.56 1.24-1.24 1.24H3.74c-.68 0-1.24-.56-1.24-1.24v-3.59c0-.69.56-1.25 1.24-1.25h6.27c.68 0 1.24.56 1.24 1.25Z" /></svg>;


      export const DashboardSolidIcon = createIcon("DashboardSolidIcon", SVGComponent, {
  "fileName": "abs-dashboard-solid.svg",
  "presentationName": "dashboard",
  "style": "solid",
  "category": "interface"
});