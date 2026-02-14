import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.89 20.34H8.11c-1.66 0-2.5 0-3.24-.35-.67-.31-1.21-.8-1.55-1.42-.4-.71-.4-1.54-.4-3.03V8.45c0-1.5 0-2.32.4-3.03.34-.62.88-1.11 1.55-1.42.74-.35 1.58-.35 3.24-.35h7.78c1.66 0 2.5 0 3.24.35.67.31 1.21.8 1.55 1.42.4.71.4 1.54.4 3.03v7.09c0 1.5 0 2.32-.4 3.03-.34.62-.88 1.11-1.55 1.42-.74.35-1.58.35-3.24.35M8.11 5.15c-1.4 0-2.17 0-2.61.21-.38.18-.69.46-.88.79-.21.37-.21 1.06-.21 2.3v7.09c0 1.25 0 1.93.21 2.3.19.34.5.62.88.79.44.21 1.21.21 2.61.21h7.78c1.4 0 2.17 0 2.61-.21.38-.18.69-.46.88-.79.21-.37.21-1.06.21-2.3V8.45c0-1.25 0-1.93-.21-2.3-.19-.34-.5-.62-.88-.79-.44-.21-1.21-.21-2.61-.21zm-.74 10.12a.71.71 0 0 1-.55-.25.746.746 0 0 1 .05-1.06l2.17-1.98L6.87 10a.746.746 0 0 1-.05-1.06c.28-.31.75-.33 1.06-.05l2.38 2.17a1.25 1.25 0 0 1-.01 1.84l-2.38 2.17c-.14.13-.32.2-.5.2m9.26 0h-3.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.7c.41 0 .75.34.75.75s-.34.75-.75.75" /></svg>;


      export const TerminalSquareOutlineIcon = createIcon("TerminalSquareOutlineIcon", SVGComponent, {
  "fileName": "abs-terminal-square.svg",
  "presentationName": "terminal-square",
  "style": "outline",
  "category": "interface"
});