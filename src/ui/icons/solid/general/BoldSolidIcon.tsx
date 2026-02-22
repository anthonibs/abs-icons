import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.91 10.72h-2.58c-.28 0-.51-.23-.51-.51V3.52c0-1.68-.91-2.03-2.02-.76l-.8.91-6.77 7.7c-.93 1.05-.54 1.91.86 1.91h2.58c.28 0 .51.23.51.51v6.69c0 1.68.91 2.02 2.02.76l.8-.91 6.77-7.7c.93-1.05.54-1.91-.86-1.91" /></svg>;


      export const BoldSolidIcon = createIcon("BoldSolidIcon", SVGComponent, {
  "fileName": "abs-bold-solid.svg",
  "presentationName": "bold",
  "style": "solid",
  "category": "general"
});