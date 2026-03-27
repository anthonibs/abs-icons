import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2C5.64 2 2 5.64 2 12s3.64 10 10 10 10-3.64 10-10S18.36 2 12 2m5.45 10c0 .41-.34.76-.76.76H7.31a.76.76 0 1 1 0-1.52h9.38c.41 0 .76.34.76.76" /></svg>;


      export const RemoveCircleSolidIcon = createIcon("RemoveCircleSolidIcon", SVGComponent, {
  "fileName": "abs-remove-circle-solid.svg",
  "presentationName": "remove-circle",
  "style": "solid",
  "category": "general"
});