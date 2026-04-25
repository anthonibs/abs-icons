import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m3.69 2.76 1.45 16.73c.02.19.15.35.34.41l6.39 1.83c.08.02.17.02.26 0l6.41-1.83a.46.46 0 0 0 .34-.41l1.45-16.72a.47.47 0 0 0-.46-.51H4.15a.46.46 0 0 0-.46.51ZM16.63 8H9.55c-.27 0-.48.23-.46.5l.1 1.29c.02.24.22.43.46.43h6.72c.27 0 .49.23.46.51l-.51 5.76c-.02.19-.15.35-.34.41L12.13 18c-.08.02-.17.02-.25 0l-3.86-1.1a.46.46 0 0 1-.34-.41l-.22-2.55c-.02-.27.19-.51.46-.51h1.17c.24 0 .44.18.46.42l.08.96c.02.19.15.36.34.41l1.9.52c.08.02.17.02.25 0l1.89-.53a.46.46 0 0 0 .34-.41l.17-1.97a.47.47 0 0 0-.46-.51H7.73c-.24 0-.44-.19-.46-.43L6.8 6.31c-.02-.27.19-.5.46-.5h9.47c.27 0 .49.23.46.5l-.1 1.23c-.02.24-.22.43-.46.43Z" /></svg>;


      export const Html5OutlineIcon = createIcon("Html5OutlineIcon", SVGComponent, {
  "fileName": "abs-html5.svg",
  "presentationName": "html5",
  "style": "outline",
  "category": "brands"
});