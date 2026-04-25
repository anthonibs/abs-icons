import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="m19.73 11.01-.01-.01a.7.7 0 0 0-.36-.1c-.22 0-.43.1-.57.28l-.04.07-1.36 2.29c-.19.33-.08.77.26.97.3.17.7.1.92-.18l.05-.08 1.35-2.28a.71.71 0 0 0-.24-.96m-1.1-1.46c-.07-.29-.26-.53-.51-.69-.09-.05-.19-.09-.29-.12L7.9 6.08c-1.27-.34-2.57.41-2.91 1.68l-.86 3.22c-.22.82.27 1.67 1.09 1.89l1.72.46c.19.05.33.23.33.43v1.03c0 .53-.43.96-.96.96h-.83c-.07 0-.13-.05-.13-.12 0-.39-.32-.71-.71-.71s-.71.32-.71.71v1.66c0 .39.32.71.71.71.33 0 .62-.22.69-.54.04-.17.21-.29.39-.29h.59c1.31 0 2.37-1.07 2.37-2.38v-.59c0-.1.05-.19.13-.25.07-.06.18-.07.27-.05l5.19 1.39c.66.17 1.37-.11 1.72-.7l2.51-4.19c.16-.25.2-.56.13-.85m-1.85.97-1.89 3.15c-.08.13-.22.21-.36.21a.4.4 0 0 1-.11-.02l-8.5-2.27a.49.49 0 0 1-.34-.58l.78-2.89a.95.95 0 0 1 1.17-.67l8.98 2.4c.14.04.25.14.3.27.06.13.04.28-.03.4" /></svg>;


      export const CamcorderOutlineIcon = createIcon("CamcorderOutlineIcon", SVGComponent, {
  "fileName": "abs-camcorder.svg",
  "presentationName": "camcorder",
  "style": "outline",
  "category": "general"
});