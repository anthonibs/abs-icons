import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M15.59 12.69H8.37c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.22a.749.749 0 1 1 0 1.5m0 3.76H8.37c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.22a.749.749 0 1 1 0 1.5M8.37 7.43h2.76a.749.749 0 1 1 0 1.5H8.37c-.41 0-.75-.34-.75-.75s.34-.75.75-.75m3.62-5.18C5.43 2.25 3.11 4.8 3.11 12s2.33 9.75 8.89 9.75 8.89-2.55 8.89-9.75S18.56 2.25 12 2.25Z" /></svg>;


      export const DocumentTextSoftSolidIcon = createIcon("DocumentTextSoftSolidIcon", SVGComponent, {
  "fileName": "abs-document-text-soft-solid.svg",
  "presentationName": "document-text-soft",
  "style": "solid",
  "category": "documents"
});