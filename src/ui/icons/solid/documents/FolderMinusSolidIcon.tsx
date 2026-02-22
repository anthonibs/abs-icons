import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M16.79 15.48H7.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.59c.41 0 .75.34.75.75s-.34.75-.75.75m3.5-8.22c-1.1-1.18-2.5-1.15-3.73-1.13-.77.01-1.5.03-2.03-.27-.64-.37-.87-.78-1.13-1.27-.29-.53-.61-1.14-1.49-1.61-1.63-.88-3.54-1.05-6.01-.54-2.43.49-4.01 2.66-4.01 5.51v6.07c0 7.27 4.19 7.84 10.11 7.84s10.11-.58 10.11-7.86c0-1.79 0-4.77-1.82-6.73Z" /></svg>;


      export const FolderMinusSolidIcon = createIcon("FolderMinusSolidIcon", SVGComponent, {
  "fileName": "abs-folder-minus-solid.svg",
  "presentationName": "folder-minus",
  "style": "solid",
  "category": "documents"
});