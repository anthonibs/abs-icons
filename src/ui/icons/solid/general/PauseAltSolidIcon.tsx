import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M7.63 3C5.76 3 4.25 4.51 4.25 6.38v11.25c0 1.87 1.52 3.38 3.38 3.38s3.38-1.51 3.38-3.38V6.38C11.01 4.51 9.5 3 7.63 3m8.74 0c-1.87 0-3.38 1.51-3.38 3.38v11.25c0 1.87 1.51 3.38 3.38 3.38s3.38-1.51 3.38-3.38V6.38c0-1.87-1.52-3.38-3.38-3.38" /></svg>;


      export const PauseAltSolidIcon = createIcon("PauseAltSolidIcon", SVGComponent, {
  "fileName": "abs-pause-alt-solid.svg",
  "presentationName": "pause-alt",
  "style": "solid",
  "category": "general",
  "isNew": false
});