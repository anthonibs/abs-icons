import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.62 19.33c.24.24.37.57.36.91-.01.17-.07.41-.29.59a.89.89 0 0 1-1.19-.06l-6.06-6.06c-.78-.78-2.05-.78-2.83 0l-6.06 6.06c-.17.17-.39.26-.63.26a.82.82 0 0 1-.56-.2.78.78 0 0 1-.29-.59c-.01-.33.11-.67.36-.91l5.91-5.91c.78-.78.78-2.05 0-2.83L3.27 4.52a.87.87 0 0 1-.26-.7c.01-.15.08-.45.37-.67.13-.09.29-.15.46-.15.3 0 .61.14.84.37l5.93 5.93c.78.78 2.05.78 2.83 0l6.06-6.06a.9.9 0 0 1 1.36.11c.25.34.16.92-.22 1.3l-5.93 5.93c-.78.78-.78 2.05 0 2.83l5.91 5.91Z" /></svg>;


      export const CrossLargeOutlineIcon = createIcon("CrossLargeOutlineIcon", SVGComponent, {
  "fileName": "abs-cross-large.svg",
  "presentationName": "cross-large",
  "style": "outline",
  "category": "general"
});