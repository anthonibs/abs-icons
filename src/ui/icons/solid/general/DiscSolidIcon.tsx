import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.3 17.28c.19.28.37.46.46.74.28.46.56 1.02.46 1.48 0 .74-.37 1.48-1.02 1.94-.37.28-.93.46-1.48.46-.56.09-1.3.09-2.22.09h-5c-.93 0-1.67 0-2.22-.09s-1.11-.19-1.48-.46c-.56-.46-.93-1.2-1.02-1.94 0-.56.19-1.02.46-1.48.09-.19.28-.46.46-.74a9.52 9.52 0 0 0 6.3 2.41c2.41-.09 4.63-.93 6.3-2.41M12 2c4.44 0 8.15 3.61 8.15 8.15S16.54 18.3 12 18.3s-8.15-3.61-8.15-8.15S7.56 2 12 2m0 6.3c-1.02 0-1.85.83-1.85 1.85S10.98 12 12 12s1.85-.83 1.85-1.85S13.02 8.3 12 8.3" /></svg>;


      export const DiscSolidIcon = createIcon("DiscSolidIcon", SVGComponent, {
  "fileName": "abs-disc-solid.svg",
  "presentationName": "disc",
  "style": "solid",
  "category": "general"
});