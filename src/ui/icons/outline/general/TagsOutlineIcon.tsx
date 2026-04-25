import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M10.97 19.77c-.82 0-1.65-.31-2.27-.92l-5.87-5.73A2.74 2.74 0 0 1 2 11.16V6.98c0-1.52 1.26-2.76 2.8-2.76h4.29c.75 0 1.45.28 1.98.8l5.87 5.73a3.14 3.14 0 0 1 0 4.5l-3.69 3.6c-.63.61-1.45.92-2.27.92ZM4.8 5.73c-.72 0-1.3.56-1.3 1.26v4.18c0 .33.13.65.38.88l5.87 5.73c.68.66 1.78.66 2.45 0l3.69-3.6c.32-.31.5-.73.5-1.17s-.18-.86-.5-1.17l-5.87-5.73c-.24-.24-.58-.37-.93-.37H4.8Z" /><path d="M18.16 18.77a.754.754 0 0 1-.53-1.29l1.64-1.6c.79-.77 1.22-1.79 1.22-2.88s-.43-2.11-1.22-2.88l-4.72-4.61c-.3-.29-.3-.76-.01-1.06s.77-.3 1.06-.01l4.72 4.61C21.4 10.11 22 11.51 22 13s-.59 2.9-1.68 3.96l-1.64 1.6a.75.75 0 0 1-.52.21M6.86 9.74h-.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.33.75-.74.75" /></g></svg>;


      export const TagsOutlineIcon = createIcon("TagsOutlineIcon", SVGComponent, {
  "fileName": "abs-tags.svg",
  "presentationName": "tags",
  "style": "outline",
  "category": "general"
});