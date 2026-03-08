import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M4 4.85v14c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-10c0-1.66-1.34-3-3-3H5c-.55 0-1-.45-1-1m3.25 7c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75m0 3.5c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75" /><path d="M4.41 3.93c.31.14.54.43.58.78 0 .07.06.13.14.13H17c.35 0 .68.04 1 .13v-.82a2 2 0 0 0-2.28-1.98L4.92 3.71c-.19.03-.37.1-.51.22" /></svg>;


      export const BookTextSolidIcon = createIcon("BookTextSolidIcon", SVGComponent, {
  "fileName": "abs-book-text-solid.svg",
  "presentationName": "book-text",
  "style": "solid",
  "category": "documents"
});