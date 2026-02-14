import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.69 5.42c-.35-.61-.89-1.11-1.56-1.42-.74-.34-1.58-.34-3.24-.34H8.11c-1.66 0-2.5 0-3.24.34a3.4 3.4 0 0 0-1.55 1.42c-.4.72-.4 1.54-.4 3.04v7.08c0 1.5 0 2.32.39 3.04.35.61.89 1.11 1.56 1.42.74.34 1.58.34 3.24.34h7.78c1.66 0 2.5 0 3.24-.34a3.4 3.4 0 0 0 1.55-1.42c.4-.72.4-1.54.4-3.04V8.46c0-1.5 0-2.32-.39-3.04m-4.06 9.86h-3.7a.749.749 0 1 1 0-1.5h3.7c.41 0 .75.34.75.75s-.34.75-.75.75m-9.26 0a.746.746 0 0 1-.5-1.3L9.03 12l-2.16-1.98a.746.746 0 0 1-.05-1.06c.28-.3.75-.32 1.06-.04l2.38 2.16c.25.24.4.57.4.92s-.15.68-.4.92l-2.38 2.16c-.15.14-.33.2-.51.2" /></svg>;


      export const TerminalSquareSolidIcon = createIcon("TerminalSquareSolidIcon", SVGComponent, {
  "fileName": "abs-terminal-square-solid.svg",
  "presentationName": "terminal-square",
  "style": "solid",
  "category": "interface"
});