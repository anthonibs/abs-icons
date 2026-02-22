import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12.08 22c-.06 0-.12 0-.18-.02-2.94-.73-9.78-3.19-9.78-10.39 0-5.8 1.61-7.04 1.93-7.23.29-.13 5.35-2.35 7.94-2.35s7.65 2.22 7.87 2.31c.4.23 2.01 1.47 2.01 7.27 0 7.45-7.36 9.84-9.61 10.39-.06.01-.12.02-.18.02M4.83 5.65c-.19.19-1.2 1.42-1.2 5.94 0 6.01 5.77 8.2 8.46 8.89 2.63-.68 8.29-2.85 8.29-8.89 0-4.52-1.02-5.75-1.2-5.94-1.45-.63-5.32-2.15-7.17-2.15S6.29 5.01 4.84 5.65Z" /><path d="M12.01 17.04c-.46 0-.84-.38-.84-.84s.37-.84.83-.84.84.38.84.84-.38.84-.84.84zM12 13.88c-.46 0-.84-.38-.84-.84s.38-.84.84-.84c.36 0 .69-.11.99-.31s.53-.47.66-.8.17-.68.11-1.03c-.07-.35-.24-.67-.49-.92s-.57-.42-.92-.48c-.35-.07-.71-.03-1.03.11s-.61.37-.8.66c-.2.29-.31.64-.31.99 0 .46-.38.84-.84.84s-.84-.38-.84-.84a3.46 3.46 0 0 1 2.15-3.2 3.45 3.45 0 0 1 2.01-.2c.67.14 1.29.46 1.78.95s.82 1.11.95 1.78a3.483 3.483 0 0 1-3.41 4.16v-.02Z" /></g></svg>;


      export const ShieldQuestionSoftOutlineIcon = createIcon("ShieldQuestionSoftOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-question-soft.svg",
  "presentationName": "shield-question-soft",
  "style": "outline",
  "category": "security"
});