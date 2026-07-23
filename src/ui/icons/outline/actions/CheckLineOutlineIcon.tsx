import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M9 15.8c-.75 0-1.22-.48-1.99-1.29l-2.59-2.7c-.31-.32-.3-.83.02-1.13s.83-.3 1.13.02l2.59 2.7c.34.35.72.76.86.8.09-.04.48-.45.81-.8l8.59-8.96c.3-.32.81-.33 1.13-.02s.33.81.02 1.13l-8.59 8.96c-.74.78-1.23 1.29-1.99 1.29Zm10 4H5c-.44 0-.8-.36-.8-.8s.36-.8.8-.8h14c.44 0 .8.36.8.8s-.36.8-.8.8" /></svg>;


      export const CheckLineOutlineIcon = createIcon("CheckLineOutlineIcon", SVGComponent, {
  "fileName": "abs-check-line.svg",
  "presentationName": "check-line",
  "style": "outline",
  "category": "actions",
  "isNew": true
});