import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M10.53 20.39H6.17c-.8 0-1.44-.66-1.44-1.46V4.95c0-.8.65-1.46 1.44-1.46h10.22c.8 0 1.44.66 1.44 1.46v5.73c0 .41.33.75.75.75s.75-.33.75-.75V4.95C19.33 3.32 18.01 2 16.4 2H6.17C4.56 2 3.24 3.32 3.24 4.95v13.97c0 1.63 1.32 2.95 2.93 2.95h4.36c.41 0 .75-.33.75-.75s-.33-.75-.75-.75Z" /><path d="M7.09 14.65c-.41 0-.75.34-.75.75s.34.75.75.75h2.73c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM15 11.66c0-.41-.34-.75-.75-.75H7.07c-.41 0-.75.34-.75.75s.34.75.75.75h7.18c.41 0 .75-.34.75-.75m-.74-4.48H7.08c-.41 0-.75.34-.75.75s.34.75.75.75h7.18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m3.4 10.56-.65-.41s-.06-.07-.06-.11v-.98c0-.35-.29-.64-.64-.64s-.64.29-.64.64v1.27c0 .31.16.6.42.76l.9.56c.1.06.22.1.34.1.22 0 .43-.11.54-.3.19-.3.1-.7-.2-.89Z" /><path d="M16.3 13.03c-2.46 0-4.46 2.01-4.46 4.48s2 4.48 4.46 4.48 4.46-2.01 4.46-4.48-2-4.48-4.46-4.48m0 7.68c-1.75 0-3.17-1.43-3.17-3.2s1.42-3.2 3.17-3.2 3.17 1.43 3.17 3.2-1.42 3.2-3.17 3.2" /></g></svg>;


      export const OverviewOutlineIcon = createIcon("OverviewOutlineIcon", SVGComponent, {
  "fileName": "abs-overview.svg",
  "presentationName": "overview",
  "style": "outline",
  "category": "documents"
});