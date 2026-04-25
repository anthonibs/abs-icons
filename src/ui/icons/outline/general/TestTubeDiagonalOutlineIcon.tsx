import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.72 7.77 16.2 2.22a.754.754 0 0 0-1.06 0c-.29.29-.3.77 0 1.06l.39.4-12.5 12.58a3.39 3.39 0 0 0 0 4.76c.65.65 1.51.98 2.37.98s1.71-.32 2.36-.97L20.27 8.45l.39.39c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.3-.77 0-1.06ZM6.7 19.96c-.8.79-2.14.7-2.82-.26-.53-.76-.36-1.82.29-2.47l.46-.46c.2-.2.48-.32.77-.32h3.32c.54 0 .82.66.43 1.04zm4.59-5.01H7.81c-.51 0-.76-.61-.4-.97l8.67-8.72a.73.73 0 0 1 1.04 0l1.59 1.6c.28.28.28.75 0 1.03l-6.74 6.78c-.18.18-.42.28-.67.28Z" /></svg>;


      export const TestTubeDiagonalOutlineIcon = createIcon("TestTubeDiagonalOutlineIcon", SVGComponent, {
  "fileName": "abs-test-tube-diagonal.svg",
  "presentationName": "test-tube-diagonal",
  "style": "outline",
  "category": "general"
});