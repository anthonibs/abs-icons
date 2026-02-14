import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.03 3h-7.17c-.46 0-.83.37-.83.83s.37.83.83.83h4.95c.13 0 .2.16.11.26l-6.65 6.65c-.36.38-.34.91-.01 1.22.32.3.87.28 1.17-.04l6.66-6.66c.09-.09.26-.03.26.11v4.95c0 .46.37.83.83.83s.83-.37.83-.83V3.97c0-.53-.44-.97-.97-.97Z" /></svg>;


      export const ExportOutlineIcon = createIcon("ExportOutlineIcon", SVGComponent, {
  "fileName": "abs-export-outline.svg",
  "presentationName": "export",
  "style": "outline",
  "category": "general"
});