import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m19.46 6.41-2.82-2.84A5.3 5.3 0 0 0 12.86 2H8.33C5.18 2 2.99 4.21 2.99 7.38v9.25c0 3.16 2.2 5.38 5.34 5.38h7.35c3.15 0 5.34-2.21 5.34-5.38v-6.41c0-1.44-.55-2.79-1.56-3.8Zm.06 10.21c0 2.35-1.51 3.88-3.84 3.88H8.33c-2.33 0-3.84-1.52-3.84-3.88V7.38C4.49 5.03 6 3.5 8.33 3.5h4.53c1.03 0 2 .4 2.72 1.13l2.82 2.84c.72.73 1.12 1.7 1.12 2.75v6.41Z" /><path d="M10.23 13.31a.754.754 0 0 0-1.06 0l-1.84 1.85c-.29.29-.29.77 0 1.06l1.84 1.85c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.3-.77 0-1.06l-1.31-1.32 1.31-1.32c.29-.29.29-.77 0-1.06m4.6 0a.754.754 0 0 0-1.06 0c-.29.29-.3.77 0 1.06l1.31 1.32-1.31 1.32c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.39-.07.53-.22l1.84-1.85c.29-.29.29-.76 0-1.06z" /></svg>;


      export const CodeSnippetOutlineIcon = createIcon("CodeSnippetOutlineIcon", SVGComponent, {
  "fileName": "abs-code-snippet.svg",
  "presentationName": "code-snippet",
  "style": "outline",
  "category": "general"
});