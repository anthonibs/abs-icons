import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.9 6.74c-.41 0-.75.34-.75.75v6.88c0 .86-.6 2.06-1.29 2.58l-3.95 2.97c-1.04.78-2.78.78-3.82 0l-1.46-1.1a.75.75 0 0 0-.9 1.2l1.46 1.1c.78.59 1.8.88 2.82.88s2.04-.29 2.81-.88l3.95-2.97c1.06-.8 1.89-2.46 1.89-3.78V7.49c0-.41-.34-.75-.75-.75Zm1.82-4.52a.754.754 0 0 0-1.06 0l-1.97 1.99c-.13-.07-.27-.14-.44-.22l-4.59-1.73c-.93-.35-2.38-.35-3.3 0L5.77 4c-1.35.51-2.41 2.04-2.41 3.48v6.87c0 1.23.72 2.74 1.67 3.59l-2.75 2.77c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.39-.07.53-.22L21.72 3.28c.29-.29.29-.77 0-1.06M4.86 14.36V7.49c0-.82.67-1.79 1.44-2.08l4.59-1.74c.59-.22 1.66-.22 2.25 0l4.43 1.67L6.09 16.89c-.66-.54-1.23-1.7-1.23-2.53" /></svg>;


      export const ShieldSlashOutlineIcon = createIcon("ShieldSlashOutlineIcon", SVGComponent, {
  "fileName": "abs-shield-slash.svg",
  "presentationName": "shield-slash",
  "style": "outline",
  "category": "security"
});