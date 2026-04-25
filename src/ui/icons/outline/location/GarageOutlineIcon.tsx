import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.25 20.05h-.17v-9.33c0-.82-.35-1.59-.96-2.13l-6.05-5.35a3.12 3.12 0 0 0-4.11 0L3.91 8.59c-.61.54-.96 1.32-.96 2.13v9.33h-.17c-.41 0-.75.34-.75.75s.34.75.75.75h18.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM4.42 10.71c0-.39.17-.75.46-1.01l6.05-5.35c.61-.54 1.52-.53 2.13 0l6.05 5.35c.29.26.46.62.46 1.01v9.33h-1.28v-4.76c0-1.88 0-2.91-.76-3.67s-1.8-.76-3.69-.76h-3.7c-1.89 0-2.93 0-3.69.76s-.76 1.79-.76 3.67v4.76H4.41v-9.33Zm12.38 9.33H7.2v-4.76c0-1.59.01-2.3.32-2.61s1.03-.32 2.63-.32h3.7c1.6 0 2.32.01 2.63.32s.32 1.02.32 2.61z" /><path d="M10.15 9.6h3.7c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.7c-.41 0-.75.34-.75.75s.34.75.75.75m4.63 4.47H9.23c-.41 0-.75.34-.75.75s.34.75.75.75h5.55c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 2.76H9.23c-.41 0-.75.34-.75.75s.34.75.75.75h5.55c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></svg>;


      export const GarageOutlineIcon = createIcon("GarageOutlineIcon", SVGComponent, {
  "fileName": "abs-garage.svg",
  "presentationName": "garage",
  "style": "outline",
  "category": "location"
});