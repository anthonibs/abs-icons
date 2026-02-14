import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M13.5 6.75H12c-.41 0-.75.34-.75.75s.34.75.75.75h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 3H12c-.41 0-.75.34-.75.75s.34.75.75.75h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 3H6c-.41 0-.75.34-.75.75s.34.75.75.75h7.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 3H6c-.41 0-.75.34-.75.75s.34.75.75.75h7.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /><path d="M19.88 6.7H17.3V4.87c0-1.06-.86-1.92-1.92-1.92H4.12c-1.06 0-1.92.86-1.92 1.92v13.12c0 1.68 1.37 3.05 3.05 3.05h13.5c1.68 0 3.05-1.37 3.05-3.05V8.61c0-1.06-.86-1.92-1.92-1.92ZM3.8 18V4.88c0-.18.15-.33.33-.33h11.25c.18 0 .33.15.33.33V18c0 .53.15 1.02.38 1.45H5.25c-.8 0-1.45-.65-1.45-1.45m16.4 0a1.451 1.451 0 0 1-2.9 0V8.3h2.58c.18 0 .33.15.33.33v9.38Z" /><path d="M6 11.25h3c.41 0 .75-.34.75-.75v-3c0-.41-.34-.75-.75-.75H6c-.41 0-.75.34-.75.75v3c0 .41.34.75.75.75m.75-3h1.5v1.5h-1.5z" /></g></svg>;


      export const NewspaperOutlineIcon = createIcon("NewspaperOutlineIcon", SVGComponent, {
  "fileName": "abs-newspaper.svg",
  "presentationName": "newspaper",
  "style": "outline",
  "category": "general"
});