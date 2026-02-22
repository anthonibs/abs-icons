import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.56 11.01h-2.34a.2.2 0 0 1-.2-.2V8.53c0-.55-.46-.99-1.02-.99s-1.02.44-1.02.99v2.28a.2.2 0 0 1-.2.2H8.44c-.56 0-1.02.44-1.02.99s.46.99 1.02.99h2.34c.11 0 .2.09.2.2v2.28c0 .55.46.99 1.02.99s1.02-.44 1.02-.99v-2.28c0-.11.09-.2.2-.2h2.34c.56 0 1.02-.44 1.02-.99s-.46-.99-1.02-.99" /></svg>;


      export const PlusOutlineIcon = createIcon("PlusOutlineIcon", SVGComponent, {
  "fileName": "abs-plus.svg",
  "presentationName": "plus",
  "style": "outline",
  "category": "general"
});