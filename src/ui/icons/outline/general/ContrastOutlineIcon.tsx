import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10m0-2V4c-4.42 0-8 3.58-8 8s3.58 8 8 8" /></svg>;


      export const ContrastOutlineIcon = createIcon("ContrastOutlineIcon", SVGComponent, {
  "fileName": "abs-contrast.svg",
  "presentationName": "contrast",
  "style": "outline",
  "category": "general",
  "isNew": false
});