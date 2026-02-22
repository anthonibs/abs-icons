import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m20.68 8.08-6.44-5.15c-1.26-1-3.22-1.01-4.47 0L3.33 8.09c-.92.74-1.48 2.21-1.29 3.37l1.24 7.41c.29 1.66 1.83 2.97 3.51 2.97h10.42c1.66 0 3.23-1.34 3.52-2.98l1.24-7.41c.18-1.15-.38-2.62-1.29-3.36Zm-7.94 9.82c0 .4-.33.74-.74.74s-.74-.33-.74-.74v-2.95c0-.4.33-.74.74-.74s.74.33.74.74z" /></svg>;


      export const HomeAltSolidIcon = createIcon("HomeAltSolidIcon", SVGComponent, {
  "fileName": "abs-home-alt-solid.svg",
  "presentationName": "home-alt",
  "style": "solid",
  "category": "general"
});