import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M5.99 2.5c-.13 0-.26.02-.39.05l-1.37.37c-.48.12-.82.57-.82 1.07 0 .35.15.66.43.87s.62.28.96.19l.74-.2v5.02a.97.97 0 0 0 1.94 0V4c0-.83-.66-1.5-1.49-1.5m14.54 4.59a.62.62 0 0 1-.55.35h-1.63c-.12 0-.2.09-.2.2v12.69c0 .54-.44.97-.98.97s-.97-.43-.97-.97V7.63c0-.12-.09-.2-.2-.2h-1.64c-.23 0-.43-.13-.54-.35a.56.56 0 0 1 .07-.63l2.81-3.52c.12-.14.29-.22.47-.22.19 0 .36.08.47.22l2.81 3.52c.15.18.18.42.08.63ZM8.64 13.47c-.59-.55-1.34-.85-2.15-.85-.07 0-.13 0-.2.01-1.2.07-2.28.89-2.69 2.02-.32.87-.24 1.83.21 2.62.46.79 1.24 1.34 2.13 1.51l.14.02-.71 1.24c-.19.31-.19.67 0 .97.17.31.49.49.83.49s.67-.18.85-.49l2.12-3.68c.29-.48.45-1.03.45-1.6 0-.85-.36-1.68-.98-2.26m-2.13 3.42a1.16 1.16 0 0 1 0-2.32c.63 0 1.16.52 1.16 1.16s-.52 1.16-1.16 1.16" /></svg>;


      export const SortNumberDescOutlineIcon = createIcon("SortNumberDescOutlineIcon", SVGComponent, {
  "fileName": "abs-sort-number-desc.svg",
  "presentationName": "sort-number-desc",
  "style": "outline",
  "category": "general"
});