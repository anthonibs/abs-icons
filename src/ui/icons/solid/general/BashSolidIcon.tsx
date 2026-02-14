import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.71 4.81c-.36-.48-.79-.9-1.28-1.24-1.56-1.11-3.79-1.32-7.37-1.32s-5.8.21-7.37 1.32c-.49.34-.92.76-1.27 1.24C2.37 6.2 2 8.09 2 12s.37 5.8 1.42 7.2c.35.47.78.89 1.27 1.24 1.57 1.1 3.8 1.31 7.37 1.31s5.81-.21 7.37-1.31c.49-.35.92-.77 1.28-1.24 1.1-1.48 1.3-3.5 1.3-7.2s-.2-5.72-1.3-7.19m-6.65 6.97h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3a.749.749 0 1 1 0 1.5M7.81 8.74 6.58 7.72a.75.75 0 0 1-.09-1.06c.26-.32.74-.36 1.05-.09l1.23 1.02c.53.45.86.86.86 1.5s-.33 1.04-.86 1.49L7.54 11.6a.736.736 0 0 1-1.05-.09.735.735 0 0 1 .09-1.05l1.23-1.03c.27-.23.32-.33.33-.34-.01-.02-.06-.11-.33-.35" /></svg>;


      export const BashSolidIcon = createIcon("BashSolidIcon", SVGComponent, {
  "fileName": "abs-bash-solid.svg",
  "presentationName": "bash",
  "style": "solid",
  "category": "general"
});