import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2c5.52 0 10 4.48 10 10s-4.47 10-9.99 10.01c-5.4 0-9.83-4.28-10-9.68v-.6A9.986 9.986 0 0 1 12 2m0 9h-1.12c-.55.07-.94.57-.87 1.12.05.46.42.82.87.87H11v3.12c.06.46.42.82.88.88h1.24c.46-.06.82-.42.88-.88v-.24c-.05-.42-.35-.76-.76-.86l-.11-.02h-.12v-3.12c-.06-.46-.42-.82-.88-.88h-.12Zm.01-3h-.13c-.55.07-.94.57-.87 1.12.05.46.42.82.87.87h.25c.55-.07.94-.56.87-1.11a.99.99 0 0 0-.87-.87h-.12Z" /></svg>;


      export const InfoCircleSolidIcon = createIcon("InfoCircleSolidIcon", SVGComponent, {
  "fileName": "abs-info-circle-solid.svg",
  "presentationName": "info-circle",
  "style": "solid",
  "category": "general",
  "isNew": true
});