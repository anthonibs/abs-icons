import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M4.73 12c-.76 0-1.4-.27-1.93-.8S2 10.03 2 9.27s.27-1.4.8-1.93 1.17-.8 1.93-.8 1.4.27 1.93.8.8 1.17.8 1.93-.27 1.4-.8 1.93-1.17.8-1.93.8m-1.82 4.55c0-.5.41-.91.91-.91h16.36c.5 0 .91.41.91.91s-.41.91-.91.91H3.82c-.5 0-.91-.41-.91-.91m7.16-5.34c-.53-.53-.8-1.17-.8-1.93s.27-1.4.8-1.93 1.17-.8 1.93-.8 1.4.27 1.93.8.8 1.17.8 1.93-.27 1.4-.8 1.93-1.17.8-1.93.8-1.4-.27-1.93-.8m7.27 0c-.53-.53-.8-1.17-.8-1.93s.27-1.4.8-1.93 1.17-.8 1.93-.8 1.4.27 1.93.8.8 1.17.8 1.93-.27 1.4-.8 1.93-1.17.8-1.93.8-1.4-.27-1.93-.8" /></svg>;


      export const PasswordAltOutlineIcon = createIcon("PasswordAltOutlineIcon", SVGComponent, {
  "fileName": "abs-password-alt.svg",
  "presentationName": "password-alt",
  "style": "outline",
  "category": "security"
});