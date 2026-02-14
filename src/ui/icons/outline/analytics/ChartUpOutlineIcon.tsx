import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 2C5.64 2 2 5.64 2 12s3.64 10 10 10 10-3.64 10-10S18.36 2 12 2m0 18.37c-5.4 0-8.37-2.97-8.37-8.37S6.6 3.63 12 3.63 20.37 6.6 20.37 12 17.4 20.37 12 20.37" /><path d="M7.79 14.6c-.41 0-.75.34-.75.75v1.7c0 .41.34.75.75.75s.75-.34.75-.75v-1.7c0-.41-.34-.75-.75-.75M12 12.9c-.41 0-.75.34-.75.75v3.4c0 .41.34.75.75.75s.75-.34.75-.75v-3.4c0-.41-.34-.75-.75-.75m4.21-1.71c-.41 0-.75.34-.75.75v5.11c0 .41.34.75.75.75s.75-.34.75-.75v-5.11c0-.41-.34-.75-.75-.75m.71-4.44-.03-.12c-.02-.04-.05-.07-.08-.11s-.06-.09-.1-.12c0 0-.01-.02-.02-.02-.03-.02-.06-.03-.09-.05-.05-.03-.09-.06-.14-.08s-.1-.02-.15-.03c-.04 0-.07-.02-.11-.02h-2.41c-.41 0-.75.34-.75.75s.34.75.75.75h.73c-1.9 1.92-4.27 3.27-6.92 3.93-.4.1-.65.51-.55.91.08.34.39.57.73.57.06 0 .12 0 .18-.02 2.86-.71 5.42-2.16 7.49-4.2v.46c0 .41.34.75.75.75s.75-.34.75-.75V6.92c0-.06-.02-.11-.03-.16Z" /></g></svg>;


      export const ChartUpOutlineIcon = createIcon("ChartUpOutlineIcon", SVGComponent, {
  "fileName": "abs-chart-up.svg",
  "presentationName": "chart-up",
  "style": "outline",
  "category": "analytics"
});