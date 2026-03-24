import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 17.99 20" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12.59 14.9c-.28.29-.28.75 0 1.03.14.14.33.21.52.21s.38-.07.52-.22l3.38-3.4c.39-.4.39-1.05 0-1.44l-3.38-3.4a.72.72 0 0 0-1.03 0c-.29.28-.29.75 0 1.03L14.87 11s0 .07-.03.07h-7.1c-.4 0-.73.33-.73.73s.33.73.73.73h7.1s.06.04.03.07l-2.27 2.29Z" /><path d="M17.98 6.11v-.02c-.05-.27-.1-.54-.18-.78-.58-2.07-1.95-3.11-4.36-3.38C13.19.01 11.74 0 10.93 0H7.2c-.81 0-2.25 0-2.51 1.93C1.38 2.3 0 4.14 0 8.14v5.58C0 17.6 1.05 20 6.28 20h5.58c2.54 0 4.08-.57 5-1.59.2-.2.36-.44.5-.69.04-.08.05-.16.05-.23a.63.63 0 0 0-.09-.33.65.65 0 0 0-.3-.29.695.695 0 0 0-.92.29s0 .02-.02.03c-.65.99-1.89 1.42-4.22 1.42H6.28c-4.2 0-4.89-1.44-4.89-4.89V8.14c0-3.58 1.12-4.56 3.33-4.81.3 1.78 1.7 1.79 2.49 1.79h3.73c1.91 0 2.4-.94 2.52-1.79 1.59.2 2.61.77 3.04 2.45l.12.56c.02.12.08.22.15.31.16.2.41.28.67.23A.706.706 0 0 0 18 6.2v-.09Zm-7.04-2.39H7.21c-.92 0-1.16 0-1.16-1.16S6.29 1.4 7.21 1.4h3.73c.92 0 1.16 0 1.16 1.16 0 .93 0 1.16-1.16 1.16" /></g></svg>;


      export const ClipboardPasteOutlineIcon = createIcon("ClipboardPasteOutlineIcon", SVGComponent, {
  "fileName": "abs-clipboard-paste.svg",
  "presentationName": "clipboard-paste",
  "style": "outline",
  "category": "documents"
});