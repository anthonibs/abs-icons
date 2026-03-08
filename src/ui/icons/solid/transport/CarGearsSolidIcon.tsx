import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2.31c-6.06 0-9.54 3.53-9.54 9.69s3.48 9.69 9.54 9.69 9.54-3.53 9.54-9.69S18.06 2.31 12 2.31m-.87 10.44H9.17c-.07 0-.12.05-.12.12v1.89c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.24c0-.41.34-.75.75-.75s.75.34.75.75v1.89c0 .07.05.12.12.12h1.96c.07 0 .12-.05.12-.12V9.24c0-.41.34-.75.75-.75s.75.34.75.75v2.01s1.32 0 1.53-.08c.26-.11.47-.32.59-.6.08-.19.08-.62.08-1.33 0-.41.34-.75.75-.75s.75.34.75.75c0 .93 0 1.44-.19 1.91-.29.65-.78 1.14-1.41 1.4-.42.17-1.68.2-2.02.2-.05 0-.08.04-.08.09v1.92c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.89c0-.07-.05-.12-.12-.12" /></svg>;


      export const CarGearsSolidIcon = createIcon("CarGearsSolidIcon", SVGComponent, {
  "fileName": "abs-car-gears-solid.svg",
  "presentationName": "car-gears",
  "style": "solid",
  "category": "transport"
});