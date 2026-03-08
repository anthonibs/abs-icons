import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M18.51 7.81c0-.87 0-1.3-.19-1.63-.12-.21-.3-.39-.51-.51-.32-.19-.76-.19-1.63-.19h-3.49V2.69c0-.39-.31-.7-.7-.7s-.7.31-.7.7v2.79H7.8c-.87 0-1.3 0-1.63.19-.21.12-.39.3-.51.51-.19.32-.19.76-.19 1.63s0 1.3.19 1.63c.12.21.3.39.51.51.32.19.76.19 1.63.19h3.49v3.72H9.66c-.87 0-1.3 0-1.63.19-.21.12-.39.3-.51.51-.19.32-.19.76-.19 1.63s0 1.3.19 1.63c.12.21.3.39.51.51.32.19.76.19 1.63.19h1.63v2.79c0 .39.31.7.7.7s.7-.31.7-.7v-2.79h1.63c.87 0 1.3 0 1.63-.19.21-.12.39-.3.51-.51.19-.32.19-.76.19-1.63s0-1.3-.19-1.63c-.12-.21-.3-.39-.51-.51-.32-.19-.76-.19-1.63-.19h-1.63v-3.72h3.49c.87 0 1.3 0 1.63-.19.21-.12.39-.3.51-.51.19-.32.19-.76.19-1.63" /></svg>;


      export const AlignVerticallySolidIcon = createIcon("AlignVerticallySolidIcon", SVGComponent, {
  "fileName": "abs-align-vertically-solid.svg",
  "presentationName": "align-vertically",
  "style": "solid",
  "category": "interface"
});