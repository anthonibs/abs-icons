import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M17.2 8.34h-4.86c-.41 0-.75.34-.75.75s.34.75.75.75h4.86c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M9.04 7.17 7.49 8.73l-.16-.16a.745.745 0 0 0-1.06 0c-.29.29-.3.77 0 1.06l.69.7a.75.75 0 0 0 1.06 0l2.08-2.1c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0m8.16 7.69h-4.86c-.41 0-.75.34-.75.75s.34.75.75.75h4.86c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-8.16-1.17-1.55 1.56-.16-.16a.745.745 0 0 0-1.06 0c-.29.29-.3.77 0 1.06l.69.7a.75.75 0 0 0 1.06 0l2.08-2.09c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0Z" /><path d="M14.78 1.94H9.23c-4.66 0-7.22 2.58-7.22 7.27v5.59c0 4.69 2.57 7.27 7.22 7.27h5.55c4.66 0 7.22-2.58 7.22-7.27V9.21c0-4.62-2.63-7.27-7.22-7.27m5.72 12.85c0 3.83-1.93 5.77-5.72 5.77H9.23c-3.8 0-5.72-1.94-5.72-5.77V9.2c0-3.88 1.87-5.77 5.72-5.77h5.55c3.8 0 5.72 1.94 5.72 5.77z" /></g></svg>;


      export const TaskSquareOutlineIcon = createIcon("TaskSquareOutlineIcon", SVGComponent, {
  "fileName": "abs-task-square.svg",
  "presentationName": "task-square",
  "style": "outline",
  "category": "analytics"
});