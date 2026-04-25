import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M14.2 16.64c-.36 0-.66.3-.66.66s.3.66.66.66h6.22a.65.65 0 0 0 .66-.66c0-.36-.3-.66-.66-.66zm-6.22-6.2c0 2.01 1.62 3.64 3.62 3.64s3.62-1.63 3.62-3.64S13.6 6.8 11.6 6.8s-3.62 1.63-3.62 3.64m5.74-.01c0 1.49-1.51 2.63-3.07 1.93-.42-.19-.77-.54-.95-.96-.7-1.57.43-3.11 1.91-3.11 1.17 0 2.12.96 2.12 2.14Z" /><path d="M12.87 20.79a.74.74 0 0 0-.63-.36c-.03 0-.06.01-.09.01-1.18.18-2.43-.17-3.35-1.07C6.36 17 3.65 13.26 4.63 8.92c.9-4 4.32-5.42 6.97-5.42s6.07 1.42 6.97 5.43c.22.96.25 1.89.14 2.79-.02.34.18.64.49.75.06.03.13.04.2.05.12.01.23-.01.34-.05.21-.09.37-.26.44-.48 0 0 0-.01.01-.02.01-.03.01-.1.01-.14.12-1.03.08-2.11-.17-3.23C19.01 4.04 15.06 2 11.6 2S4.2 4.04 3.17 8.59c-1.13 5.02 1.87 9.22 4.59 11.85A5.52 5.52 0 0 0 11.6 22c.24 0 .48-.03.72-.07a.73.73 0 0 0 .55-.35c.08-.12.12-.25.12-.4v-.09a.64.64 0 0 0-.11-.3Z" /></g></svg>;


      export const MapPinRemoveOutlineIcon = createIcon("MapPinRemoveOutlineIcon", SVGComponent, {
  "fileName": "abs-map-pin-remove.svg",
  "presentationName": "map-pin-remove",
  "style": "outline",
  "category": "location"
});