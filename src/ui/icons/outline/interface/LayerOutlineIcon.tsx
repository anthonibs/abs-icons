import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 19c-.89 0-1.78-.25-2.55-.74l-6.2-3.95a2.74 2.74 0 0 1-1.21-1.72 2.74 2.74 0 0 1 1.2-2.91l6.2-3.95a4.75 4.75 0 0 1 5.1 0l6.2 3.95a2.75 2.75 0 0 1 .84 3.8c-.22.34-.51.63-.85.84l-6.2 3.95c-.77.49-1.66.74-2.55.74Zm0-12.51c-.61 0-1.21.17-1.75.51l-6.2 3.95a1.25 1.25 0 0 0-.55 1.32c.07.33.27.6.55.78l6.2 3.95c1.06.68 2.43.68 3.49 0l6.2-3.95a1.252 1.252 0 0 0 0-2.11l-6.2-3.95a3.24 3.24 0 0 0-1.75-.51Z" /></svg>;


      export const LayerOutlineIcon = createIcon("LayerOutlineIcon", SVGComponent, {
  "fileName": "abs-layer.svg",
  "presentationName": "layer",
  "style": "outline",
  "category": "interface"
});