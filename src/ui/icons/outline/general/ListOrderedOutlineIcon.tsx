import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M10.8 5.75h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-10c-.41 0-.75.34-.75.75s.34.75.75.75m10 5.5h-10c-.41 0-.75.34-.75.75s.34.75.75.75h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 7h-10c-.41 0-.75.34-.75.75s.34.75.75.75h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-17-10c-.41 0-.75.34-.75.75s.34.75.75.75h2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.25V4c0-.41-.34-.75-.75-.75h-1c-.41 0-.75.34-.75.75s.34.75.75.75h.25v3.5zm2.5 11H4.73s.02-.02.03-.02c.8-.67 1.79-1.5 1.79-2.73s-1.01-2.25-2.25-2.25c-.62 0-1.22.26-1.65.72-.28.3-.26.78.04 1.06s.78.26 1.06-.04c.14-.15.34-.24.55-.24.41 0 .75.34.75.75 0 .53-.67 1.08-1.25 1.58-.69.58-1.35 1.13-1.35 1.92 0 .41.34.75.75.75h3.1c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></svg>;


      export const ListOrderedOutlineIcon = createIcon("ListOrderedOutlineIcon", SVGComponent, {
  "fileName": "abs-list-ordered.svg",
  "presentationName": "list-ordered",
  "style": "outline",
  "category": "general",
  "isNew": true
});