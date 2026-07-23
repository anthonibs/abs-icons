import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M11 4.5c6.63 0 10.85 3.11 11 7.75v.25c0 1.66-1.34 3-3 3H3c-.55 0-1-.45-1-1v-9c0-.55.45-1 1-1zm-4 2H4v3h3zm4 0H9v3h3V6.53c-.33-.02-.67-.03-1-.03m3 .26V9.5h5.04c-.98-1.34-2.69-2.31-5.04-2.74m7 10.74c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" /></svg>;


      export const TrainSolidIcon = createIcon("TrainSolidIcon", SVGComponent, {
  "fileName": "abs-train-solid.svg",
  "presentationName": "train",
  "style": "solid",
  "category": "transport",
  "isNew": true
});