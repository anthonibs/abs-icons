import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.57 8.86c-.43-.54-.98-.96-1.6-1.24-.39-.17-.79.14-.79.57v4.28a5.7 5.7 0 0 1-5.7 5.7H8.2c-.43 0-.74.4-.57.79.28.62.7 1.17 1.24 1.6.76.6 1.7.93 2.66.93h5.7c1.13 0 2.22-.45 3.02-1.25s1.25-1.89 1.25-3.02v-5.7c0-.97-.33-1.91-.93-2.66M4.2 7.49h3.05c.31 0 .6-.14.82-.36s.34-.52.34-.83V3.58c0-.44-.43-.76-.82-.56-.43.23-.83.52-1.17.87L3.89 6.42c-.05.05-.1.1-.15.16-.34.37-.03.91.47.91Z" /><path d="M15.5 15.5c.8-.8 1.25-1.89 1.25-3.02v-5.7c0-1.13-.45-2.22-1.25-3.02s-1.89-1.25-3.02-1.25h-1.66c-.25 0-.49.1-.67.28s-.28.42-.28.67v2.85a2.63 2.63 0 0 1-2.62 2.62h-3.8c-.25 0-.49.1-.67.28s-.28.42-.28.67v2.61c0 1.13.45 2.22 1.25 3.02s1.89 1.25 3.02 1.25h5.7c1.13 0 2.22-.45 3.02-1.25Z" /></svg>;


      export const DocumentDuplicateSolidIcon = createIcon("DocumentDuplicateSolidIcon", SVGComponent, {
  "fileName": "abs-document-duplicate-solid.svg",
  "presentationName": "document-duplicate",
  "style": "solid",
  "category": "documents"
});