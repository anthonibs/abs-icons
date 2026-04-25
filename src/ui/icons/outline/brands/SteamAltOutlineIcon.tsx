import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M11.97 2c-5.2 0-9.57 4.04-9.92 9.18l5.33 2.22c.45-.32 1-.45 1.57-.45h.13l2.34-3.5v-.03c0-2.09 1.67-3.76 3.76-3.76s3.79 1.67 3.79 3.76-1.67 3.76-3.76 3.76h-.1l-3.4 2.44v.13c0 1.54-1.25 2.86-2.86 2.86-1.35 0-2.54-1-2.76-2.25l-3.72-1.64c1.19 4.17 5.07 7.29 9.6 7.29 5.49-.03 9.98-4.49 9.98-10.02S17.46 2 11.97 2" /><path d="m8.28 17.15-1.22-.48c.22.45.58.87 1.09 1.03 1.03.45 2.31-.03 2.76-1.12.22-.55.22-1.09 0-1.64s-.64-.96-1.12-1.19c-.51-.22-1.03-.19-1.54-.03l1.25.55c.77.35 1.19 1.25.87 2.02-.35.8-1.25 1.16-2.09.87Zm9.5-7.73c0-1.35-1.12-2.54-2.54-2.54S12.7 8 12.7 9.42s1.19 2.54 2.54 2.54 2.54-1.16 2.54-2.54m-4.37 0c0-1.03.87-1.86 1.86-1.86s1.86.87 1.86 1.86-.87 1.86-1.86 1.86c-1.03.03-1.86-.83-1.86-1.86" /></g></svg>;


      export const SteamAltOutlineIcon = createIcon("SteamAltOutlineIcon", SVGComponent, {
  "fileName": "abs-steam-alt.svg",
  "presentationName": "steam-alt",
  "style": "outline",
  "category": "brands"
});