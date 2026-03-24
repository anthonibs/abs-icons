import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M17.63 10.7h.03c.4 0 .73-.32.75-.72.06-1.74-.98-3.03-2.59-3.19-.4-.03-.78.26-.82.67s.26.78.67.82c.81.08 1.28.7 1.24 1.65-.01.41.31.76.72.77" /><path fillRule="evenodd" d="M2.16 12.64c1.79 5.58 7.79 8.6 9.84 8.6s8.08-3.01 9.84-8.6c1.15-3.59-.12-8.28-4.19-9.59-1.73-.56-4.11-.35-5.67 1.24-1.45-1.39-3.61-1.9-5.64-1.24-4.06 1.31-5.33 5.99-4.18 9.59m9.84 7.1c-1.19 0-6.77-2.43-8.41-7.56-.93-2.91.03-6.68 3.21-7.7 1.39-.45 3.42-.2 4.59 1.42.14.2.38.3.62.31.25 0 .47-.13.61-.34 1.07-1.62 3.11-1.85 4.56-1.39 3.18 1.03 4.15 4.8 3.22 7.71-1.61 5.12-7.22 7.55-8.41 7.55Z" /></g></svg>;


      export const HeartOutlineIcon = createIcon("HeartOutlineIcon", SVGComponent, {
  "fileName": "abs-heart.svg",
  "presentationName": "heart",
  "style": "outline",
  "category": "general"
});