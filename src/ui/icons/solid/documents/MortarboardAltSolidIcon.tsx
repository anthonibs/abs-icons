import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.59 3.9a4.97 4.97 0 0 0-4.23 0L6.62 5.65c-.1.05-.1.2.01.23.75.22 1.39.84 1.53 1.73.16.99-.44 1.95-1.36 2.34l-.94.4c-.5.22-.8.34-.99.44v.05l5.5 2.58c1.34.63 2.89.63 4.23 0l6.37-2.99c1.38-.65 1.38-2.9 0-3.55L14.6 3.89Z" /><path d="M5.99 12.95c-.08-.04-.18.02-.18.11v3.34c0 .96.48 1.86 1.32 2.33 1.39.77 3.63 1.84 5.34 1.84s3.95-1.07 5.34-1.84c.85-.47 1.32-1.36 1.32-2.33v-3.34c0-.09-.09-.15-.18-.11l-3.78 1.77a6.37 6.37 0 0 1-5.43 0l-3.78-1.77Zm.34-4.34c.36-.16.52-.58.37-.94a.72.72 0 0 0-.94-.38l-1.06.45c-.52.23-.98.42-1.33.62-.37.21-.7.46-.94.83s-.34.76-.38 1.19c-.05.4-.05.89-.05 1.47v2.76c0 .39.32.71.71.71s.71-.32.71-.71v-2.73c0-.62 0-1.04.04-1.35.03-.3.09-.45.16-.56s.18-.22.45-.37c.28-.16.66-.32 1.23-.56l1.03-.44Z" /></svg>;


      export const MortarboardAltSolidIcon = createIcon("MortarboardAltSolidIcon", SVGComponent, {
  "fileName": "abs-mortarboard-alt-solid.svg",
  "presentationName": "mortarboard-alt",
  "style": "solid",
  "category": "documents"
});