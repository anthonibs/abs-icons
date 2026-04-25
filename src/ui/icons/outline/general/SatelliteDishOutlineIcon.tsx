import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M10.16 15.1c-.06-.06-.06-.15 0-.2l2.37-2.37c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0L9.1 13.84c-.06.06-.15.06-.2 0l-3.25-3.25a1.81 1.81 0 0 0-1.74-.48c-.64.16-1.13.63-1.32 1.26a8.03 8.03 0 0 0 3.65 9.28c1.24.73 2.65 1.1 4.07 1.1.79 0 1.58-.12 2.35-.35.61-.19 1.07-.67 1.23-1.3s-.02-1.29-.48-1.75zm2.28 4.63c-.02.07-.07.18-.21.23-1.74.53-3.65.31-5.23-.61a6.53 6.53 0 0 1-2.97-7.55c.05-.17.19-.22.25-.24.02 0 .05-.01.08-.01.07 0 .15.02.23.1l3.88 3.88 3.88 3.88c.12.12.1.27.09.32M11 6.25c-.41 0-.75.34-.75.75s.34.75.75.75c2.26 0 5.25 2.99 5.25 5.25 0 .41.34.75.75.75s.75-.34.75-.75c0-3.09-3.66-6.75-6.75-6.75" /><path d="M18.41 5.73C16.25 3.52 13.55 2.25 11 2.25c-.41 0-.75.34-.75.75s.34.75.75.75c2.15 0 4.46 1.1 6.34 3.02 1.82 1.86 2.91 4.19 2.91 6.23 0 .41.34.75.75.75s.75-.34.75-.75c0-2.42-1.25-5.14-3.34-7.27" /></g></svg>;


      export const SatelliteDishOutlineIcon = createIcon("SatelliteDishOutlineIcon", SVGComponent, {
  "fileName": "abs-satellite-dish.svg",
  "presentationName": "satellite-dish",
  "style": "outline",
  "category": "general"
});