import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14 21.79c-3.67 0-6.76-2.66-7.55-6.21a5.74 5.74 0 0 1-4.2-5.51c0-1.57 1.27-3.9 3.78-6.92A2.56 2.56 0 0 1 8 2.22c.76 0 1.48.34 1.97.93.37.45.72.89 1.04 1.31.33-.42.66-.83.98-1.22.5-.61 1.23-.96 2.01-.96s1.51.35 2.01.96c2.62 3.2 5.74 7.62 5.74 10.53 0 4.42-3.48 8.01-7.75 8.01Zm0-18.01c-.33 0-.63.15-.85.41-3.43 4.19-5.4 7.68-5.4 9.58 0 3.59 2.8 6.51 6.25 6.51s6.25-2.92 6.25-6.51c0-1.9-1.97-5.4-5.4-9.58-.22-.27-.52-.41-.85-.41m-6-.06c-.32 0-.61.14-.82.39C5 6.74 3.75 8.91 3.75 10.07a4.24 4.24 0 0 0 2.5 3.85v-.14c0-2.22 1.81-5.31 3.82-8.07-.38-.51-.8-1.05-1.26-1.6-.21-.25-.5-.39-.82-.39Zm6 15.07c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25 0-.41.34-.75.75-.75s.75.34.75.75c0 2.62-2.13 4.75-4.75 4.75" /></svg>;


      export const WaterOutlineIcon = createIcon("WaterOutlineIcon", SVGComponent, {
  "fileName": "abs-water.svg",
  "presentationName": "water",
  "style": "outline",
  "category": "general"
});