import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M13.8 19.88c-.72 0-1.41-.31-1.9-.84a.755.755 0 0 1 .05-1.06c.31-.28.78-.25 1.06.05.2.22.49.35.79.35.58 0 1.05-.46 1.05-1.03s-.47-1.03-1.05-1.03H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.8c1.41 0 2.55 1.14 2.55 2.53s-1.14 2.53-2.55 2.53m4.5-7.12H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h15.3c1.08 0 1.95-.86 1.95-1.92s-.88-1.92-1.95-1.92c-.55 0-1.09.23-1.46.64-.28.31-.75.33-1.06.05a.746.746 0 0 1-.05-1.06c.65-.72 1.59-1.14 2.57-1.14 1.9 0 3.45 1.54 3.45 3.42s-1.55 3.42-3.45 3.42ZM11.1 9.2H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.1c.58 0 1.05-.46 1.05-1.03s-.47-1.03-1.05-1.03c-.3 0-.58.13-.78.35-.28.31-.75.33-1.06.05a.746.746 0 0 1-.05-1.06c.48-.53 1.17-.84 1.9-.84 1.41 0 2.55 1.14 2.55 2.53S12.52 9.2 11.11 9.2Z" /></svg>;


      export const WindWeatherOutlineIcon = createIcon("WindWeatherOutlineIcon", SVGComponent, {
  "fileName": "abs-wind-weather.svg",
  "presentationName": "wind-weather",
  "style": "outline",
  "category": "nature",
  "isNew": false
});