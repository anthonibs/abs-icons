import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.75 9.18a.99.99 0 0 0 0 1.39.99.99 0 0 0 1.39 0c.38-.38.38-1 0-1.39a.99.99 0 0 0-1.39 0m-2.78 1.38a.99.99 0 0 0 0 1.39.99.99 0 0 0 1.39 0c.38-.38.38-1 0-1.39a.99.99 0 0 0-1.39 0" /><path d="m21.71 12.02-1.73-1.73-6.25-6.24-1.74-1.73a.996.996 0 1 0-1.41 1.41l.86.86c.09.09.09.25 0 .34l-7.9 7.88c-.06.06-.1.13-.15.19-.12.09-.22.21-.28.34-.7.91-1.09 2-1.09 3.17 0 1.45.57 2.83 1.62 3.87 1.07 1.07 2.48 1.61 3.87 1.61s2.69-.51 3.71-1.52l6.36-6.35 1.54-1.53c.09-.09.25-.09.34 0l.86.86c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41ZM9.79 19.04c-1.29 1.28-3.42 1.24-4.75-.09a3.45 3.45 0 0 1-1.03-2.45c0-.52.12-1.01.34-1.45.1-.2.31-.31.53-.32l8.88-.23c.22 0 .33.26.18.41L9.8 19.04Zm6.45-6.61-9.46.25c-.11 0-.16-.13-.09-.2l6.16-6.15c.09-.09.25-.09.34 0l4.5 4.49c.09.09.09.25 0 .34l-1.14 1.14c-.08.08-.19.13-.31.13" /></svg>;


      export const TestTubeOutlineIcon = createIcon("TestTubeOutlineIcon", SVGComponent, {
  "fileName": "abs-test-tube.svg",
  "presentationName": "test-tube",
  "style": "outline",
  "category": "general"
});