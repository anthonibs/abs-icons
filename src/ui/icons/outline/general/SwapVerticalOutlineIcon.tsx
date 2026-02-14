import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m21.27 6.6-3.88-3.88s-.02 0-.02-.02c-.07-.06-.14-.12-.23-.15a.8.8 0 0 0-.27-.05h-.06c-.09 0-.18.02-.27.05-.09.04-.16.09-.23.15 0 0-.02 0-.03.02L12.4 6.6c-.3.3-.3.79 0 1.1.3.3.79.3 1.1 0l2.55-2.55v15.58a.781.781 0 0 0 1.56 0V5.15l2.55 2.55c.15.15.35.23.55.23s.4-.08.55-.23c.3-.3.3-.79 0-1.1Zm-10.79 9.7-2.55 2.55V3.28a.781.781 0 0 0-1.56 0v15.58l-2.55-2.55c-.3-.3-.79-.3-1.1 0-.3.3-.3.79 0 1.1l3.88 3.88s.01 0 .02.01a.77.77 0 0 0 .83.15c.09-.04.17-.09.23-.15 0 0 .01 0 .02-.01l3.88-3.88c.3-.3.3-.79 0-1.1-.3-.3-.79-.3-1.1 0Z" /></svg>;


      export const SwapVerticalOutlineIcon = createIcon("SwapVerticalOutlineIcon", SVGComponent, {
  "fileName": "abs-swap-vertical.svg",
  "presentationName": "swap-vertical",
  "style": "outline",
  "category": "general"
});