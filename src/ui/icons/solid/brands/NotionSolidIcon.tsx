import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M5.72 5.51c.62.51.86.47 2.02.39l11.01-.66c.23 0 .04-.23-.04-.27l-1.83-1.32c-.35-.27-.82-.58-1.71-.51l-10.66.78c-.39.04-.47.23-.31.39l1.52 1.21Zm.66 2.57v11.59c0 .62.31.86 1.01.82l12.1-.7c.7-.04.78-.47.78-.97V7.29c0-.51-.19-.78-.62-.74L7 7.29c-.47.04-.62.27-.62.78Zm11.95.62c.08.35 0 .7-.35.74l-.58.12v8.11c0 .29-.18.55-.45.66-.33.14-.64.21-.91.21-.62 0-.78-.19-1.25-.78l-3.52-5.53c-.08-.13-.29-.07-.29.08v5.25l1.21.27s0 .7-.97.7l-2.68.16c-.08-.16 0-.54.27-.62l.7-.19v-7.66l-.97-.08c-.08-.35.12-.86.66-.89l2.53-.17c.22-.01.42.09.54.27l3.78 5.77V9.75l-1.01-.12c-.08-.43.23-.74.62-.78l2.69-.16ZM3.61 2.86l11.09-.82c1.36-.12 1.71-.04 2.57.58l3.54 2.49c.58.43.78.54.78 1.01v13.65c0 .86-.31 1.36-1.4 1.44l-12.88.78c-.82.04-1.21-.08-1.64-.62l-2.61-3.38c-.47-.62-.66-1.09-.66-1.63V4.22c0-.7.31-1.28 1.21-1.36" /></svg>;


      export const NotionSolidIcon = createIcon("NotionSolidIcon", SVGComponent, {
  "fileName": "abs-notion-solid.svg",
  "presentationName": "notion",
  "style": "solid",
  "category": "brands"
});