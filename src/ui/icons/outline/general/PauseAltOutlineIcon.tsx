import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M16.37 3C14.5 3 13 4.51 13 6.37v11.25c0 1.87 1.51 3.37 3.37 3.37s3.38-1.51 3.38-3.37V6.37C19.75 4.5 18.23 3 16.37 3M18 17.63c-.04.86-.71 1.53-1.55 1.56h-.08c-.86 0-1.58-.68-1.62-1.55V6.37c0-.9.73-1.62 1.62-1.62S18 5.47 18 6.37v11.25ZM7.63 3C5.76 3 4.25 4.51 4.25 6.37v11.25c0 1.87 1.52 3.37 3.38 3.37S11 19.48 11 17.62V6.37C11 4.5 9.49 3 7.63 3m1.62 14.63c-.04.86-.7 1.53-1.55 1.56h-.08c-.4 0-.79-.15-1.09-.42-.33-.3-.51-.69-.53-1.13V6.37c0-.9.73-1.62 1.63-1.62s1.62.72 1.62 1.62v11.25Z" /></svg>;


      export const PauseAltOutlineIcon = createIcon("PauseAltOutlineIcon", SVGComponent, {
  "fileName": "abs-pause-alt.svg",
  "presentationName": "pause-alt",
  "style": "outline",
  "category": "general"
});