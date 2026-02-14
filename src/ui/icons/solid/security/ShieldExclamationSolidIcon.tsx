import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.81 5.38a3.6 3.6 0 0 0-1.87-1.33L13.97 2.8c-1.29-.4-2.65-.4-3.94 0L6.06 4.05c-.76.23-1.4.69-1.87 1.33s-.72 1.39-.72 2.18v5.63c0 1.02.24 2.03.7 2.94.45.91 1.12 1.71 1.93 2.32l2.59 1.94a5.495 5.495 0 0 0 6.62 0l2.59-1.94c.81-.61 1.48-1.41 1.93-2.32.46-.9.7-1.92.7-2.94V7.56c0-.79-.25-1.54-.72-2.18m-8.69 3.24c0-.48.39-.87.88-.87s.87.39.87.87v3.75c0 .48-.39.88-.87.88s-.88-.4-.88-.88zm.88 7.63c-.48 0-.88-.39-.88-.87s.39-.88.88-.88.88.39.88.87-.39.88-.88.88" /></svg>;


      export const ShieldExclamationSolidIcon = createIcon("ShieldExclamationSolidIcon", SVGComponent, {
  "fileName": "abs-shield-exclamation-solid.svg",
  "presentationName": "shield-exclamation",
  "style": "solid",
  "category": "security"
});