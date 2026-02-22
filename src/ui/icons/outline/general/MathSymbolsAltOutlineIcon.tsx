import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M8.4 20.23c-.2 0-.39-.08-.55-.23l-1.46-1.46s-.08-.03-.11 0L4.82 20c-.3.3-.79.3-1.09 0s-.3-.79 0-1.09l1.46-1.46s.03-.08 0-.11l-1.46-1.46c-.3-.3-.3-.79 0-1.09s.79-.3 1.09 0l1.46 1.46s.08.03.11 0l1.46-1.46c.3-.3.79-.3 1.09 0s.3.79 0 1.09l-1.46 1.46s-.03.08 0 .11l1.46 1.46a.773.773 0 0 1-.55 1.32Zm11.83-.51h-5.14c-.43 0-.77-.35-.77-.77s.35-.77.77-.77h5.14c.43 0 .77.35.77.77s-.35.77-.77.77m0-3.09h-5.14c-.43 0-.77-.35-.77-.77s.35-.77.77-.77h5.14c.43 0 .77.35.77.77s-.35.77-.77.77m-2.57-6.17a.77.77 0 0 1-.77-.77V7.92s-.01-.03-.03-.03h-1.77c-.43 0-.77-.35-.77-.77s.35-.77.77-.77h1.77s.03-.01.03-.03V4.55c0-.43.35-.77.77-.77s.77.35.77.77v1.77s.01.03.03.03h1.77c.43 0 .77.35.77.77s-.35.77-.77.77h-1.77s-.03.01-.03.03v1.77c0 .43-.35.77-.77.77M8.92 7.89H3.77c-.43 0-.77-.35-.77-.77s.35-.77.77-.77h5.14c.43 0 .77.35.77.77s-.35.77-.77.77Z" /></svg>;


      export const MathSymbolsAltOutlineIcon = createIcon("MathSymbolsAltOutlineIcon", SVGComponent, {
  "fileName": "abs-math-symbols-alt.svg",
  "presentationName": "math-symbols-alt",
  "style": "outline",
  "category": "general"
});