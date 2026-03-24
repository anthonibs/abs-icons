import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 20 18.79" color="currentColor" width="1em" height="1em" {...props}><g><path d="M19.45 2.98c-.64-1.04-1.91-1.74-4.01-2.23L13.63.34c-.91-.22-1.69-.33-2.39-.33-1.8 0-2.93.74-3.69 2.32-.07.14-.14.29-.21.46-.2.48-.38 1.06-.53 1.74L5.74 9.06c-.48 2.07-.41 3.51.22 4.54.65 1.02 1.92 1.73 4 2.22l1.83.44c.58.14 1.13.22 1.62.27 2.93.27 4.38-.98 5.19-4.48l1.07-4.53c.49-2.07.42-3.51-.22-4.53Zm-5.79 7.87c-.11.4-.47.67-.86.67-.07 0-.14-.01-.22-.04l-3.15-.8a.89.89 0 0 1-.64-1.07c.12-.47.59-.75 1.07-.64l3.15.8c.47.12.76.6.65 1.07Zm3.19-3.66c-.11.4-.46.67-.86.67-.07 0-.14-.01-.21-.02L10.5 6.5a.9.9 0 0 1-.65-1.07c.13-.47.61-.75 1.08-.64l5.28 1.33c.47.12.75.6.64 1.07" /><path d="m10.46 17.74-1.65.54c-3.85 1.24-5.65.32-6.9-3.49L.52 10.51C-.12 8.56-.16 7.16.37 6.12s1.69-1.81 3.67-2.45l1.28-.42c-.08.27-.15.56-.22.86L4.03 8.65c-.6 2.55-.46 4.42.45 5.87s2.52 2.4 5.08 3.01l.91.21Z" /></g></svg>;


      export const ClipboardsTextSolidIcon = createIcon("ClipboardsTextSolidIcon", SVGComponent, {
  "fileName": "abs-clipboards-text-solid.svg",
  "presentationName": "clipboards-text",
  "style": "solid",
  "category": "documents"
});