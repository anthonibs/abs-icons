import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="m18.25 4-4.59-1.73c-.96-.35-2.38-.35-3.32 0L5.76 4.01c-1.35.51-2.4 2.04-2.4 3.49v6.87c0 1.32.83 2.99 1.89 3.78l3.95 2.97c.78.59 1.79.88 2.81.88s2.04-.29 2.81-.88l3.95-2.97c1.06-.8 1.89-2.46 1.89-3.78V7.5c0-1.45-1.06-2.99-2.4-3.5Zm.9 10.37c0 .86-.6 2.07-1.29 2.58l-3.95 2.97c-1.03.78-2.78.78-3.82 0l-3.95-2.97c-.69-.52-1.29-1.72-1.29-2.58V7.5c0-.82.67-1.79 1.43-2.08l4.58-1.74c.6-.22 1.66-.22 2.26 0l4.58 1.73c.76.29 1.43 1.27 1.43 2.09v6.87Z" /><path d="m13.07 11.37 1.38-1.39c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.37 1.38-1.42-1.43a.754.754 0 0 0-1.06 0c-.29.29-.3.77 0 1.06l1.43 1.44-1.47 1.48c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.39-.07.53-.22l1.47-1.48 1.42 1.43c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.3-.77 0-1.06l-1.43-1.44Z" /></g></svg>;


      export const ShieldCrossOutlineIcon = createIcon("ShieldCrossOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-cross.svg",
  "presentationName": "shield-cross",
  "style": "outline",
  "category": "security"
});