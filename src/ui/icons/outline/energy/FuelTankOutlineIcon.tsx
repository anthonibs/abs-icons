import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.81 9.6a3.73 3.73 0 0 0-3.47-2.38h-1.09V6.03c.39-.02.7-.34.7-.74s-.33-.74-.74-.74h-6.17c-.41 0-.74.33-.74.74s.31.72.7.74v1.19H5.67c-1.53 0-2.93.96-3.47 2.38-.93 2.41-.93 5.06 0 7.46a3.73 3.73 0 0 0 3.47 2.38h12.66c1.53 0 2.93-.96 3.47-2.38.93-2.41.93-5.06 0-7.46Zm-9.33-2.38V6.03h3.3v1.19zm-6.31 9.49c.41 0 .74-.33.74-.74v-.85h2.08v.85c0 .41.33.74.74.74s.74-.33.74-.74V8.69h7.88c.92 0 1.77.58 2.1 1.44.78 2.04.78 4.37 0 6.41-.33.86-1.17 1.44-2.1 1.44H5.67c-.92 0-1.77-.58-2.1-1.44a9.07 9.07 0 0 1 0-6.41c.29-.77 1-1.31 1.86-1.42v7.26c0 .41.33.74.74.74m.74-3.06v-.73h2.08v.73zm0-2.21v-.73h2.08v.73zm0-2.21v-.54h2.08v.54z" /></svg>;


      export const FuelTankOutlineIcon = createIcon("FuelTankOutlineIcon", SVGComponent, {
  "fileName": "abs-fuel-tank.svg",
  "presentationName": "fuel-tank",
  "style": "outline",
  "category": "energy"
});