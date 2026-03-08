import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><rect width={2.9} height={6.77} x={4.27} y={10.4} rx={0.77} ry={0.77} /><rect width={2.9} height={6.77} x={10.55} y={10.4} rx={0.77} ry={0.77} /><rect width={19.34} height={2.9} x={2.33} y={19.1} rx={0.87} ry={0.87} /><rect width={2.9} height={6.77} x={16.83} y={10.4} rx={0.77} ry={0.77} /><path d="m10.85 2.27-8 4c-.32.16-.53.49-.53.85v.39c0 .53.43.95.95.95H20.7c.53 0 .95-.43.95-.95v-.39c0-.36-.2-.69-.53-.85l-8-4c-.72-.36-1.57-.36-2.29 0Z" /></svg>;


      export const BankSolidIcon = createIcon("BankSolidIcon", SVGComponent, {
  "fileName": "abs-bank-solid.svg",
  "presentationName": "bank",
  "style": "solid",
  "category": "location"
});