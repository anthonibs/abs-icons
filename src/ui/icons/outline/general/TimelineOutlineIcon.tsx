import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M3 18c-.55 0-1.02-.2-1.41-.59S1 16.55 1 16s.2-1.02.59-1.41S2.45 14 3 14h.26c.08 0 .15.02.24.05L8.05 9.5A.7.7 0 0 1 8 9.26V9c0-.55.2-1.02.59-1.41S9.45 7 10 7s1.02.2 1.41.59S12 8.45 12 9c0 .03-.02.2-.05.5l2.55 2.55c.08-.03.16-.05.24-.05h.53c.08 0 .15.02.24.05l3.55-3.55a.7.7 0 0 1-.05-.24V8c0-.55.2-1.02.59-1.41S20.46 6 21.01 6s1.02.2 1.41.59.59.86.59 1.41-.2 1.02-.59 1.41-.86.59-1.41.59h-.26c-.08 0-.15-.02-.24-.05l-3.55 3.55c.03.08.05.16.05.24V14c0 .55-.2 1.02-.59 1.41s-.86.59-1.41.59-1.02-.2-1.41-.59-.59-.86-.59-1.41v-.26c0-.08.02-.15.05-.24l-2.55-2.55c-.08.03-.16.05-.24.05h-.26l-.5-.05-4.55 4.55c.03.08.05.16.05.24V16c0 .55-.2 1.02-.59 1.41s-.86.59-1.41.59Z" /></svg>;


      export const TimelineOutlineIcon = createIcon("TimelineOutlineIcon", SVGComponent, {
  "fileName": "abs-timeline.svg",
  "presentationName": "timeline",
  "style": "outline",
  "category": "general",
  "isNew": false
});