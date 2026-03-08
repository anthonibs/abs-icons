import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M2 20.02c0-.39.31-.7.7-.7h18.6c.39 0 .7.31.7.7s-.31.7-.7.7H2.7c-.39 0-.7-.31-.7-.7" /><path d="M7.81 16.3c-.87 0-1.3 0-1.63-.19-.21-.12-.39-.3-.51-.51-.19-.32-.19-.76-.19-1.63V5.6c0-.87 0-1.3.19-1.63.12-.21.3-.39.51-.51.32-.19.76-.19 1.63-.19s1.3 0 1.63.19c.21.12.39.3.51.51.19.32.19.76.19 1.63v8.37c0 .87 0 1.3-.19 1.63-.12.21-.3.39-.51.51-.32.19-.76.19-1.63.19m8.38 0c-.87 0-1.3 0-1.63-.19-.21-.12-.39-.3-.51-.51-.19-.32-.19-.76-.19-1.63V8.39c0-.87 0-1.3.19-1.63.12-.21.3-.39.51-.51.32-.19.76-.19 1.63-.19s1.3 0 1.63.19c.21.12.39.3.51.51.19.32.19.76.19 1.63v5.58c0 .87 0 1.3-.19 1.63-.12.21-.3.39-.51.51-.32.19-.76.19-1.63.19" /></svg>;


      export const AlignBottomSolidIcon = createIcon("AlignBottomSolidIcon", SVGComponent, {
  "fileName": "abs-align-bottom-solid.svg",
  "presentationName": "align-bottom",
  "style": "solid",
  "category": "interface"
});