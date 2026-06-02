import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M6.5 16.5c-1.25 0-2.31-.44-3.19-1.31S2 13.25 2 12s.44-2.31 1.31-3.19S5.25 7.5 6.5 7.5s2.31.44 3.19 1.31S11 10.75 11 12c0 .45-.07.88-.2 1.3s-.32.82-.55 1.2h3.5c-.23-.38-.42-.78-.55-1.2s-.2-.85-.2-1.3c0-1.25.44-2.31 1.31-3.19S16.25 7.5 17.5 7.5s2.31.44 3.19 1.31S22 10.75 22 12s-.44 2.31-1.31 3.19-1.94 1.31-3.19 1.31zm0-2c.7 0 1.29-.24 1.78-.73s.73-1.08.73-1.78-.24-1.29-.73-1.78-1.08-.73-1.78-.73-1.29.24-1.78.73-.73 1.08-.73 1.78.24 1.29.73 1.78 1.08.73 1.78.73m11 0c.7 0 1.29-.24 1.78-.73s.73-1.08.73-1.78-.24-1.29-.73-1.78-1.08-.73-1.78-.73-1.29.24-1.78.73-.73 1.08-.73 1.78.24 1.29.73 1.78 1.08.73 1.78.73" /></svg>;


      export const VoicemailOutlineIcon = createIcon("VoicemailOutlineIcon", SVGComponent, {
  "fileName": "abs-voicemail.svg",
  "presentationName": "voicemail",
  "style": "outline",
  "category": "general"
});