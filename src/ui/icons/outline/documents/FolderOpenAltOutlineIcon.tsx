import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.51 10.32c-.33-.33-.76-.51-1.21-.51h-.76c-.2-.68-.58-1.3-1.1-1.82a4.28 4.28 0 0 0-3.06-1.28h-1.74c-.17 0-.35-.04-.5-.12s-.29-.21-.39-.36l-.47-.68c-.31-.48-.74-.86-1.24-1.13s-1.06-.41-1.62-.41H6.36c-1.16 0-2.24.45-3.06 1.28a4.28 4.28 0 0 0-1.28 3.06v7.23c0 1.15.46 2.26 1.28 3.06.8.81 1.85 1.26 2.98 1.28h.08l12.27.11h.03c1.51 0 2.77-1.18 2.89-2.68l.48-5.77c0-.46-.17-.9-.49-1.23ZM6.34 18.46c-.77 0-1.51-.32-2.05-.85a2.9 2.9 0 0 1-.85-2.05V8.33c0-.76.31-1.51.85-2.05.54-.55 1.28-.85 2.05-.85H9.4c.32 0 .65.08.94.24.28.15.54.38.72.66l.48.7c.22.35.54.62.9.82.35.19.77.29 1.19.29h1.74c.77 0 1.51.31 2.05.85.24.24.43.5.57.8l-8.54-.04c-1.12 0-2.05.88-2.13 1.96l-.87 6.74h-.11Zm13.86-1.24c-.07.82-.74 1.39-1.56 1.39h-.25l-10.62-.09v-.05l.86-6.6c.04-.43.39-.77.81-.77l8.82.04h2.02q.15 0 .27.12c.12.12.12.18.12.24l-.48 5.73Z" /></svg>;


      export const FolderOpenAltOutlineIcon = createIcon("FolderOpenAltOutlineIcon", SVGComponent, {
  "fileName": "abs-folder-open-alt.svg",
  "presentationName": "folder-open-alt",
  "style": "outline",
  "category": "documents"
});