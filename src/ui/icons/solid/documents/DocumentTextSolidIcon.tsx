import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.14 2H6.86a2.96 2.96 0 0 0-2.95 2.97v14.06A2.96 2.96 0 0 0 6.86 22h10.28a2.96 2.96 0 0 0 2.95-2.97V4.97A2.96 2.96 0 0 0 17.14 2m-1.53 10.75H8.39c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.22c.41 0 .75.34.75.75s-.34.75-.75.75m.75 3.01c0 .41-.34.75-.75.75H8.39c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.22c.41 0 .75.34.75.75M7.65 8.24c0-.41.34-.75.75-.75h2.75c.41 0 .75.34.75.75s-.34.75-.75.75H8.4c-.41 0-.75-.34-.75-.75" /></svg>;


      export const DocumentTextSolidIcon = createIcon("DocumentTextSolidIcon", SVGComponent, {
  "fileName": "abs-document-text-solid.svg",
  "presentationName": "document-text",
  "style": "solid",
  "category": "documents"
});