import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2.5c-4.42 0-9.5 1.08-9.5 9.5s5.08 9.5 9.5 9.5c.37 0 .74 0 1.09-.03 1.32-.07 2.34-1.18 2.34-2.53v-.02c0-2.45 1.02-2.91 2.91-2.91.16 0 .32 0 .48.01 1.31.09 2.46-.92 2.59-2.23.06-.56.08-1.16.08-1.79 0-8.42-5.08-9.5-9.5-9.5Zm-5.97 7.63c0-.72.58-1.3 1.3-1.3s1.3.58 1.3 1.3-.58 1.3-1.3 1.3-1.3-.58-1.3-1.3m2.15 6.34c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3m3.25-8.1c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3m4.85 2.12c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3" /></svg>;


      export const PaletteColorSolidIcon = createIcon("PaletteColorSolidIcon", SVGComponent, {
  "fileName": "abs-palette-color-solid.svg",
  "presentationName": "palette-color",
  "style": "solid",
  "category": "general"
});