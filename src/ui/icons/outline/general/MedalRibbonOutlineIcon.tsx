import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M17.1 14.5s-.02-.03-.02-.04c1.29-1.22 2-3.02 2-5.31 0-4.43-2.65-7.08-7.08-7.08S4.92 4.72 4.92 9.15c0 2.29.71 4.09 2 5.31 0 .01-.02.02-.02.04l-.6 2.16c-.65 2.34-.98 3.51-.39 4.38.21.31.5.56.82.72.95.48 2.01-.07 4.14-1.15.53-.27.82-.42 1.02-.44h.22c.2.02.49.17 1.02.44 1.59.82 2.59 1.33 3.39 1.33.26 0 .51-.06.74-.17.33-.16.62-.42.83-.72.59-.87.26-2.04-.39-4.38l-.6-2.15ZM6.43 9.15c0-3.65 1.93-5.58 5.58-5.58s5.58 1.93 5.58 5.58-1.93 5.58-5.58 5.58-5.58-1.93-5.58-5.58m10.42 11.04c-.07.1-.15.17-.25.22-.27.14-1.54-.51-2.78-1.15-.69-.35-1.07-.55-1.54-.6-.18-.02-.36-.02-.53 0-.47.05-.85.24-1.55.6-1.23.63-2.5 1.29-2.78 1.14a.7.7 0 0 1-.25-.22c-.2-.29.17-1.61.59-3.14l.47-1.67c1.05.55 2.31.85 3.78.85s2.74-.3 3.78-.85l.47 1.68c.42 1.52.79 2.84.59 3.13Z" /></svg>;


      export const MedalRibbonOutlineIcon = createIcon("MedalRibbonOutlineIcon", SVGComponent, {
  "fileName": "abs-medal-ribbon.svg",
  "presentationName": "medal-ribbon",
  "style": "outline",
  "category": "general"
});