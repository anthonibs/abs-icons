import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m16.14 2.96-9.03 3c-6.07 2.03-6.07 5.34 0 7.36 1.69.56 3.01 1.88 3.57 3.57 2.02 6.07 5.34 6.07 7.36 0l3.01-9.02c1.34-4.05-.86-6.26-4.91-4.91m.32 5.38-3.8 3.82c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.8-3.82c.29-.29.77-.29 1.06 0s.29.77 0 1.06" /></svg>;


      export const SendUpRightSolidIcon = createIcon("SendUpRightSolidIcon", SVGComponent, {
  "fileName": "abs-send-up-right-solid.svg",
  "presentationName": "send-up-right",
  "style": "solid",
  "category": "general"
});