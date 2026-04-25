import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><circle cx={10.63} cy={6.5} r={4} /><path fillRule="evenodd" d="M20.09 16.91c.32.26.38.73.12 1.05l-2 2.5c-.13.17-.33.27-.55.28a.76.76 0 0 1-.57-.22l-1-1c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.41.41 1.48-1.85c.26-.32.73-.38 1.05-.12Z" /><path d="m17.45 16.61-.18.23c-.77-.23-1.63-.04-2.23.57-.88.88-.88 2.3 0 3.18h.01c-1.21.57-2.74.91-4.42.91-3.87 0-7-1.79-7-4s3.13-4 7-4c3.33 0 6.12 1.33 6.83 3.11Z" /></svg>;


      export const UserCheckSolidIcon = createIcon("UserCheckSolidIcon", SVGComponent, {
  "fileName": "abs-user-check-solid.svg",
  "presentationName": "user-check",
  "style": "solid",
  "category": "users"
});