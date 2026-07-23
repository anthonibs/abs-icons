import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m20.12 6.06-3.59-3.59c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l2.72 2.72H10c-.41 0-.75.34-.75.75s.34.75.75.75h8.19l-2.72 2.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.59-3.59c.52-.52.52-1.36 0-1.88M13 16.25l-7.22.03 2.75-2.75c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l-3.59 3.59c-.52.52-.52 1.36 0 1.88l3.59 3.59c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.69-2.69 7.16-.03c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></svg>;


      export const SwitchHOutlineIcon = createIcon("SwitchHOutlineIcon", SVGComponent, {
  "fileName": "abs-switch-h.svg",
  "presentationName": "switch-h",
  "style": "outline",
  "category": "arrows",
  "isNew": true
});