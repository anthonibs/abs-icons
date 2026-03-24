import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 16 11.21" color="currentColor" width="1em" height="1em" {...props}><path d="M12.8 4c0-.44-.36-.8-.8-.8H2.73l1.84-1.83c.31-.31.31-.82 0-1.14s-.83-.31-1.14.01l-3.2 3.2a.8.8 0 0 0-.17.87c.12.3.41.49.74.5H12c.44 0 .8-.36.8-.8m3.14 2.9a.81.81 0 0 0-.74-.5H4c-.44 0-.8.36-.8.8s.36.8.8.8h9.27l-1.84 1.83c-.31.31-.32.82 0 1.13.31.31.82.32 1.13 0l3.2-3.2a.8.8 0 0 0 .17-.87" /></svg>;


      export const ExchangeOutlineIcon = createIcon("ExchangeOutlineIcon", SVGComponent, {
  "fileName": "abs-exchange.svg",
  "presentationName": "exchange",
  "style": "outline",
  "category": "general"
});