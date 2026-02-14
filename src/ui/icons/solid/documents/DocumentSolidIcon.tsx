import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16.75 2.5h-9.5c-1.26 0-2.47.5-3.36 1.39S2.5 5.99 2.5 7.25v9.5c0 1.26.5 2.47 1.39 3.36s2.1 1.39 3.36 1.39h9.5c1.26 0 2.47-.5 3.36-1.39s1.39-2.1 1.39-3.36v-9.5c0-1.26-.5-2.47-1.39-3.36s-2.1-1.39-3.36-1.39M8.2 7.25h5.7c.25 0 .49.1.67.28s.28.42.28.67-.1.49-.28.67-.42.28-.67.28H8.2c-.25 0-.49-.1-.67-.28s-.28-.42-.28-.67.1-.49.28-.67.42-.28.67-.28m3.8 9.5H8.2c-.25 0-.49-.1-.67-.28s-.28-.42-.28-.67.1-.49.28-.67.42-.28.67-.28H12c.25 0 .49.1.67.28s.28.42.28.67-.1.49-.28.67-.42.28-.67.28m3.8-3.8H8.2c-.25 0-.49-.1-.67-.28s-.28-.42-.28-.67.1-.49.28-.67.42-.28.67-.28h7.6c.25 0 .49.1.67.28s.28.42.28.67-.1.49-.28.67-.42.28-.67.28" /></svg>;


      export const DocumentSolidIcon = createIcon("DocumentSolidIcon", SVGComponent, {
  "fileName": "abs-document-solid.svg",
  "presentationName": "document",
  "style": "solid",
  "category": "documents"
});