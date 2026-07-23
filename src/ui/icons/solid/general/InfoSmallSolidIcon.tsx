import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12.01 9C11.46 9 11 8.55 11 8s.44-1 .99-1H12c.55 0 1 .45 1 1s-.45 1-1 1Zm1.28 8H12c-.55 0-1-.45-1-1v-3.57h-.29c-.55 0-1-.45-1-1s.45-1 1-1H12c.55 0 1 .45 1 1V15h.29c.55 0 1 .45 1 1s-.45 1-1 1" /></svg>;


      export const InfoSmallSolidIcon = createIcon("InfoSmallSolidIcon", SVGComponent, {
  "fileName": "abs-info-small-solid.svg",
  "presentationName": "info-small",
  "style": "solid",
  "category": "general",
  "isNew": true
});