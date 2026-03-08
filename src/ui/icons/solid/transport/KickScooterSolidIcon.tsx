import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M16.31 5.27c-.22-.02-.51-.02-.95-.02h-1.14c-.39 0-.7-.31-.7-.7s.31-.7.7-.7h1.17c.4 0 .75 0 1.03.02.3.02.58.07.85.19.43.19.79.49 1.05.88.17.25.26.52.33.81.07.27.12.61.19 1l.94 5.56c.03.2-.02.41-.16.57-.13.16-.33.25-.53.25-2.31 0-4.17 1.85-4.17 4.11 0 .39-.31.7-.7.7H7.81s-.07.02-.08.06a2.904 2.904 0 0 1-3.39 2.07c-1.16-.22-2.11-1.18-2.29-2.35a2.902 2.902 0 0 1 2.87-3.37c1.34 0 2.48.9 2.81 2.13 0 .04.04.06.08.06h5.69s.07-.03.08-.07c.34-2.39 2.23-4.29 4.62-4.67.04 0 .08-.05.07-.09l-.79-4.7c-.07-.43-.12-.71-.17-.92s-.1-.3-.14-.36c-.11-.16-.27-.3-.45-.38a1.3 1.3 0 0 0-.39-.08Zm-.09 12.49c-.35-2.05 1.46-3.76 3.5-3.33 1.13.24 2.04 1.17 2.23 2.31.35 2.05-1.46 3.76-3.5 3.33-1.13-.24-2.04-1.17-2.23-2.31" /></svg>;


      export const KickScooterSolidIcon = createIcon("KickScooterSolidIcon", SVGComponent, {
  "fileName": "abs-kick-scooter-solid.svg",
  "presentationName": "kick-scooter",
  "style": "solid",
  "category": "transport"
});