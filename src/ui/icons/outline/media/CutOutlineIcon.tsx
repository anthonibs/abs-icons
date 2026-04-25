import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.25 17.69h-8.33c-3.28 0-4.93 0-5.79-.86s-.86-2.49-.86-5.75V2.81c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.91a.1.1 0 0 1-.1.1H2.74c-.41 0-.75.34-.75.75s.34.75.75.75h1.93c.05 0 .1.04.1.1v4.67c0 3.67 0 5.51 1.3 6.81s3.15 1.3 6.85 1.3h4.71c.05 0 .09.04.09.09v1.92c0 .41.34.75.75.75s.75-.34.75-.75v-1.92c0-.05.04-.09.09-.09h1.93c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z" /><path d="M8.3 6.31h2.78c3.28 0 4.93 0 5.79.86s.86 2.49.86 5.75v2.76c0 .41.34.75.75.75s.75-.34.75-.75v-2.76c0-3.67 0-5.51-1.3-6.81s-3.15-1.3-6.85-1.3H8.3c-.41 0-.75.34-.75.75s.34.75.75.75" /></svg>;


      export const CutOutlineIcon = createIcon("CutOutlineIcon", SVGComponent, {
  "fileName": "abs-cut.svg",
  "presentationName": "cut",
  "style": "outline",
  "category": "media"
});