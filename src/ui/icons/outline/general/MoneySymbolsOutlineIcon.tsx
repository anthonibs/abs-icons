import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.57 12.06c-.51-.38-1.14-.64-1.82-.75V8.35c.29.08.56.21.79.39l.42.33a.747.747 0 1 0 .93-1.17l-.42-.33a3.86 3.86 0 0 0-1.72-.75V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.82c-.63.11-1.22.36-1.72.75-.72.57-1.11 1.34-1.11 2.18s.4 1.61 1.11 2.18c.48.38 1.08.64 1.72.75v2.98c-.34-.08-.66-.22-.92-.41l-.88-.66a.75.75 0 0 0-.9 1.2l.88.66c.52.39 1.16.64 1.82.75v.81c0 .41.34.75.75.75s.75-.34.75-.75v-.81c.66-.11 1.3-.35 1.82-.75.75-.56 1.18-1.36 1.18-2.19s-.43-1.63-1.18-2.19Zm-4.11-1.31c-.35-.28-.55-.64-.55-1s.19-.72.55-1c.23-.18.5-.31.79-.39v2.78c-.3-.08-.57-.21-.79-.39m3.21 4.49c-.26.2-.58.33-.92.41v-2.81c.35.09.67.22.92.41.37.28.58.63.58.99s-.21.71-.58.99Z" /><path d="M12 2.11c-6.19 0-9.74 3.6-9.74 9.89s3.55 9.89 9.74 9.89 9.74-3.61 9.74-9.89S18.19 2.11 12 2.11m0 18.29c-5.31 0-8.24-2.98-8.24-8.39s2.93-8.4 8.24-8.4 8.24 2.98 8.24 8.39-2.93 8.39-8.24 8.39Z" /></svg>;


      export const MoneySymbolsOutlineIcon = createIcon("MoneySymbolsOutlineIcon", SVGComponent, {
  "fileName": "abs-money-symbols.svg",
  "presentationName": "money-symbols",
  "style": "outline",
  "category": "general"
});