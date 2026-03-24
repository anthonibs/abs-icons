import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M8.82 4.45c.29.28.55.63.86 1.03l.38.48a.748.748 0 0 0 1.17-.93l-.36-.47c-.33-.42-.64-.82-.99-1.18a2.72 2.72 0 0 0-3.86 0c-1.72 1.7-3.77 4.31-3.77 7.04 0 2.38 1.42 4.47 3.63 5.32a.753.753 0 0 0 .97-.43.746.746 0 0 0-.43-.97c-1.62-.62-2.67-2.16-2.67-3.92 0-2.33 2.08-4.74 3.33-5.97.5-.5 1.24-.5 1.75 0Z" /><path d="M17 6.1a3.297 3.297 0 0 0-4.59 0c-2.17 2.05-4.75 5.17-4.75 8.44s2.64 6.89 7.05 6.89 7.05-3.5 7.05-6.89-2.58-6.39-4.75-8.44Zm-2.3 13.83c-3.47 0-5.55-2.74-5.55-5.39 0-2.87 2.68-5.84 4.28-7.35.36-.34.82-.51 1.27-.51s.91.17 1.27.51c1.6 1.51 4.28 4.48 4.28 7.35 0 2.65-2.08 5.39-5.55 5.39" /><path d="M17.85 14.28c-.41 0-.75.34-.75.75 0 1.53-1.06 1.85-1.95 1.85-.41 0-.75.34-.75.75s.34.75.75.75c2.1 0 3.45-1.32 3.45-3.35 0-.41-.34-.75-.75-.75" /></g></svg>;


      export const BloodOutlineIcon = createIcon("BloodOutlineIcon", SVGComponent, {
  "fileName": "abs-blood.svg",
  "presentationName": "blood",
  "style": "outline",
  "category": "general"
});