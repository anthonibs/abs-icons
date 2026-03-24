import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 19.79 19.79" color="currentColor" width="1em" height="1em" {...props}><g><path d="M9.89 0C3.61 0 0 3.61 0 9.89s3.61 9.89 9.89 9.89 9.89-3.61 9.89-9.89S16.18 0 9.89 0m0 18.29c-5.41 0-8.39-2.98-8.39-8.39s2.98-8.4 8.39-8.4 8.39 2.98 8.39 8.39-2.98 8.39-8.39 8.39Z" /><path d="M14.53 9.14H5.25c-.41 0-.75.34-.75.75s.34.75.75.75h9.28c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></g></svg>;


      export const RemoveCircleOutlineIcon = createIcon("RemoveCircleOutlineIcon", SVGComponent, {
  "fileName": "abs-remove-circle.svg",
  "presentationName": "remove-circle",
  "style": "outline",
  "category": "general"
});