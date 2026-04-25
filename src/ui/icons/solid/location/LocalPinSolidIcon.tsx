import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21 17.03v-5.67c0-1.04 0-1.57-.28-1.96-.23-.32-.6-.49-1.25-.71-.13 1.61-.67 3.25-1.5 4.68-.97 1.67-2.42 3.17-4.27 3.97-1.08.47-2.32.47-3.39 0-1.85-.81-3.3-2.3-4.27-3.97-.63-1.09-1.09-2.29-1.34-3.52-.38-.06-.68-.03-.93.11-.1.06-.2.12-.28.2C3 10.61 3 11.44 3 13.09v4.93c0 1.04 0 1.57.28 1.96s.78.56 1.77.89l.38.13c1.58.52 2.36.79 3.17.79.24 0 .48-.02.73-.05.8-.11 1.55-.49 3.05-1.24 1.15-.58 1.72-.86 2.33-.99.21-.05.43-.08.65-.1.62-.05 1.25.05 2.51.26 1.27.21 1.91.32 2.38.05.16-.09.3-.21.41-.35.34-.41.34-1.06.34-2.35Z" /><path fillRule="evenodd" d="M12 2.2c-3.31 0-6 2.55-6 5.7s1.91 6.77 4.9 8.07c.7.3 1.5.3 2.19 0 2.99-1.3 4.9-4.95 4.9-8.07s-2.69-5.7-6-5.7Zm0 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2" /></svg>;


      export const LocalPinSolidIcon = createIcon("LocalPinSolidIcon", SVGComponent, {
  "fileName": "abs-local-pin-solid.svg",
  "presentationName": "local-pin",
  "style": "solid",
  "category": "location"
});