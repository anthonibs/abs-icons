import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M13.84 2h-3.68C5.13 2 2.98 4.16 2.98 9.23v5.55c0 5.06 2.15 7.23 7.18 7.23h3.68c5.03 0 7.18-2.16 7.18-7.23V9.23c0-5.06-2.15-7.23-7.18-7.23m5.68 12.77c0 4.23-1.49 5.73-5.68 5.73h-3.68c-4.19 0-5.68-1.5-5.68-5.73V9.22c0-4.23 1.49-5.73 5.68-5.73h3.68c4.19 0 5.68 1.5 5.68 5.73z" /><path d="M6.68 8.01c-.27.24-.33.64-.14.95l2 3.24c.12.19.31.32.53.35s.44-.04.61-.18a3.46 3.46 0 0 1 4.64 0c.14.12.32.19.5.19h.11c.22-.03.41-.16.53-.35l2-3.24c.19-.31.13-.71-.14-.95a7.97 7.97 0 0 0-10.65 0Zm7.94 2.71c-.8-.5-1.71-.74-2.61-.74s-1.81.25-2.61.74L8.17 8.74a6.48 6.48 0 0 1 7.68 0z" /></g></svg>;


      export const WeightOutlineIcon = createIcon("WeightOutlineIcon", SVGComponent, {
  "fileName": "abs-weight.svg",
  "presentationName": "weight",
  "style": "outline",
  "category": "general"
});