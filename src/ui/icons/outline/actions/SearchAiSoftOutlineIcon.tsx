import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m21.53 20.47-2.77-2.77c1.25-1.54 1.91-3.64 1.91-6.24 0-5.85-3.36-9.21-9.21-9.21s-9.21 3.36-9.21 9.21 3.36 9.21 9.21 9.21c2.6 0 4.7-.66 6.24-1.91l2.77 2.77c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06M3.75 11.46c0-4.97 2.74-7.71 7.71-7.71s7.71 2.74 7.71 7.71-2.74 7.71-7.71 7.71-7.71-2.74-7.71-7.71" /><path d="M11.39 8.88c-.19-.57-.72-.95-1.32-.95s-1.13.38-1.32.95l-1.72 5.11a.753.753 0 0 0 .71.99c.31 0 .61-.2.71-.51l.45-1.34h2.34l.45 1.34c.13.39.56.61.95.47.39-.13.6-.56.47-.95L11.4 8.88ZM9.4 11.63l.66-1.98.67 1.98zm5.79-3.69c-.41 0-.75.34-.75.75v5.55c0 .41.34.75.75.75s.75-.34.75-.75V8.69c0-.41-.34-.75-.75-.75" /></svg>;


      export const SearchAiSoftOutlineIcon = createIcon("SearchAiSoftOutlineIcon", SVGComponent, {
  "fileName": "abs-search-ai-soft.svg",
  "presentationName": "search-ai-soft",
  "style": "outline",
  "category": "actions",
  "isNew": true
});