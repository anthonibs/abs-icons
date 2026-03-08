import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.66 2.7c.38-.18.83-.04 1.01.34l2.14 4.28c.04.08.12.13.21.14 1.28.11 2.08.38 2.61 1.04.41.5.56 1.11.54 1.93 0 .11-.1.2-.21.2H3.05c-.11 0-.2-.09-.21-.2-.02-.82.13-1.43.54-1.93.53-.65 1.33-.92 2.61-1.04.09 0 .17-.06.21-.14l2.14-4.28c.18-.37.63-.52 1.01-.34.37.19.52.64.33 1.01L7.85 7.38h8.32l-1.83-3.67a.75.75 0 0 1 .33-1.01Z" /><path fillRule="evenodd" d="M3.56 14.63c-.18-.84-.34-1.57-.46-2.22-.03-.15.09-.29.25-.29h17.3c.16 0 .28.14.25.29-.12.65-.28 1.38-.46 2.22l-.42 2c-.49 2.27-.73 3.41-1.56 4.08-.82.67-1.99.67-4.31.67h-4.3c-2.32 0-3.49 0-4.31-.67-.83-.67-1.07-1.8-1.56-4.08zM10 13.62c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" /></svg>;


      export const BagSoftSolidIcon = createIcon("BagSoftSolidIcon", SVGComponent, {
  "fileName": "abs-bag-soft-solid.svg",
  "presentationName": "bag-soft",
  "style": "solid",
  "category": "commerce"
});