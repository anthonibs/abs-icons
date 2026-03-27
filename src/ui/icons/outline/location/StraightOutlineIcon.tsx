import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M11.25 19.58V6.53c0-.13-.16-.19-.25-.1L9.91 7.51a.73.73 0 0 1-1.04 0 .74.74 0 0 1 0-1.05l2.53-2.53c.33-.33.87-.33 1.2 0l2.53 2.53c.29.29.29.76 0 1.05a.73.73 0 0 1-1.04 0L13 6.43c-.09-.09-.25-.03-.25.1v13.06c0 .41-.33.74-.74.74h-.02c-.41 0-.74-.33-.74-.74Z" /></svg>;


      export const StraightOutlineIcon = createIcon("StraightOutlineIcon", SVGComponent, {
  "fileName": "abs-straight.svg",
  "presentationName": "straight",
  "style": "outline",
  "category": "location"
});