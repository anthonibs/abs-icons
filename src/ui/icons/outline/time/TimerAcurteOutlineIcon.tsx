import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M14.76 3.5h-4.59c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.59c.41 0 .75.34.75.75s-.34.75-.75.75M12.46 22H3.73c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.73c3.89 0 7.06-3.19 7.06-7.11 0-1.9-.73-3.69-2.07-5.03a7 7 0 0 0-4.99-2.08c-3.89 0-7.06 3.19-7.06 7.11 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.75 3.84-8.61 8.56-8.61 2.03 0 3.96.71 5.5 2.01l.86-.86c.29-.3.77-.29 1.06 0s.3.77 0 1.06l-.87.87c1.3 1.55 2 3.49 2 5.54 0 4.75-3.84 8.61-8.56 8.61Z" /><path d="M8.33 19.23h-4.6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.59c.41 0 .75.34.75.75s-.34.75-.75.75Zm-1.84-2.78H3.73c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.76c.41 0 .75.34.75.75s-.34.75-.75.75m5.97-2.31c-.19 0-.38-.07-.53-.22a.745.745 0 0 1 0-1.06l3.22-3.24c.29-.29.77-.29 1.06 0s.3.77 0 1.06l-3.22 3.24c-.15.15-.34.22-.53.22" /></g></svg>;


      export const TimerAcurteOutlineIcon = createIcon("TimerAcurteOutlineIcon", SVGComponent, {
  "fileName": "abs-timer-acurte.svg",
  "presentationName": "timer-acurte",
  "style": "outline",
  "category": "time"
});