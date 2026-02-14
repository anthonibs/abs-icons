import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.08 18.68a.83.83 0 0 1-.83-.84c0-.19.07-.38.19-.53a8.38 8.38 0 0 0 0-10.62.85.85 0 0 1 .11-1.18c.36-.29.88-.24 1.18.11 3.03 3.71 3.03 9.04 0 12.75-.16.19-.4.3-.65.3Zm-13.63-.19c.36-.29.41-.82.11-1.17a8.38 8.38 0 0 1 0-10.62c.29-.36.24-.88-.11-1.18a.85.85 0 0 0-1.18.11 10.08 10.08 0 0 0 0 12.75c.29.35.82.4 1.17.11Z" /><path d="M12.44 5.37h-.88c-3.41 0-6.19 2.78-6.19 6.19v.88c0 3.41 2.78 6.19 6.19 6.19h.88c3.41 0 6.19-2.78 6.19-6.19v-.88c0-3.41-2.78-6.19-6.19-6.19M12 16.17c-.46 0-.83-.37-.83-.83s.37-.84.83-.84.83.38.83.84-.37.83-.83.83m.83-4.17c0 .46-.37.83-.83.83s-.83-.37-.83-.83V8.66c0-.46.37-.83.83-.83s.83.37.83.83z" /></svg>;


      export const ExclamationEngineSolidIcon = createIcon("ExclamationEngineSolidIcon", SVGComponent, {
  "fileName": "abs-exclamation-engine-solid.svg",
  "presentationName": "exclamation-engine",
  "style": "solid",
  "category": "general"
});