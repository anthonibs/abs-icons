import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17 20.8H7c-1.28 0-2.49-.5-3.39-1.41A4.76 4.76 0 0 1 2.2 16V8c0-1.28.5-2.49 1.41-3.39C4.52 3.7 5.72 3.2 7 3.2h3.39c.62 0 1.25.16 1.8.45.55.3 1.03.73 1.37 1.25l.52.76c.11.17.26.3.43.4s.37.14.56.14H17c1.28 0 2.49.5 3.39 1.41.91.91 1.41 2.11 1.41 3.39v5c0 1.28-.5 2.49-1.41 3.39-.89.89-2.13 1.41-3.39 1.41M7 4.8c-.85 0-1.66.33-2.26.94-.6.6-.94 1.42-.94 2.26v8c0 .84.34 1.67.94 2.26s1.41.94 2.26.94h10c.84 0 1.67-.34 2.26-.94s.94-1.41.94-2.26v-5c0-.85-.33-1.66-.94-2.26-.6-.6-1.41-.94-2.26-.94h-1.93c-.46 0-.92-.12-1.32-.33-.4-.22-.75-.53-1-.91l-.52-.77c-.2-.31-.48-.56-.8-.73s-.68-.26-1.04-.26z" /></svg>;


      export const FolderOutlineIcon = createIcon("FolderOutlineIcon", SVGComponent, {
  "fileName": "abs-folder.svg",
  "presentationName": "folder",
  "style": "outline",
  "category": "documents"
});