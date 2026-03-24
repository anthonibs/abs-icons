import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M10.85 13.27H9.83v-.98c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.98H7.31c-.41 0-.75.34-.75.75s.34.75.75.75h1.02v.98c0 .41.34.75.75.75s.75-.34.75-.75v-.98h1.02c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m4.16-1.63c-.41 0-.75.34-.75.75s.34.75.75.75h.1c.41 0 .7-.34.7-.75s-.39-.75-.8-.75m1.68 3.3c-.41 0-.75.34-.75.75s.34.75.75.75h.1c.41 0 .7-.34.7-.75s-.39-.75-.8-.75" /><path d="M13.32 6.17v-.26c-.02-1.47-1.2-2.64-2.71-2.65h-.99c-.28 0-.5-.22-.5-.49 0-.41-.34-.74-.75-.74s-.75.34-.74.76c0 1.1.91 2.04 2.01 1.98h.99c.65 0 1.18.52 1.19 1.16v.23C4.58 6.2 2 8.28 2 14.07s2.62 7.91 10 7.91 10-2.07 10-7.91c0-5.48-2.3-7.64-8.68-7.89ZM12 20.47c-6.51 0-8.5-1.5-8.5-6.41S5.49 7.65 12 7.65s8.5 1.5 8.5 6.41-1.99 6.41-8.5 6.41" /></svg>;


      export const GameOutlineIcon = createIcon("GameOutlineIcon", SVGComponent, {
  "fileName": "abs-game.svg",
  "presentationName": "game",
  "style": "outline",
  "category": "general"
});