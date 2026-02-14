import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M16.62 3.44H7.38C3.96 3.44 2 5.39 2 8.78v6.43c0 3.4 1.96 5.34 5.38 5.34h9.25c3.42 0 5.38-1.95 5.38-5.34V8.78c0-3.4-1.96-5.34-5.38-5.34Zm3.88 11.77c0 2.58-1.27 3.84-3.88 3.84H7.38c-2.61 0-3.88-1.26-3.88-3.84V8.78c0-2.58 1.27-3.84 3.88-3.84h9.25c2.61 0 3.88 1.26 3.88 3.84v6.43Z" /><path d="m16.16 8.66-2.89 2.3c-.68.54-1.86.53-2.54 0l-2.89-2.3a.74.74 0 0 0-1.05.12c-.26.32-.2.8.12 1.05l2.89 2.3c.62.49 1.41.73 2.2.73s1.58-.24 2.2-.73l2.9-2.3c.33-.26.38-.73.12-1.05a.75.75 0 0 0-1.05-.12Z" /></g></svg>;


      export const EnvelopeOutlineIcon = createIcon("EnvelopeOutlineIcon", SVGComponent, {
  "fileName": "abs-envelope.svg",
  "presentationName": "envelope",
  "style": "outline",
  "category": "users"
});