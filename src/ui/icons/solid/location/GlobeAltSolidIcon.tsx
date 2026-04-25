import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2C5.75 2 2.16 5.65 2.16 12S5.74 22 12 22s9.84-3.65 9.84-10S18.25 2 12 2m.41 17.29v-1.04c0-1.88-1.52-3.4-3.4-3.4-.68 0-1.33-.27-1.8-.75l-2.48-2.48c.21-4.02 3.63-7.12 7.66-6.91 1.32.07 2.6.49 3.7 1.23-.21.16-.47.24-.74.24h-1.16c-.7 0-1.26.57-1.26 1.26v.85c0 .7-.57 1.26-1.26 1.26-.7 0-1.26.56-1.27 1.26v.85c0 .7.57 1.26 1.26 1.26h3.37c.7 0 1.26.57 1.26 1.26v1.23c0 .33.13.66.37.89l.68.68a7.3 7.3 0 0 1-4.91 2.3Z" /></svg>;


      export const GlobeAltSolidIcon = createIcon("GlobeAltSolidIcon", SVGComponent, {
  "fileName": "abs-globe-alt-solid.svg",
  "presentationName": "globe-alt",
  "style": "solid",
  "category": "location"
});