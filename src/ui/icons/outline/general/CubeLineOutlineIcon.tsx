import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m19.5 5.06-5.14-2.85c-1.33-.74-3.4-.74-4.72 0L4.51 5.06c-1.4.78-2.5 2.64-2.5 4.23v5.42c0 1.6 1.1 3.46 2.5 4.23l5.14 2.85c.66.36 1.51.55 2.36.55s1.7-.18 2.36-.55l5.14-2.85c1.4-.78 2.5-2.64 2.5-4.23V9.29c0-1.6-1.1-3.46-2.5-4.23Zm-9.13-1.54c.43-.24 1.03-.36 1.63-.36s1.2.12 1.64.36l5.14 2.85c.33.18.65.48.93.84l-2.83 1.63-7.9-4.55 1.4-.78ZM5.23 6.37l2.21-1.22 7.93 4.57L12 11.67 4.3 7.23c.27-.36.59-.66.93-.85Zm0 11.26c-.92-.51-1.73-1.87-1.73-2.92V9.29c0-.23.05-.48.12-.74l7.63 4.4v7.81c-.32-.06-.63-.15-.88-.29l-5.14-2.85Zm15.27-2.92c0 1.05-.81 2.41-1.73 2.92l-5.14 2.85c-.25.14-.56.23-.89.29v-7.81l3.31-1.91v2.14c0 .41.34.75.75.75s.75-.34.75-.75v-3.01l2.82-1.63c.07.25.12.51.12.74v5.42Z" /></svg>;


      export const CubeLineOutlineIcon = createIcon("CubeLineOutlineIcon", SVGComponent, {
  "fileName": "abs-cube-line.svg",
  "presentationName": "cube-line",
  "style": "outline",
  "category": "general"
});