import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M20.02 2c-.39 0-.7.31-.7.7v18.6c0 .39.31.7.7.7s.7-.31.7-.7V2.7c0-.39-.31-.7-.7-.7" /><path d="M16.3 7.81c0-.87 0-1.3-.19-1.63-.12-.21-.3-.39-.51-.51-.32-.19-.76-.19-1.63-.19H5.6c-.87 0-1.3 0-1.63.19-.21.12-.39.3-.51.51-.19.32-.19.76-.19 1.63s0 1.3.19 1.63c.12.21.3.39.51.51.32.19.76.19 1.63.19h8.37c.87 0 1.3 0 1.63-.19.21-.12.39-.3.51-.51.19-.32.19-.76.19-1.63m0 8.38c0-.87 0-1.3-.19-1.63-.12-.21-.3-.39-.51-.51-.32-.19-.76-.19-1.63-.19H8.39c-.87 0-1.3 0-1.63.19-.21.12-.39.3-.51.51-.19.32-.19.76-.19 1.63s0 1.3.19 1.63c.12.21.3.39.51.51.32.19.76.19 1.63.19h5.58c.87 0 1.3 0 1.63-.19.21-.12.39-.3.51-.51.19-.32.19-.76.19-1.63" /></svg>;


      export const AlignRightSolidIcon = createIcon("AlignRightSolidIcon", SVGComponent, {
  "fileName": "abs-align-right-solid.svg",
  "presentationName": "align-right",
  "style": "solid",
  "category": "interface"
});