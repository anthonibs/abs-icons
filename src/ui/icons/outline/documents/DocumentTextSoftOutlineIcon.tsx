import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.59 14.95H8.37c-.41 0-.75.34-.75.75s.34.75.75.75h7.22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0-3.76H8.37c-.41 0-.75.34-.75.75s.34.75.75.75h7.22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M8.38 8.93h2.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H8.38c-.41 0-.75.34-.75.75s.34.75.75.75" /><path d="M12 2C5.25 2 2.86 4.62 2.86 12S5.25 22 12 22s9.14-2.62 9.14-10S18.75 2 12 2m0 18.5c-5.86 0-7.64-1.99-7.64-8.5S6.14 3.5 12 3.5s7.64 1.99 7.64 8.5-1.79 8.5-7.64 8.5" /></svg>;


      export const DocumentTextSoftOutlineIcon = createIcon("DocumentTextSoftOutlineIcon", SVGComponent, {
  "fileName": "abs-document-text-soft.svg",
  "presentationName": "document-text-soft",
  "style": "outline",
  "category": "documents"
});