import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M22 10.6v10.8c0 .33-.27.6-.6.6H2.6c-.33 0-.6-.27-.6-.6v-11c0-.24.14-.46.36-.55l6.43-2.76c.1-.04.21.03.21.14v1.33c0 .21.21.36.41.28l1.97-.79 2.41-.97c.1-.04.2.03.2.14V9.7c0 .17.13.3.3.3h7.1c.33 0 .6.27.6.6Zm-4.72-2.78.65-5.29c.04-.3.29-.53.6-.53h1.93c.3 0 .56.23.6.53l.65 5.29a.61.61 0 0 1-.6.68h-3.23a.61.61 0 0 1-.6-.68M11.15 18h1.7c.08 0 .15-.07.15-.15v-3.7c0-.08-.07-.15-.15-.15h-1.7c-.08 0-.15.07-.15.15v3.7c0 .08.07.15.15.15m-4 0h1.7c.08 0 .15-.07.15-.15v-3.7c0-.08-.07-.15-.15-.15h-1.7c-.08 0-.15.07-.15.15v3.7c0 .08.07.15.15.15m9.7-4h-1.7c-.08 0-.15.07-.15.15v3.7c0 .08.07.15.15.15h1.7c.08 0 .15-.07.15-.15v-3.7c0-.08-.07-.15-.15-.15" /></svg>;


      export const FactoryAltSolidIcon = createIcon("FactoryAltSolidIcon", SVGComponent, {
  "fileName": "abs-factory-alt-solid.svg",
  "presentationName": "factory-alt",
  "style": "solid",
  "category": "location"
});