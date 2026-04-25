import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.24 3.91C16.99 2.7 15.44 2 14 2H7.96C5.73 2 3.91 3.83 3.91 6.08v11.85c0 2.25 1.82 4.08 4.05 4.08h8.08c2.23 0 4.05-1.83 4.05-4.08V7.43c0-1.07-.71-2.41-1.85-3.52m.11 2.66-1.57.03c-.91.02-1.14-.15-1.19-.2-.11-.11-.1-.49-.09-.85.01-.61-.02-1.25-.3-1.81.69.24 1.39.65 2 1.25.57.55.93 1.1 1.15 1.59Zm-2.3 13.93H7.96c-1.41 0-2.55-1.16-2.55-2.58V6.08c0-1.42 1.14-2.58 2.55-2.58h3.72c2.36.26 2.34.96 2.32 2.01-.01.61-.03 1.38.53 1.94.44.44 1.12.65 2.12.65h.16l1.79-.03v9.86c0 1.42-1.14 2.58-2.55 2.58Z" /><path d="M9.16 15.52c-.41 0-.75.34-.75.75v.71c0 .41.34.75.75.75s.75-.34.75-.75v-.71c0-.41-.34-.75-.75-.75m2.83-2.14c-.41 0-.75.34-.75.75v2.85c0 .41.34.75.75.75s.75-.34.75-.75v-2.85c0-.41-.34-.75-.75-.75m2.84-2.13c-.41 0-.75.34-.75.75v4.98c0 .41.34.75.75.75s.75-.34.75-.75V12c0-.41-.34-.75-.75-.75" /></svg>;


      export const DocumentBarOutlineIcon = createIcon("DocumentBarOutlineIcon", SVGComponent, {
  "fileName": "abs-document-bar.svg",
  "presentationName": "document-bar",
  "style": "outline",
  "category": "documents"
});