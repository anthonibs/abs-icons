import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.4 12.19H8.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.93c.41 0 .75.34.75.75s-.34.75-.75.75m6.6 9.56c-.19 0-.38-.07-.53-.22l-3.22-3.22c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l3.22 3.22c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" /><path d="M11.46 20.67c-5.85 0-9.21-3.36-9.21-9.21s3.36-9.21 9.21-9.21 9.21 3.36 9.21 9.21-3.36 9.21-9.21 9.21m0-16.92c-4.97 0-7.71 2.74-7.71 7.71s2.74 7.71 7.71 7.71 7.71-2.74 7.71-7.71-2.74-7.71-7.71-7.71" /></svg>;


      export const SearchMinusOutlineIcon = createIcon("SearchMinusOutlineIcon", SVGComponent, {
  "fileName": "abs-search-minus.svg",
  "presentationName": "search-minus",
  "style": "outline",
  "category": "general"
});