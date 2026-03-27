import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M18.24 3.9c-1.25-1.21-2.8-1.91-4.24-1.91H7.96c-2.23 0-4.05 1.83-4.05 4.08v11.85c0 2.25 1.82 4.08 4.05 4.08h8.08c2.23 0 4.05-1.83 4.05-4.08V7.42c0-1.07-.71-2.41-1.85-3.52m.11 2.66-1.57.03c-.91.02-1.14-.15-1.19-.2-.11-.11-.1-.49-.09-.85.01-.61-.02-1.25-.3-1.81.69.24 1.39.65 2 1.25.57.55.93 1.1 1.15 1.59Zm-2.3 13.93H7.96c-1.41 0-2.55-1.16-2.55-2.58V5.44c0-1.07.88-1.95 1.95-1.95h4.32c2.36.26 2.34.96 2.32 2.01-.01.61-.03 1.38.53 1.94.44.44 1.12.65 2.12.65h.16l1.71-.03s.08.04.08.08v9.78c0 1.42-1.14 2.58-2.55 2.58Z" /><path d="M8.33 17.38c-.19 0-.38-.07-.53-.22a.745.745 0 0 1 0-1.06l1.8-1.81c.57-.57 1.49-.57 2.06 0l.67.67c.08.08.2.08.28 0l2.54-2.56c.29-.29.77-.3 1.06 0 .29.29.3.77 0 1.06l-2.72 2.74c-.57.57-1.49.57-2.06 0l-.67-.67a.193.193 0 0 0-.28 0l-1.62 1.64c-.15.15-.34.22-.53.22Z" /></g></svg>;


      export const DocumentChartLineOutlineIcon = createIcon("DocumentChartLineOutlineIcon", SVGComponent, {
  "fileName": "abs-document-chart-line.svg",
  "presentationName": "document-chart-line",
  "style": "outline",
  "category": "documents"
});