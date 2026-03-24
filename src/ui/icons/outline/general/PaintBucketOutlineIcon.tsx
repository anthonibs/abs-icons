import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M7.49 18.09c.76.76 1.56 1.14 2.37 1.14s1.6-.38 2.35-1.13l5.52-5.55c.63-.63.63-1.66 0-2.29l-6.69-6.73s-.02-.04-.04-.06L9.77 2.23a.754.754 0 0 0-1.06 0c-.29.29-.3.77 0 1.06l.7.71L3.8 9.64c-1.52 1.53-1.52 3.22 0 4.76l3.68 3.7Zm3.67-1.05q-.69.69-1.29.69c-.4 0-.85-.24-1.31-.7l-3.68-3.7c-.23-.23-.4-.45-.52-.67l11.65-.51-4.86 4.89Zm-.69-11.98 5.55 5.59-11.53.51c.1-.15.23-.31.39-.47zm5.79 15.44H4.35c-.41 0-.75.34-.75.75s.34.75.75.75h11.92c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm3.17-6.22a.78.78 0 0 0-1.11 0c-.32.35-1.89 2.14-1.89 3.5s1.1 2.46 2.45 2.46 2.45-1.1 2.45-2.46-1.58-3.15-1.89-3.5Zm-.55 4.45c-.52 0-.95-.43-.95-.96 0-.41.46-1.17.95-1.81.48.64.95 1.4.95 1.81 0 .53-.42.96-.95.96" /></svg>;


      export const PaintBucketOutlineIcon = createIcon("PaintBucketOutlineIcon", SVGComponent, {
  "fileName": "abs-paint-bucket.svg",
  "presentationName": "paint-bucket",
  "style": "outline",
  "category": "general"
});