import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M3.55 11.55c.27-1.24.53-2.41-.48-4.21-.21-.38-.15-.86.13-1.18l2.3-2.63c.26-.3.67-.42 1.06-.32.98.26 2.98.54 4.89-.72a1 1 0 0 1 1.1 0c1.91 1.25 3.91.97 4.89.72.39-.1.79.02 1.06.32l2.3 2.63c.29.33.35.8.13 1.18-1 1.79-.75 2.97-.48 4.21.28 1.31.59 2.69-.55 4.95-1.08 2.15-2.93 2.91-4.67 3.61-.94.38-1.85.75-2.57 1.32-.4.31-.94.31-1.34 0-.72-.57-1.63-.94-2.57-1.32-1.73-.7-3.59-1.45-4.67-3.61-1.13-2.27-.83-3.65-.55-4.95m11.06.64 1.35-1.32c.19-.19.09-.51-.18-.55l-1.87-.27c-.34-.05-.64-.26-.79-.57l-.84-1.69c-.12-.24-.46-.24-.57 0l-.84 1.69c-.15.31-.45.52-.79.57l-1.87.27c-.26.04-.37.36-.18.55l1.35 1.32c.25.24.36.59.3.93l-.32 1.86c-.04.26.23.46.47.34l1.67-.88c.31-.16.67-.16.98 0l1.67.88c.24.12.51-.08.47-.34l-.32-1.86c-.06-.34.05-.69.3-.93Z" /></svg>;


      export const PoliceBadgeSolidIcon = createIcon("PoliceBadgeSolidIcon", SVGComponent, {
  "fileName": "abs-police-badge-solid.svg",
  "presentationName": "police-badge",
  "style": "solid",
  "category": "general"
});