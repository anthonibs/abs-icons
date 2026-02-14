import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M19.22 2h-3.95c-1.73 0-2.73 1-2.73 2.74v.96h-1.07v-.96C11.47 3 10.48 2 8.74 2H4.79C3.06 2 2.06 3 2.06 4.74v10.82c0 1.74.99 2.74 2.73 2.74h1.59v.71c0 1.9 1.08 2.99 2.98 2.99h5.37c1.88 0 2.97-1.09 2.97-2.99v-.71h1.53c1.73 0 2.73-1 2.73-2.74V4.74C21.96 3 20.97 2 19.23 2ZM4.79 16.8c-.91 0-1.23-.32-1.23-1.24V4.74c0-.91.32-1.24 1.23-1.24h3.95c.91 0 1.23.32 1.23 1.24v.96h-.61c-1.89 0-2.98 1.09-2.98 2.99v8.11zm11.4 2.21c0 1.08-.4 1.49-1.47 1.49h-1.97v-2.02c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.02h-1.9c-1.06 0-1.48-.42-1.48-1.49V8.69c0-1.07.41-1.49 1.48-1.49h5.37c1.07 0 1.47.4 1.47 1.49zm4.26-3.45c0 .91-.32 1.24-1.23 1.24h-1.53V8.69c0-1.9-1.08-2.99-2.97-2.99h-.68v-.96c0-.91.32-1.24 1.23-1.24h3.95c.91 0 1.23.32 1.23 1.24z" /><path d="M13.84 10.33h-3.68c-.41 0-.75.34-.75.75s.34.75.75.75h3.68c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 2.77h-3.68c-.41 0-.75.34-.75.75s.34.75.75.75h3.68c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></g></svg>;


      export const BuildingsStackOutlineIcon = createIcon("BuildingsStackOutlineIcon", SVGComponent, {
  "fileName": "abs-buildings-stack.svg",
  "presentationName": "buildings-stack",
  "style": "outline",
  "category": "general"
});