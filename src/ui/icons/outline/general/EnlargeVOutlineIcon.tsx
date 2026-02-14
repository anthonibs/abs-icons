import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.66 20.17c-.34.35-.91.35-1.26.01l-3.58-3.53c-.18-.17-.26-.4-.27-.63s.08-.46.26-.63c.34-.35.91-.35 1.26-.01l2.54 2.5c.23.22.59.22.81 0l2.5-2.54c.34-.35.91-.35 1.26-.01s.35.91.01 1.26zM11.37 3.83c.35-.35.91-.35 1.26 0l3.56 3.56a.894.894 0 0 1 0 1.26c-.35.35-.91.35-1.26 0l-2.52-2.52a.58.58 0 0 0-.81 0L9.08 8.65c-.35.35-.91.35-1.26 0a.887.887 0 0 1 0-1.26l3.56-3.56Z" /></svg>;


      export const EnlargeVOutlineIcon = createIcon("EnlargeVOutlineIcon", SVGComponent, {
  "fileName": "abs-enlarge-v.svg",
  "presentationName": "enlarge-v",
  "style": "outline",
  "category": "general"
});