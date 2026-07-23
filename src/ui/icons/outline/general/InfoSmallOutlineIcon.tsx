import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.01 8.38c-.41 0-.76-.34-.76-.75s.33-.75.74-.75H12c.41 0 .75.34.75.75s-.34.75-.75.75Zm1.4 8.74H12c-.41 0-.75-.34-.75-.75v-4.25h-.66c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H12c.41 0 .75.34.75.75v4.25h.66c.41 0 .75.34.75.75s-.34.75-.75.75" /></svg>;


      export const InfoSmallOutlineIcon = createIcon("InfoSmallOutlineIcon", SVGComponent, {
  "fileName": "abs-info-small.svg",
  "presentationName": "info-small",
  "style": "outline",
  "category": "general",
  "isNew": true
});