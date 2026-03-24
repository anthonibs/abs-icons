import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 17.52 20" color="currentColor" width="1em" height="1em" {...props}><g><path d="M7.29 18.39H2.93c-.8 0-1.44-.66-1.44-1.46V2.95c0-.8.65-1.46 1.44-1.46h10.22c.8 0 1.44.66 1.44 1.46v5.73c0 .41.33.75.75.75s.75-.33.75-.75V2.95c0-1.63-1.32-2.95-2.93-2.95H2.93C1.32 0 0 1.32 0 2.95v13.97c0 1.63 1.32 2.95 2.93 2.95h4.36c.41 0 .75-.33.75-.75s-.33-.75-.75-.75Z" /><path d="M3.85 12.65c-.41 0-.75.34-.75.75s.34.75.75.75h2.73c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm7.92-2.99c0-.41-.34-.75-.75-.75H3.84c-.41 0-.75.34-.75.75s.34.75.75.75h7.18c.41 0 .75-.34.75-.75m-.75-4.48H3.84c-.41 0-.75.34-.75.75s.34.75.75.75h7.18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m3.4 10.56-.65-.41s-.06-.07-.06-.11v-.98c0-.35-.29-.64-.64-.64s-.64.29-.64.64v1.27c0 .31.16.6.42.76l.9.56c.1.06.22.1.34.1.22 0 .43-.11.54-.3.19-.3.1-.7-.2-.89Z" /><path d="M13.06 11.03c-2.46 0-4.46 2.01-4.46 4.48s2 4.48 4.46 4.48 4.46-2.01 4.46-4.48-2-4.48-4.46-4.48m0 7.68c-1.75 0-3.17-1.43-3.17-3.2s1.42-3.2 3.17-3.2 3.17 1.43 3.17 3.2-1.42 3.2-3.17 3.2" /></g></svg>;


      export const OverviewOutlineIcon = createIcon("OverviewOutlineIcon", SVGComponent, {
  "fileName": "abs-overview.svg",
  "presentationName": "overview",
  "style": "outline",
  "category": "documents"
});