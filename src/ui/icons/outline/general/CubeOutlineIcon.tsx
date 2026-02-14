import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m19.18 5.28-4.91-2.75c-1.28-.71-3.28-.7-4.54.01L4.82 5.28c-1.35.75-2.41 2.56-2.41 4.11v5.23c0 1.55 1.06 3.35 2.41 4.11l4.91 2.75c.64.35 1.45.53 2.27.53s1.64-.18 2.28-.53l4.91-2.75c1.35-.75 2.41-2.56 2.41-4.11V9.39c0-1.55-1.06-3.35-2.41-4.11ZM5.54 6.59l4.91-2.74c.41-.23.98-.35 1.55-.35s1.12.11 1.54.34l4.91 2.75c.31.17.61.46.86.79l-7.32 4.27-7.32-4.26c.26-.34.55-.62.87-.79Zm0 10.82c-.87-.49-1.64-1.79-1.64-2.8V9.38c0-.21.04-.43.1-.66l7.24 4.21v7.48c-.29-.06-.56-.14-.79-.27l-4.91-2.75Zm14.54-2.8c0 1-.77 2.31-1.64 2.8l-4.91 2.75c-.23.13-.5.21-.8.27v-7.48l7.24-4.22c.06.23.1.45.1.66v5.23Z" /></svg>;


      export const CubeOutlineIcon = createIcon("CubeOutlineIcon", SVGComponent, {
  "fileName": "abs-cube.svg",
  "presentationName": "cube",
  "style": "outline",
  "category": "general"
});