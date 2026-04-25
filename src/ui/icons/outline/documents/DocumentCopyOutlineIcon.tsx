import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.99 5.81c-.47-.47-1.05-.72-1.79-.86C17.92 3.28 16.49 2 14.75 2h-3.67C7.41 2 5.57 2 4.27 3.31c-1.29 1.3-1.29 3.15-1.29 6.84v5.55c0 1.74 1.27 3.19 2.92 3.47.14.75.39 1.33.86 1.8C7.79 22 9.28 22 12 22h2.76c2.71 0 4.21 0 5.24-1.03s1.03-2.54 1.03-5.27v-4.62c0-2.73 0-4.23-1.03-5.27ZM5.74 11.08v4.62c0 .71 0 1.33.02 1.88-.74-.3-1.27-1.03-1.27-1.88v-5.55c0-3.28 0-4.92.86-5.79.85-.86 2.49-.86 5.74-.86h3.67c.85 0 1.57.54 1.87 1.29-.55-.02-1.17-.02-1.87-.02H12c-2.71 0-4.21 0-5.24 1.03s-1.03 2.54-1.03 5.27Zm13.78 4.62c0 2.41 0 3.62-.59 4.21-.57.57-1.62.59-4.17.59H12c-2.55 0-3.61-.02-4.17-.59-.59-.59-.59-1.8-.59-4.21v-4.62c0-2.41 0-3.62.59-4.21.57-.57 1.62-.59 4.17-.59h2.76c2.55 0 3.61.02 4.17.59.59.59.59 1.8.59 4.21z" /></svg>;


      export const DocumentCopyOutlineIcon = createIcon("DocumentCopyOutlineIcon", SVGComponent, {
  "fileName": "abs-document-copy.svg",
  "presentationName": "document-copy",
  "style": "outline",
  "category": "documents"
});