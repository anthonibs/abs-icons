import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M8 5.75h13c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H8c-.41 0-.75.34-.75.75s.34.75.75.75m13 5.5h-8c-.41 0-.75.34-.75.75s.34.75.75.75h8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 7h-8c-.41 0-.75.34-.75.75s.34.75.75.75h8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-16-5.5h3c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5c-.69 0-1.25-.56-1.25-1.25V5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v11.13c0 2 1.63 3.62 3.62 3.62H8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5.87c-1.17 0-2.12-.95-2.12-2.12v-3.69c.38.19.8.31 1.25.31" /></svg>;


      export const ListTreeOutlineIcon = createIcon("ListTreeOutlineIcon", SVGComponent, {
  "fileName": "abs-list-tree.svg",
  "presentationName": "list-tree",
  "style": "outline",
  "category": "nature",
  "isNew": true
});