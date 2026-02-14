import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.93 16.88h-1.86c-.39 0-.7.31-.7.7s.31.7.7.7h1.86c.39 0 .7-.31.7-.7s-.31-.7-.7-.7m0-5.58h-1.86c-.39 0-.7.31-.7.7s.31.7.7.7h1.86c.39 0 .7-.31.7-.7s-.31-.7-.7-.7m0 2.79h-1.86c-.39 0-.7.31-.7.7s.31.7.7.7h1.86c.39 0 .7-.31.7-.7s-.31-.7-.7-.7" /><path d="M21.3 20.6h-.23V8.45c0-1.23 0-1.91-.38-2.53-.38-.63-.97-.93-2.06-1.49l-4.04-2.06c-.59-.3-1.22-.54-1.75-.21-.54.33-.61 1-.61 1.68v3.74h-2.09c-2.71 0-3.49.78-3.49 3.49v.23H4.56c-1.16 0-1.63.47-1.63 1.63v7.67H2.7c-.39 0-.7.31-.7.7s.31.7.7.7h18.6c.39 0 .7-.31.7-.7s-.31-.7-.7-.7M13.63 3.84c0-.16 0-.29.01-.38.08.03.18.08.32.15L18 5.67c.94.48 1.33.69 1.5.96.17.28.18.73.18 1.81v12.15h-2.33v-9.53c0-2.71-.78-3.49-3.49-3.49h-.23V3.83Zm-9.3 9.09v-.22h2.31v7.91H4.31v-7.67Zm3.72 7.67v-9.53c0-1.92.18-2.09 2.09-2.09h3.72c1.92 0 2.09.18 2.09 2.09v9.53H8.04Z" /></svg>;


      export const CompanyOutlineIcon = createIcon("CompanyOutlineIcon", SVGComponent, {
  "fileName": "abs-company.svg",
  "presentationName": "company",
  "style": "outline",
  "category": "general"
});