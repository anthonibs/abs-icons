import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M11.33 7.04 7.69 9.41c-.32.21-.32.68 0 .89l3.64 2.37c.32.21.32.68 0 .89l-4.04 2.63a.55.55 0 0 1-.58 0l-4.04-2.65a.533.533 0 0 1 0-.89l3.64-2.37c.32-.21.32-.68 0-.89L2.67 7.04a.533.533 0 0 1 0-.89L6.7 3.52c.18-.11.4-.11.58 0l4.04 2.63c.32.21.32.68 0 .89Zm-3.67 9.93 4.04-2.63c.18-.11.4-.11.58 0l4.04 2.63c.32.21.32.68 0 .89l-4.04 2.63a.55.55 0 0 1-.58 0l-4.04-2.63a.533.533 0 0 1 0-.89m5.03-4.32 3.65-2.37c.32-.21.32-.68 0-.89L12.7 7.04a.533.533 0 0 1 0-.89l4.01-2.62c.18-.11.4-.12.58 0l4.04 2.63c.32.21.32.68 0 .89l-3.64 2.37c-.32.21-.32.68 0 .89l3.64 2.37c.32.21.32.68 0 .89L17.3 16.2a.53.53 0 0 1-.58 0l-4.02-2.65a.533.533 0 0 1 0-.89Z" /></svg>;


      export const DropboxOutlineIcon = createIcon("DropboxOutlineIcon", SVGComponent, {
  "fileName": "abs-dropbox.svg",
  "presentationName": "dropbox",
  "style": "outline",
  "category": "brands"
});