import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.35 6.42c-.13-.07-.26-.14-.38-.22q-.54-.36-.99-.84a4.6 4.6 0 0 1-1.11-2.29c-.08-.5-.05-.82-.04-.82h-3.35v13.56c-.04.47-.18.92-.43 1.31a2.85 2.85 0 0 1-2.39 1.32c-1.56 0-2.82-1.27-2.82-2.84s1.26-2.84 2.82-2.84c.3 0 .59.05.87.14V9.49a6.24 6.24 0 0 0-4.79 1.4c-.58.5-1.06 1.1-1.43 1.77-.14.24-.67 1.22-.74 2.81-.04.9.23 1.84.36 2.22.08.24.4 1.01.91 1.67.41.52.9.99 1.45 1.37 1.62 1.1 3.42 1.03 3.42 1.03.31-.01 1.35 0 2.54-.56a6.4 6.4 0 0 0 2.06-1.55c.48-.55.86-1.18 1.12-1.87.3-.8.4-1.75.4-2.13V8.78l.58.38s.78.5 2 .83c.87.23 2.05.28 2.05.28V6.95c-.41.04-1.25-.09-2.1-.51Z" /></svg>;


      export const TiktokOutlineIcon = createIcon("TiktokOutlineIcon", SVGComponent, {
  "fileName": "abs-tiktok.svg",
  "presentationName": "tiktok",
  "style": "outline",
  "category": "brands"
});