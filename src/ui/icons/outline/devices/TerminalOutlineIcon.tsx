import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.2 20.6H12c-.44 0-.8-.36-.8-.8s.36-.8.8-.8h9.2c.44 0 .8.36.8.8s-.36.8-.8.8M2.8 18.37A.794.794 0 0 1 2.25 17l6.16-5.97c.05-.05.06-.11.06-.15s-.01-.1-.06-.15L2.24 4.77a.794.794 0 0 1-.02-1.13c.31-.32.81-.33 1.13-.02l6.16 5.97c.35.34.55.8.55 1.29s-.19.95-.55 1.29l-6.16 5.97c-.16.15-.36.23-.56.23Z" /></svg>;


      export const TerminalOutlineIcon = createIcon("TerminalOutlineIcon", SVGComponent, {
  "fileName": "abs-terminal.svg",
  "presentationName": "terminal",
  "style": "outline",
  "category": "devices"
});