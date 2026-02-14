import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><rect width={8.25} height={8.25} x={3} y={12.75} rx={3} ry={3} /><rect width={8.25} height={8.25} x={3} y={3} rx={3} ry={3} /><path d="M19.77 15.73h-1.75v-1.75a1.14 1.14 0 1 0-2.28 0v1.75h-1.75a1.14 1.14 0 1 0 0 2.28h1.75v1.75a1.14 1.14 0 1 0 2.28 0v-1.75h1.75a1.14 1.14 0 1 0 0-2.28" /><rect width={8.25} height={8.25} x={12.75} y={3} rx={3} ry={3} /></g></svg>;


      export const CategoryAddSolidIcon = createIcon("CategoryAddSolidIcon", SVGComponent, {
  "fileName": "abs-category-add-solid.svg",
  "presentationName": "category-add",
  "style": "solid",
  "category": "interface"
});