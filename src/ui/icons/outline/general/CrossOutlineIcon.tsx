import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.49 14.37c-1.3-1.3-1.3-3.43 0-4.73l3.19-3.19c.32-.32.4-.82.18-1.12a.78.78 0 0 0-.64-.32c-.21 0-.4.08-.55.23l-3.29 3.29c-.63.63-1.47.98-2.37.98s-1.73-.35-2.37-.98L6.45 5.34c-.31-.31-.8-.41-1.12-.18-.26.2-.31.47-.32.58 0 .11 0 .38.23.61l3.29 3.29c.63.63.98 1.47.98 2.37s-.35 1.73-.98 2.37l-3.17 3.17c-.2.2-.31.48-.3.77 0 .15.06.37.26.52.17.14.36.17.49.17.21 0 .4-.08.55-.23l3.29-3.29c1.31-1.3 3.43-1.3 4.73 0l3.29 3.29c.15.15.34.23.55.23a.73.73 0 0 0 .75-.69c.01-.29-.1-.57-.3-.77l-3.17-3.17Z" /></svg>;


      export const CrossOutlineIcon = createIcon("CrossOutlineIcon", SVGComponent, {
  "fileName": "abs-cross.svg",
  "presentationName": "cross",
  "style": "outline",
  "category": "general"
});