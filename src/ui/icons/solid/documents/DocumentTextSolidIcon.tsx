import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 16.18 20" color="currentColor" width="1em" height="1em" {...props}><path d="M13.23 0H2.95A2.96 2.96 0 0 0 0 2.97v14.06A2.96 2.96 0 0 0 2.95 20h10.28a2.96 2.96 0 0 0 2.95-2.97V2.97A2.96 2.96 0 0 0 13.23 0M11.7 10.75H4.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.22c.41 0 .75.34.75.75s-.34.75-.75.75m.75 3.01c0 .41-.34.75-.75.75H4.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.22c.41 0 .75.34.75.75M3.74 6.24c0-.41.34-.75.75-.75h2.75c.41 0 .75.34.75.75s-.34.75-.75.75H4.49c-.41 0-.75-.34-.75-.75" /></svg>;


      export const DocumentTextSolidIcon = createIcon("DocumentTextSolidIcon", SVGComponent, {
  "fileName": "abs-document-text-solid.svg",
  "presentationName": "document-text",
  "style": "solid",
  "category": "documents"
});