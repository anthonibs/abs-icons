import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.42 8.71 19.04 4.6a4.9 4.9 0 0 0-1.75-1.76c-.73-.42-1.56-.64-2.4-.64H9.11c-.84 0-1.67.22-2.4.64S5.38 3.87 4.96 4.6L2.58 8.72C2 9.72 1.7 10.85 1.7 12s.3 2.29.88 3.28l2.38 4.12a4.74 4.74 0 0 0 1.75 1.75c.73.42 1.56.64 2.4.64h5.78c.84 0 1.67-.22 2.4-.64s1.33-1.03 1.75-1.75l2.38-4.11c.58-1 .88-2.14.88-3.29s-.3-2.29-.88-3.29m-1.38 5.78-2.38 4.11c-.28.49-.68.89-1.17 1.17-.48.28-1.04.43-1.6.43H9.11a3.2 3.2 0 0 1-2.77-1.6l-2.38-4.12c-.44-.75-.67-1.61-.67-2.48s.23-1.73.67-2.48L6.34 5.4c.28-.49.68-.89 1.17-1.17s1.04-.43 1.6-.43h5.78a3.2 3.2 0 0 1 2.77 1.6l2.38 4.11c.44.76.67 1.62.67 2.49s-.23 1.73-.67 2.49" /><path d="M12 7.85C9.4 7.85 7.85 9.4 7.85 12S9.4 16.15 12 16.15s4.15-1.55 4.15-4.15S14.6 7.85 12 7.85m0 6.49c-1.56 0-2.34-.79-2.34-2.34s.79-2.34 2.34-2.34 2.34.79 2.34 2.34-.79 2.34-2.34 2.34" /></svg>;


      export const SettingsOutlineIcon = createIcon("SettingsOutlineIcon", SVGComponent, {
  "fileName": "abs-settings.svg",
  "presentationName": "settings",
  "style": "outline",
  "category": "general"
});