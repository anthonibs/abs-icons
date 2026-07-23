import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M9.13 21.8c-.44 0-.8-.36-.8-.8v-1.2h-1.2c-.44 0-.8-.36-.8-.8s.36-.8.8-.8h1.2V5.8h-1.2c-.44 0-.8-.36-.8-.8s.36-.8.8-.8h1.2V3c0-.44.36-.8.8-.8s.8.36.8.8v1.2h2.4V3c0-.44.36-.8.8-.8s.8.36.8.8v1.26c1.39.2 2.52.93 3.18 2.06.76 1.32.77 3.03 0 4.36-.31.54-.72.98-1.22 1.32 1.19.82 1.8 2.17 1.8 3.5 0 1.94-1.28 3.9-3.75 4.25V21c0 .44-.36.8-.8.8s-.8-.36-.8-.8v-1.2h-2.4V21c0 .44-.36.8-.8.8Zm.79-9v5.4h3.2c2.04 0 2.95-1.36 2.95-2.7s-.91-2.7-2.95-2.7zm0-7v5.4h3.2c1.18 0 2.1-.47 2.59-1.32.48-.84.48-1.92 0-2.76-.49-.85-1.4-1.31-2.56-1.32z" /></svg>;


      export const BitcoinOutlineIcon = createIcon("BitcoinOutlineIcon", SVGComponent, {
  "fileName": "abs-bitcoin.svg",
  "presentationName": "bitcoin",
  "style": "outline",
  "category": "general",
  "isNew": true
});