import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.51 4.56c-.44-.35-1.01-.47-1.55-.33-1.38.35-2.81.25-4.14-.28l-.18-.07c-1.57-.63-3.3-.79-4.98-.46l-1.47.29V2.7c0-.39-.31-.7-.7-.7s-.7.31-.7.7v18.6c0 .39.31.7.7.7s.7-.31.7-.7v-6.73c0-.08.06-.15.14-.17l1.6-.32c1.38-.27 2.78-.16 4.07.34 1.76.67 3.66.84 5.49.41l.14-.03c.94-.22 1.59-1.03 1.59-1.97V5.98c0-.56-.26-1.09-.7-1.44Zm-.69 8.28c0 .28-.19.53-.45.6l-.21.05c-1.52.38-3.09.27-4.53-.3a8.6 8.6 0 0 0-3.24-.63c-.58 0-1.16.06-1.73.17l-1.24.25a.186.186 0 0 1-.22-.18V5.3c0-.09.06-.17.15-.18l1.59-.31c1.42-.28 2.86-.15 4.19.38l.19.07c1.61.64 3.33.75 4.99.34.17-.04.3.03.36.08.1.08.16.2.16.34v6.85Z" /></svg>;


      export const FlagAltOutlineIcon = createIcon("FlagAltOutlineIcon", SVGComponent, {
  "fileName": "abs-flag-alt.svg",
  "presentationName": "flag-alt",
  "style": "outline",
  "category": "location"
});