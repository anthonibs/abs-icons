import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M8.53 14.44a3.55 3.55 0 0 1 4.17-4.17c1.38.26 2.52 1.4 2.78 2.78a3.55 3.55 0 0 1-4.17 4.17c-1.38-.26-2.52-1.4-2.78-2.78m4-2.75a2.133 2.133 0 0 0-2.59 2.59c.18.74.79 1.35 1.53 1.53 1.58.38 2.97-1.01 2.59-2.59-.18-.74-.79-1.35-1.53-1.53" /><path fillRule="evenodd" d="M18.37 4.6c0-1.58-1.4-2.79-2.96-2.57L5.22 3.49c-.85.12-1.48.85-1.48 1.71v13.27a3.54 3.54 0 0 0 3.54 3.54h9.44a3.54 3.54 0 0 0 3.54-3.54V9.03c0-1.3-.7-2.44-1.75-3.06a.27.27 0 0 1-.13-.23V4.59ZM5.16 6.91h11.57c1.17 0 2.11.95 2.11 2.12v9.44c0 1.17-.95 2.12-2.12 2.12H7.28c-1.17 0-2.12-.95-2.12-2.12V6.9Zm11.57-1.42h.22V4.6c0-.72-.64-1.27-1.35-1.17L5.41 4.89c-.15.02-.26.15-.26.3 0 .17.13.3.3.3h11.27Z" /></svg>;


      export const BookOutlineIcon = createIcon("BookOutlineIcon", SVGComponent, {
  "fileName": "abs-book.svg",
  "presentationName": "book",
  "style": "outline",
  "category": "documents"
});