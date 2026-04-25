import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M7.84 3.8C9.87 2.6 10.89 2 12 2s2.13.6 4.16 1.8l.68.41c2.03 1.2 3.05 1.8 3.6 2.79.56.99.56 2.19.56 4.59v.82c0 2.4 0 3.6-.56 4.59-.55.99-1.57 1.59-3.6 2.79l-.68.41C14.13 21.4 13.11 22 12 22s-2.13-.6-4.16-1.8l-.68-.41c-2.03-1.2-3.05-1.8-3.6-2.79C3 16.01 3 14.81 3 12.41v-.82c0-2.4 0-3.6.56-4.59.55-.99 1.57-1.59 3.6-2.79zM13 16c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m-1-9.75c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-.41.34-.75.75-.75" /></svg>;


      export const WarningHexagonSolidIcon = createIcon("WarningHexagonSolidIcon", SVGComponent, {
  "fileName": "abs-warning-hexagon-solid.svg",
  "presentationName": "warning-hexagon",
  "style": "solid",
  "category": "general"
});