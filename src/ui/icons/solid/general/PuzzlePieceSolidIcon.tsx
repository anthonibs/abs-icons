import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M10.47 2c-1.08 0-2.03.31-2.71.99s-.99 1.63-.99 2.71c0 .12 0 .25.01.37-.81.05-1.57.1-2.16.14-.99.07-1.8.79-2.01 1.75l-.05.21c-.2.94-.4 1.86-.55 2.85-.03.24.05.48.22.64.17.17.42.24.66.19.2-.04.43-.06.68-.06.81 0 1.34.23 1.67.55.33.33.55.86.55 1.67s-.23 1.34-.55 1.67c-.33.33-.85.55-1.67.55q-.39 0-.69-.06A.74.74 0 0 0 2 17c.14.97.33 1.88.52 2.79s.05.23.05.23c.2.96 1.01 1.69 2 1.76 3.92.3 7.86.3 11.78 0 .99-.08 1.8-.8 2-1.76l.05-.22c.12-.58.23-1.16.31-1.74.03-.21.19-.36.4-.39.74-.12 1.39-.42 1.9-.92.68-.68.99-1.64.99-2.72s-.31-2.04-.99-2.72c-.51-.51-1.16-.81-1.91-.93a.47.47 0 0 1-.4-.39c-.09-.61-.2-1.21-.33-1.81l-.05-.21a2.22 2.22 0 0 0-2.01-1.75c-.58-.04-1.35-.09-2.16-.14 0-.12.01-.24.01-.37 0-1.08-.31-2.03-.99-2.71s-1.63-.99-2.71-.99Z" /></svg>;


      export const PuzzlePieceSolidIcon = createIcon("PuzzlePieceSolidIcon", SVGComponent, {
  "fileName": "abs-puzzle-piece-solid.svg",
  "presentationName": "puzzle-piece",
  "style": "solid",
  "category": "general"
});