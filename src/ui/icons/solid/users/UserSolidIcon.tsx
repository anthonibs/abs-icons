import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><circle cx={12} cy={6.5} r={4} /><ellipse cx={12} cy={17.5} rx={7} ry={4} /></svg>;


      export const UserSolidIcon = createIcon("UserSolidIcon", SVGComponent, {
  "fileName": "abs-user-solid.svg",
  "presentationName": "user",
  "style": "solid",
  "category": "users"
});