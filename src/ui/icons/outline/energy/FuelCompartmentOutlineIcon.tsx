import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.53 6.94H16.7c-.1-.55-.44-.94-.87-.94h-1.32c-.44 0-.77.39-.87.94h-.09c-.1-.55-.43-.94-.87-.94h-1.32c-.44 0-.77.39-.87.94h-.09c-.1-.55-.43-.94-.87-.94H8.21c-.44 0-.77.39-.87.94H4.51c-1.47 0-2.63 1.72-2.63 3.91v3.18c0 2.19 1.15 3.91 2.63 3.91h15.05c1.47 0 2.62-1.72 2.62-3.91v-3.18c0-2.19-1.15-3.91-2.62-3.91ZM14.5 6.8h1.29s0 .06.01.14h-1.31V6.8Zm-3.16 0h1.29s0 .06.01.14h-1.31V6.8Zm-3.16 0h1.29s0 .06.01.14H8.17V6.8Zm12.47 7.22c0 1.47-.67 2.41-1.12 2.41H4.48c-.46 0-1.13-.94-1.13-2.41v-3.18c0-1.47.67-2.41 1.13-2.41h15.05c.46 0 1.12.94 1.12 2.41z" /><path d="M18.63 7.88c-.28 0-.5.22-.5.5v.85h-.63v-.88c0-.28-.22-.5-.5-.5s-.5.22-.5.5v6.06c0 .28.22.5.5.5s.5-.22.5-.5v-.67h.63v.69c0 .28.22.5.5.5s.5-.22.5-.5V8.37c0-.28-.22-.5-.5-.5Zm-.5 2.35v.76h-.63v-.76zm-.63 2.52v-.76h.63v.76z" /></svg>;


      export const FuelCompartmentOutlineIcon = createIcon("FuelCompartmentOutlineIcon", SVGComponent, {
  "fileName": "abs-fuel-compartment.svg",
  "presentationName": "fuel-compartment",
  "style": "outline",
  "category": "energy"
});