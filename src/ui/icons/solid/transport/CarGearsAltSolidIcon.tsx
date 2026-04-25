import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2.02c-7.83 0-9.98 2.14-9.98 9.98s2.15 9.98 9.98 9.98 9.98-2.14 9.98-9.98S19.83 2.02 12 2.02m4.75 7.01c0 .44 0 .81-.02 1.12s-.07.61-.19.9c-.28.68-.81 1.21-1.49 1.49-.29.12-.59.17-.9.19s-.68.02-1.13.02h-.27V15c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25h-2.5V15c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v2.25h2.5V9c0-.41.34-.75.75-.75s.75.34.75.75v2.25H13c.48 0 .8 0 1.04-.02.24-.01.36-.04.44-.07.31-.13.55-.38.67-.68.04-.08.07-.2.08-.44.02-.24.02-.56.02-1.04 0-.41.34-.75.75-.75s.75.34.75.75z" /></svg>;


      export const CarGearsAltSolidIcon = createIcon("CarGearsAltSolidIcon", SVGComponent, {
  "fileName": "abs-car-gears-alt-solid.svg",
  "presentationName": "car-gears-alt",
  "style": "solid",
  "category": "transport"
});