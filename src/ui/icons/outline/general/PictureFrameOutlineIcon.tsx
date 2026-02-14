import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.5 2.92h-5c-4.61 0-6.58 1.97-6.58 6.58v5c0 4.61 1.97 6.58 6.58 6.58h5c4.61 0 6.58-1.97 6.58-6.58v-5c0-4.61-1.97-6.58-6.58-6.58m0 16.67h-.29L10.46 4.42h4.04c3.75 0 5.08 1.33 5.08 5.08v5c0 3.75-1.33 5.08-5.08 5.08ZM8.91 4.44l1.79 7.24-6.29 1.83v-4c0-3.55 1.19-4.93 4.5-5.07m2.15 8.69 1.6 6.46H9.5c-3.56 0-4.94-1.2-5.07-4.52l6.64-1.94Z" /></svg>;


      export const PictureFrameOutlineIcon = createIcon("PictureFrameOutlineIcon", SVGComponent, {
  "fileName": "abs-picture-frame.svg",
  "presentationName": "picture-frame",
  "style": "outline",
  "category": "general"
});