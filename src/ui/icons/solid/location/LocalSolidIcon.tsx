import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 22c5.52 0 10-2.01 10-4.5 0-1.2-1.04-2.29-2.74-3.1a.353.353 0 0 0-.45.14c-1.21 2.1-3.03 3.87-5.33 4.73-.95.35-2.01.35-2.95 0-2.3-.85-4.12-2.63-5.33-4.73a.34.34 0 0 0-.45-.14c-1.7.81-2.74 1.9-2.74 3.1 0 2.49 4.48 4.5 10 4.5Z" /><path fillRule="evenodd" d="M5 8.52C5 4.92 8.13 2 12 2s7 2.92 7 6.52-2.34 7.93-5.96 9.32c-.66.26-1.41.26-2.08 0C7.34 16.44 5 12.17 5 8.52M12 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2" /></svg>;


      export const LocalSolidIcon = createIcon("LocalSolidIcon", SVGComponent, {
  "fileName": "abs-local-solid.svg",
  "presentationName": "local",
  "style": "solid",
  "category": "location"
});