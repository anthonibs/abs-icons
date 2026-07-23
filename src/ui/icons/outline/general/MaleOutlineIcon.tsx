import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21 3.73v4.89c0 .62-.5 1.12-1.12 1.12s-1.12-.5-1.12-1.12V7.28c0-.16-.19-.24-.31-.13L14.57 11c-.17.17-.19.43-.07.63.25.42.45.87.6 1.33.19.59.28 1.2.28 1.84 0 1.73-.6 3.19-1.8 4.39s-2.66 1.8-4.39 1.8-3.19-.6-4.39-1.8S3 16.53 3 14.8s.6-3.19 1.8-4.39 2.66-1.8 4.39-1.8q.93 0 1.83.27c.46.14.9.33 1.31.59.21.13.48.11.65-.06l3.86-3.86c.11-.11.03-.31-.13-.31h-1.34c-.62 0-1.12-.5-1.12-1.12s.5-1.13 1.12-1.13h4.89c.41 0 .73.33.73.73Zm-14.6 8.3c-.77.77-1.15 1.7-1.15 2.78s.42 2.06 1.15 2.79 1.7 1.15 2.78 1.15 2.06-.42 2.79-1.15 1.15-1.7 1.15-2.78-.42-2.06-1.15-2.79-1.7-1.15-2.78-1.15-2.06.42-2.79 1.15" /></svg>;


      export const MaleOutlineIcon = createIcon("MaleOutlineIcon", SVGComponent, {
  "fileName": "abs-male.svg",
  "presentationName": "male",
  "style": "outline",
  "category": "general",
  "isNew": false
});