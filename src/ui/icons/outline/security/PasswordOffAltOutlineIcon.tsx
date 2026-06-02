import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M4.73 12.27c-.76 0-1.4-.27-1.93-.8S2 10.3 2 9.54s.27-1.4.8-1.93 1.17-.8 1.93-.8 1.4.27 1.93.8.8 1.17.8 1.93-.27 1.4-.8 1.93-1.17.8-1.93.8m12.61-.8c-.53-.53-.8-1.17-.8-1.93s.27-1.4.8-1.93 1.17-.8 1.93-.8 1.4.27 1.93.8.8 1.17.8 1.93-.27 1.4-.8 1.93-1.17.8-1.93.8-1.4-.27-1.93-.8m-3.07-.43L10.5 7.27c.21-.15.45-.27.7-.34s.52-.11.8-.11c.76 0 1.4.27 1.93.8s.8 1.17.8 1.93c0 .27-.04.54-.11.8s-.19.49-.34.7Zm4.18 9.32-2.5-2.5a.47.47 0 0 0-.33-.14H3.81c-.5 0-.9-.4-.9-.9v-.02c0-.5.4-.9.9-.9h9.91c.1 0 .16-.13.08-.2L3 4.91a.9.9 0 0 1 0-1.27.9.9 0 0 1 1.27 0l15.45 15.45a.9.9 0 0 1 0 1.27.9.9 0 0 1-1.27 0" /></svg>;


      export const PasswordOffAltOutlineIcon = createIcon("PasswordOffAltOutlineIcon", SVGComponent, {
  "fileName": "abs-password-off-alt.svg",
  "presentationName": "password-off-alt",
  "style": "outline",
  "category": "security"
});