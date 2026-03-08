import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M10.34 2.37C10.87 2.12 11.43 2 12 2s1.13.12 1.66.37c2.02.95 3.64 2.72 4.75 4.76s1.74 4.4 1.74 6.6c0 4.56-3.63 8.27-8.14 8.27s-8.15-3.72-8.15-8.27c0-2.2.63-4.56 1.74-6.6s2.72-3.81 4.75-4.76Zm.96 1.11c-1.84.73-3.4 2.33-4.48 4.32-1.01 1.85-1.57 3.99-1.57 5.94 0 3.55 2.63 6.46 5.99 6.84.03 0 .05-.02.05-.05V3.47Zm1.4 0v3.94s.05.06.08.03l2.29-2.29s.04-.11 0-.14c-.71-.67-1.51-1.2-2.37-1.53ZM16 6.2l-3.24 3.24s-.06.09-.06.15v2.92s.06.07.09.04l4.51-4.51c-.34-.65-.72-1.27-1.16-1.83a.094.094 0 0 0-.15 0Zm1.81 3.31-5.05 5.05s-.06.09-.06.14v2.46s.06.07.1.04l5.69-5.69c-.13-.67-.27-1.31-.52-1.97-.02-.07-.11-.09-.16-.04Zm.92 3.73-5.98 5.98s-.05.08-.05.12v1.23c3.39-.36 6.05-3.27 6.05-6.84 0-.16 0-.33-.01-.5Z" /></svg>;


      export const LeafOutlineIcon = createIcon("LeafOutlineIcon", SVGComponent, {
  "fileName": "abs-leaf.svg",
  "presentationName": "leaf",
  "style": "outline",
  "category": "nature"
});