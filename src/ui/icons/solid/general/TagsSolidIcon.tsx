import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M9.26 4.25c.77 0 1.51.31 2.05.85l5.53 5.53a3.3 3.3 0 0 1 0 4.67l-3.48 3.48a3.3 3.3 0 0 1-4.67 0l-5.53-5.53c-.55-.54-.85-1.28-.85-2.05V7.16c0-1.6 1.3-2.91 2.91-2.91zm-2.1 3.87c-.53 0-.97.44-.96.97s.44.97.97.96a.97.97 0 0 0 0-1.94" /><path d="M14.22 4.53c.38-.38.99-.38 1.37 0l4.45 4.45c2.2 2.2 2.2 5.77 0 7.97l-1.54 1.54c-.38.37-1 .36-1.37-.02a.98.98 0 0 1 0-1.35l1.54-1.54a3.706 3.706 0 0 0 0-5.23L14.22 5.9a.966.966 0 0 1 0-1.37" /></g></svg>;


      export const TagsSolidIcon = createIcon("TagsSolidIcon", SVGComponent, {
  "fileName": "abs-tags-solid.svg",
  "presentationName": "tags",
  "style": "solid",
  "category": "general"
});