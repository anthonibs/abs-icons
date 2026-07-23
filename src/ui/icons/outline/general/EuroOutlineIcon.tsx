import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.26 21q-2.955 0-5.25-1.68c-2.295-1.68-2.57-2.49-3.21-4.2a.2.2 0 0 0-.17-.12H4.26c-.55 0-1-.45-1-1s.45-1 1-1h2.05q-.075-.6-.06-1.11c.015-.51.03-.64.06-.89H4.26c-.55 0-1-.45-1-1s.45-1 1-1h2.37c.08 0 .15-.05.17-.12q.96-2.565 3.21-4.2C12.26 3.045 13.29 3 15.26 3c1.15 0 2.24.2 3.26.61.64.26 1.24.57 1.79.95a1 1 0 0 1 .13 1.54c-.33.33-.85.38-1.24.12a7 7 0 0 0-3.95-1.21c-1.42 0-2.68.37-3.8 1.11a7.2 7.2 0 0 0-2.4 2.63c-.06.11.03.25.16.25h5.04c.55 0 1 .45 1 1s-.45 1-1 1H8.32c-.07.45-.09.85-.08 1.19s.04.61.08.81h5.93c.55 0 1 .45 1 1s-.45 1-1 1H9.21c-.13 0-.22.14-.16.25.56 1.07 1.36 1.94 2.4 2.63 1.12.74 2.38 1.11 3.8 1.11q1.32 0 2.49-.45c.52-.2 1.01-.46 1.46-.76.39-.26.91-.21 1.24.12a1 1 0 0 1-.13 1.54c-.55.38-1.15.69-1.79.95-1.03.41-2.11.61-3.26.61" /></svg>;


      export const EuroOutlineIcon = createIcon("EuroOutlineIcon", SVGComponent, {
  "fileName": "abs-euro.svg",
  "presentationName": "euro",
  "style": "outline",
  "category": "general",
  "isNew": false
});