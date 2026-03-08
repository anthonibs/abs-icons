import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M2 16.44V5.29c0-1.1.89-1.99 1.98-1.92.98.06 2.13.18 3.02.41 1.05.28 2.3.87 3.28 1.39.31.16.63.28.97.34v15.18c-.3-.07-.6-.17-.88-.32-1-.53-2.29-1.15-3.37-1.44-.88-.23-2.02-.35-2.98-.41C2.91 18.45 2 17.55 2 16.44m3.18-7.87c-.4-.1-.81.14-.91.55-.1.4.14.81.54.91l4 1c.4.1.81-.14.91-.55.1-.4-.14-.81-.55-.91l-4-1Zm0 4c-.4-.1-.81.14-.91.55-.1.4.14.81.54.91l4 1c.4.1.81-.14.91-.55.1-.4-.14-.81-.55-.91l-4-1Zm7.57 8.12c.3-.07.6-.17.88-.32 1-.53 2.29-1.15 3.37-1.44.88-.23 2.02-.35 2.98-.41 1.11-.07 2.02-.97 2.02-2.08V5.23c0-1.07-.85-1.95-1.92-1.91-1.13.04-2.54.16-3.58.47-.91.27-1.96.82-2.83 1.32-.29.17-.6.29-.92.37V20.7Zm6.43-10.66c.4-.1.65-.51.55-.91s-.51-.65-.91-.55l-4 1c-.4.1-.65.51-.54.91.1.4.51.65.91.55l4-1Zm0 4c.4-.1.65-.51.55-.91s-.51-.65-.91-.55l-4 1c-.4.1-.65.51-.54.91.1.4.51.65.91.55l4-1Z" /></svg>;


      export const BookOpenTextSolidIcon = createIcon("BookOpenTextSolidIcon", SVGComponent, {
  "fileName": "abs-book-open-text-solid.svg",
  "presentationName": "book-open-text",
  "style": "solid",
  "category": "documents"
});