import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M5.15 4.85c-.08 0-.14-.06-.16-.15-.05-.34-.28-.63-.58-.77.14-.11.32-.19.51-.22l10.8-1.54A2 2 0 0 1 18 4.15v.82c-.32-.08-.66-.13-1-.13H5.15Zm4.67 9.56a2.253 2.253 0 0 1 2.74-2.74c.79.19 1.43.84 1.62 1.62.4 1.68-1.07 3.15-2.74 2.74-.79-.19-1.43-.84-1.62-1.62" /><path fillRule="evenodd" d="M18 6.02c1.16.41 2 1.52 2 2.83v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3v-14c0 .18.05.35.13.5.17.3.5.5.87.5h12a3 3 0 0 1 1 .17m-5.41 4.12a3.756 3.756 0 0 0-4.3 4.3 3.76 3.76 0 0 0 3.11 3.11c2.53.39 4.69-1.76 4.3-4.3a3.76 3.76 0 0 0-3.11-3.11" /></svg>;


      export const BookSolidIcon = createIcon("BookSolidIcon", SVGComponent, {
  "fileName": "abs-book-solid.svg",
  "presentationName": "book",
  "style": "solid",
  "category": "documents"
});