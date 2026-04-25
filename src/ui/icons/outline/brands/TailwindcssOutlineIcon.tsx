import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M7 9.97c.67-2.71 2.33-4.06 5-4.06 4 0 4.5 3.05 6.5 3.55 1.33.34 2.5-.17 3.5-1.52-.67 2.71-2.33 4.06-5 4.06-4 0-4.5-3.05-6.5-3.55C9.17 8.11 8 8.62 7 9.97m-5 6.09C2.67 13.35 4.33 12 7 12c4 0 4.5 3.05 6.5 3.55 1.33.34 2.5-.17 3.5-1.52-.67 2.71-2.33 4.06-5 4.06-4 0-4.5-3.05-6.5-3.55-1.33-.34-2.5.17-3.5 1.52" /></svg>;


      export const TailwindcssOutlineIcon = createIcon("TailwindcssOutlineIcon", SVGComponent, {
  "fileName": "abs-tailwindcss.svg",
  "presentationName": "tailwindcss",
  "style": "outline",
  "category": "brands"
});