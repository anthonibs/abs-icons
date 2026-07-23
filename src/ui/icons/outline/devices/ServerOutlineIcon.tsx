import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M19.2 10.95H4.8c-1.41 0-2.55-1.14-2.55-2.55V4.8c0-1.41 1.14-2.55 2.55-2.55h14.4c1.41 0 2.55 1.14 2.55 2.55v3.6c0 1.41-1.14 2.55-2.55 2.55M4.8 3.75c-.58 0-1.05.47-1.05 1.05v3.6c0 .58.47 1.05 1.05 1.05h14.4c.58 0 1.05-.47 1.05-1.05V4.8c0-.58-.47-1.05-1.05-1.05zm14.4 18H4.8c-1.41 0-2.55-1.14-2.55-2.55v-3.6c0-1.41 1.14-2.55 2.55-2.55h14.4c1.41 0 2.55 1.14 2.55 2.55v3.6c0 1.41-1.14 2.55-2.55 2.55m-14.4-7.2c-.58 0-1.05.47-1.05 1.05v3.6c0 .58.47 1.05 1.05 1.05h14.4c.58 0 1.05-.47 1.05-1.05v-3.6c0-.58-.47-1.05-1.05-1.05z" /><path d="M6.61 7.35a.749.749 0 1 1 0-1.5c.41 0 .75.34.75.75s-.34.75-.75.75m0 10.8a.749.749 0 1 1 0-1.5c.41 0 .75.34.75.75s-.34.75-.75.75" /></g></svg>;


      export const ServerOutlineIcon = createIcon("ServerOutlineIcon", SVGComponent, {
  "fileName": "abs-server.svg",
  "presentationName": "server",
  "style": "outline",
  "category": "devices",
  "isNew": true
});