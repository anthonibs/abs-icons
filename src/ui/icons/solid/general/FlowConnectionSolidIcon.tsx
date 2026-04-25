import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M13.8 5.33C13.8 3.49 15.3 2 17.15 2s3.35 1.49 3.35 3.33-1.5 3.34-3.35 3.34c-.93 0-1.78-.38-2.38-1l-4.64 3.16c.04.21.07.43.07.66 0 .44-.09.87-.25 1.26l5.08 3.34c.58-.47 1.32-.76 2.12-.76 1.85 0 3.35 1.5 3.35 3.34S19 22 17.15 22s-3.35-1.49-3.35-3.33c0-.49.1-.94.29-1.36L9.05 14c-.59.51-1.36.82-2.2.82a3.34 3.34 0 0 1-3.35-3.33 3.348 3.348 0 0 1 5.97-2.07l4.49-3.06c-.1-.33-.16-.67-.16-1.03" /></svg>;


      export const FlowConnectionSolidIcon = createIcon("FlowConnectionSolidIcon", SVGComponent, {
  "fileName": "abs-flow-connection-solid.svg",
  "presentationName": "flow-connection",
  "style": "solid",
  "category": "general"
});