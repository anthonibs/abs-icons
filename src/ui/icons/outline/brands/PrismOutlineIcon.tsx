import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.42 14.58 13.61 3.1c-.18-.26-.42-.48-.7-.62s-.59-.23-.91-.23-.63.08-.91.23-.52.36-.7.62L2.58 14.58c-.15.22-.25.47-.3.74-.05.26-.04.54.03.8.06.26.18.51.35.72s.37.39.61.51l7.81 4.17a1.96 1.96 0 0 0 1.84 0l7.81-4.17c.24-.13.45-.3.61-.51.17-.21.29-.46.35-.72s.07-.53.03-.8-.15-.52-.3-.74M3.9 16.25a.6.6 0 0 1-.21-.18.7.7 0 0 1-.02-.81l7.38-10.85c.09-.13.3-.07.3.09v15.19c0 .24-.27.39-.48.28L3.9 16.24Z" /></svg>;


      export const PrismOutlineIcon = createIcon("PrismOutlineIcon", SVGComponent, {
  "fileName": "abs-prism.svg",
  "presentationName": "prism",
  "style": "outline",
  "category": "brands"
});