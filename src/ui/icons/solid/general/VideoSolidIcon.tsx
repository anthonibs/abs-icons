import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M21.34 7.22c-.67-.73-2.64.41-3.95 1.3-.21.14-.3.39-.25.63q.24 1.26.24 2.85c0 1.59-.08 1.98-.23 2.82-.05.25.06.5.27.64 1.03.7 2.47 1.55 3.34 1.55.25 0 .45-.07.58-.22.88-.93.88-8.63 0-9.58ZM8.99 4.99C3.83 4.99 2 6.83 2 12s1.83 7 6.99 7 6.97-1.83 6.97-7-1.82-7.01-6.97-7.01" /></svg>;


      export const VideoSolidIcon = createIcon("VideoSolidIcon", SVGComponent, {
  "fileName": "abs-video-solid.svg",
  "presentationName": "video",
  "style": "solid",
  "category": "general"
});