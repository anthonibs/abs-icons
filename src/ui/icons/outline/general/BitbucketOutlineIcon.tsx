import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M5.69 21c-.28 0-.52-.08-.7-.23s-.3-.37-.35-.65L2.02 3.9c-.03-.27.02-.48.15-.65S2.5 3 2.75 3h18.5c.27 0 .47.08.6.25s.18.38.13.65l-.73 4.28c-.05.28-.16.5-.34.65s-.4.23-.69.23H9.07c-.05 0-.13.1-.23.3l.88 5.35s.08.12.25.25H14c.07 0 .15-.08.25-.25l.63-3.88c.03-.23.12-.4.26-.51s.33-.16.56-.16h4.38c.27 0 .47.08.6.25s.18.38.15.63l-1.48 9.1c-.05.28-.17.5-.35.65s-.42.23-.7.23H5.69Z" /></svg>;


      export const BitbucketOutlineIcon = createIcon("BitbucketOutlineIcon", SVGComponent, {
  "fileName": "abs-bitbucket.svg",
  "presentationName": "bitbucket",
  "style": "outline",
  "category": "general",
  "isNew": false
});