import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 21.75a.76.76 0 0 1-.67-.41l-2.5-5c-.25-.5-.66-.91-1.16-1.16l-5-2.5c-.25-.13-.42-.39-.42-.67s.16-.54.42-.67l5-2.5c.5-.25.91-.66 1.16-1.16l2.5-5c.25-.51 1.09-.51 1.34 0l2.5 5c.25.5.66.91 1.16 1.16l5 2.5c.25.13.42.39.42.67s-.16.54-.42.67l-5 2.5c-.5.25-.91.66-1.16 1.16l-2.5 5a.76.76 0 0 1-.67.41M4.68 12l3.66 1.83c.79.4 1.44 1.05 1.84 1.84l1.83 3.66 1.83-3.66c.39-.79 1.05-1.44 1.84-1.84L19.34 12l-3.66-1.83c-.79-.4-1.44-1.05-1.84-1.84l-1.83-3.66-1.83 3.66c-.39.79-1.05 1.44-1.84 1.84z" /></svg>;


      export const FlareOutlineIcon = createIcon("FlareOutlineIcon", SVGComponent, {
  "fileName": "abs-flare.svg",
  "presentationName": "flare",
  "style": "outline",
  "category": "general",
  "isNew": true
});