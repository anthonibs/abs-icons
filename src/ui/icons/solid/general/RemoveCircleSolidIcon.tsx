import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 19.78 19.78" color="currentColor" width="1em" height="1em" {...props}><path d="M9.89 0C3.6 0 0 3.6 0 9.89s3.6 9.89 9.89 9.89 9.89-3.6 9.89-9.89S16.18 0 9.89 0m5.39 9.89c0 .41-.34.75-.75.75H5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.28c.41 0 .75.34.75.75" /></svg>;


      export const RemoveCircleSolidIcon = createIcon("RemoveCircleSolidIcon", SVGComponent, {
  "fileName": "abs-remove-circle-solid.svg",
  "presentationName": "remove-circle",
  "style": "solid",
  "category": "general"
});