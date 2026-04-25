import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M22 12.02c-5.36.32-9.66 4.62-9.98 9.98h-.04c-.32-5.36-4.61-9.66-9.98-9.98v-.04c5.36-.32 9.66-4.61 9.98-9.98h.04c.32 5.36 4.62 9.66 9.98 9.98z" /></svg>;


      export const GeminiOutlineIcon = createIcon("GeminiOutlineIcon", SVGComponent, {
  "fileName": "abs-gemini.svg",
  "presentationName": "gemini",
  "style": "outline",
  "category": "brands"
});