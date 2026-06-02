import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="m9.89 15.08 1.94-1.46c.1-.08.24-.07.34 0l1.89 1.44c.22.17.52-.04.44-.3l-.74-2.38c-.03-.11 0-.23.09-.3l2.01-1.58c.21-.16.09-.5-.17-.5H13.3c-.12 0-.23-.08-.27-.19l-.77-2.38c-.08-.26-.45-.26-.53 0l-.77 2.38a.27.27 0 0 1-.27.19h-2.4c-.26 0-.38.33-.17.5l1.98 1.58c.09.07.13.19.09.3l-.74 2.4c-.08.26.22.47.43.31Z" /><path d="M19.22 4.52 14.1 2.41a5.57 5.57 0 0 0-4.17 0L4.81 4.52c-.98.4-1.75 1.54-1.75 2.6v4.06c0 4.88 3.48 9.39 8.27 10.73.44.12.9.12 1.34 0 4.79-1.33 8.27-5.84 8.27-10.73V7.12c0-1.06-.76-2.2-1.73-2.6zm.23 6.66c0 4.22-3.02 8.13-7.17 9.28a1 1 0 0 1-.54 0c-4.16-1.16-7.17-5.06-7.17-9.28V7.12c0-.46.39-1.04.81-1.21L10.5 3.8c.97-.4 2.05-.4 3.02 0l5.12 2.11c.42.17.81.76.81 1.21z" /></g></svg>;


      export const LocalPoliceOutlineIcon = createIcon("LocalPoliceOutlineIcon", SVGComponent, {
  "fileName": "abs-local-police.svg",
  "presentationName": "local-police",
  "style": "outline",
  "category": "location"
});