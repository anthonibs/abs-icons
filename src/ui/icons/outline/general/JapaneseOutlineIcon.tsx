import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.27 11.65c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.52v-.04l3.05-3.08c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L12 8.73 9.26 5.97a.745.745 0 0 0-1.06 0c-.29.29-.3.77 0 1.06l3.05 3.08v.04H8.73c-.41 0-.75.34-.75.75s.34.75.75.75h2.52v2.9H8.73c-.41 0-.75.34-.75.75s.34.75.75.75h2.52v1.45c0 .41.34.75.75.75s.75-.34.75-.75v-1.45h2.52c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.52v-2.9z" /></svg>;


      export const JapaneseOutlineIcon = createIcon("JapaneseOutlineIcon", SVGComponent, {
  "fileName": "abs-japanese.svg",
  "presentationName": "japanese",
  "style": "outline",
  "category": "general",
  "isNew": true
});