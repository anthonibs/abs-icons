import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="m4.26 8.83 6.19-5.5c.88-.79 2.22-.79 3.1 0l6.19 5.5c.4.36.63.87.63 1.41v9.62h.93c.39 0 .7.31.7.7s-.31.7-.7.7H2.7c-.39 0-.7-.31-.7-.7s.31-.7.7-.7h.93v-9.62c0-.54.23-1.05.63-1.41m5.18-.37c0-.39.31-.7.7-.7h3.72c.39 0 .7.31.7.7s-.31.7-.7.7h-3.72c-.39 0-.7-.31-.7-.7m4.47 2.09c.84 0 1.53 0 2.09.07.58.08 1.11.25 1.54.68s.6.95.67 1.53c.07.55.07 1.25.07 2.09v4.93h-1.4v-4.88c0-.9 0-1.5-.06-1.95-.06-.43-.16-.61-.28-.73s-.31-.22-.73-.28c-.45-.06-1.05-.06-1.95-.06h-3.72c-.9 0-1.5 0-1.95.06-.43.06-.61.16-.73.28s-.22.31-.28.73c-.06.45-.06 1.05-.06 1.95v4.88h-1.4v-4.93c0-.84 0-1.53.07-2.09.08-.58.25-1.11.67-1.53s.95-.6 1.54-.68c.55-.07 1.25-.07 2.09-.07zm-5.4 3.95c0-.39.31-.7.7-.7h5.58c.39 0 .7.31.7.7s-.31.7-.7.7H9.21c-.39 0-.7-.31-.7-.7m0 2.79c0-.39.31-.7.7-.7h5.58c.39 0 .7.31.7.7s-.31.7-.7.7H9.21c-.39 0-.7-.31-.7-.7" /></svg>;


      export const GarageSolidIcon = createIcon("GarageSolidIcon", SVGComponent, {
  "fileName": "abs-garage-solid.svg",
  "presentationName": "garage",
  "style": "solid",
  "category": "location"
});