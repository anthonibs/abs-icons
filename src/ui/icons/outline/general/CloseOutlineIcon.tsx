import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m16.28 14.77-2.68-2.61c-.09-.08-.09-.22 0-.31l2.68-2.61c.4-.39.4-1.01 0-1.4s-1.04-.39-1.44 0l-2.69 2.62c-.08.08-.22.08-.3 0L9.16 7.84c-.4-.39-1.04-.39-1.44 0s-.4 1.01 0 1.4l2.68 2.61c.09.08.09.22 0 .31l-2.68 2.61c-.4.39-.4 1.01 0 1.4s1.04.39 1.44 0l2.69-2.62c.08-.08.22-.08.3 0l2.69 2.62c.4.39 1.04.39 1.44 0s.4-1.01 0-1.4" /></svg>;


      export const CloseOutlineIcon = createIcon("CloseOutlineIcon", SVGComponent, {
  "fileName": "abs-close.svg",
  "presentationName": "close",
  "style": "outline",
  "category": "general"
});