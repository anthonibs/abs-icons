import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21 21.59c-.41 0-.75-.34-.75-.75v-6.63c0-.41.34-.75.75-.75s.75.34.75.75v6.63c0 .41-.34.75-.75.75m-4.5 0c-.41 0-.75-.34-.75-.75V6.47c0-.41.34-.75.75-.75s.75.34.75.75v14.37c0 .41-.34.75-.75.75m-4.5 0c-.41 0-.75-.34-.75-.75v-9.95c0-.41.34-.75.75-.75s.75.34.75.75v9.95c0 .41-.34.75-.75.75m-4.5 0c-.41 0-.75-.34-.75-.75V3.16c0-.41.34-.75.75-.75s.75.34.75.75v17.69c0 .41-.34.75-.75.75Zm-4.5 0c-.41 0-.75-.34-.75-.75V8.68c0-.41.34-.75.75-.75s.75.34.75.75v12.16c0 .41-.34.75-.75.75" /></svg>;


      export const ChartAnalyticsOutlineIcon = createIcon("ChartAnalyticsOutlineIcon", SVGComponent, {
  "fileName": "abs-chart-analytics.svg",
  "presentationName": "chart-analytics",
  "style": "outline",
  "category": "analytics"
});