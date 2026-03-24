import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.87 3.06C18.9 2 17.51 2 14.97 2H9.88c-2.53 0-3.93 0-4.9 1.06-.85.93-.93 2.18-.94 4.49h-.1c-.41 0-.75.34-.75.75s.34.75.75.75h.1v2.2h-.1c-.41 0-.75.34-.75.75s.34.75.75.75h.1v2.2h-.1c-.41 0-.75.34-.75.75s.34.75.75.75h.1c0 2.31.09 3.56.94 4.49s2.04 1.04 4.04 1.05h5.93c2.53 0 3.93 0 4.9-1.06.94-1.03.94-2.44.94-5.24v-7.4c0-2.81 0-4.22-.94-5.24ZM5.55 16.45h.1c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.1v-2.2h.1c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.1v-2.2h.1c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.1c0-1.87.06-2.95.55-3.48.37-.4.99-.52 2.19-.55v16.97c-1.21-.04-1.83-.15-2.19-.55-.49-.53-.54-1.61-.55-3.48Zm13.77-.75c0 2.34 0 3.63-.55 4.23-.5.55-1.47.57-3.79.57H9.79v-17h5.19c2.33 0 3.29.02 3.79.57.55.6.55 1.89.55 4.23z" /><path d="M16.24 6.16H12c-.41 0-.75.34-.75.75s.34.75.75.75h4.24c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 3.24H12c-.41 0-.75.34-.75.75s.34.75.75.75h4.24c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></svg>;


      export const BookNotesOutlineIcon = createIcon("BookNotesOutlineIcon", SVGComponent, {
  "fileName": "abs-book-notes.svg",
  "presentationName": "book-notes",
  "style": "outline",
  "category": "documents"
});