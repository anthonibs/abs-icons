import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M10.68 12.01h2.63c.27 0 .45-.28.33-.52l-1.32-2.77a.364.364 0 0 0-.66 0l-1.32 2.77c-.12.24.06.52.33.52Z" /><path d="M11.88 2.06 2.29 5.48c-.17.06-.27.23-.24.41l1.98 11.66c.02.11.09.21.19.26l7.61 4.11c.11.06.24.06.35 0l7.6-4.11c.1-.05.17-.15.19-.26l1.98-11.66a.37.37 0 0 0-.24-.41l-9.59-3.42a.36.36 0 0 0-.25 0Zm3.95 14.03-.99-2.08a.36.36 0 0 0-.33-.21H9.49c-.14 0-.27.08-.33.21l-.99 2.08c-.06.13-.19.21-.33.21H6.29l5.38-11.77c.13-.28.54-.28.67 0l5.38 11.77h-1.55c-.14 0-.27-.08-.33-.21Z" /></g></svg>;


      export const AngularOutlineIcon = createIcon("AngularOutlineIcon", SVGComponent, {
  "fileName": "abs-angular.svg",
  "presentationName": "angular",
  "style": "outline",
  "category": "brands"
});