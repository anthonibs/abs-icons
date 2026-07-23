import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M19.61 7.67h-.05l-3.55.89s-.06.01-.09.02l-.38.09-.2-.17-6.66-5.77c-.33-.29-.78-.39-1.2-.29l-2.24.54.7.97 4.35 6.02-1.31.33-1.88.48h-.05l-.23.07-.19-.17-2.02-1.74c-.36-.31-.84-.42-1.3-.31L1.85 9c-.11.03-.17.16-.11.26l3.52 6.1.64-.16 3.45-.86 7.94-2 3.04-.77c.94-.29 1.87-1.35 1.96-2.27a.72.72 0 0 0-.14-.51c-.49-.71-1.62-1.19-2.55-1.12Z" /><rect width={18} height={2} x={3.33} y={19.59} rx={1} ry={1} /></g></svg>;


      export const FlightTakeoffSolidIcon = createIcon("FlightTakeoffSolidIcon", SVGComponent, {
  "fileName": "abs-flight-takeoff-solid.svg",
  "presentationName": "flight-takeoff",
  "style": "solid",
  "category": "general",
  "isNew": false
});