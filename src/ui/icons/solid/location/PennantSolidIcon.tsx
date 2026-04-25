import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2c.4 0 .72.32.72.72v1l4.83 2.41.05.03c.71.35 1.31.66 1.73.95.42.3.87.73.87 1.4s-.44 1.1-.87 1.4c-.42.29-1.02.59-1.73.95l-4.7 2.35c-.11.05-.18.16-.18.28v4.66c0 .4-.33.72-.72.72s-.72-.32-.72-.72V2.72c0-.4.33-.72.72-.72" /><path d="M12 22c5.32 0 9.64-1.51 9.64-3.37 0-1.57-3.06-2.89-7.21-3.27-.14-.01-.26.1-.26.24v2.54c0 .85-.47 1.66-1.26 1.98-1.57.65-3.08-.49-3.08-1.98v-2.65c0-.08-.07-.15-.16-.14-4.2.36-7.31 1.69-7.31 3.27 0 1.86 4.32 3.37 9.64 3.37Z" /><path d="M12 2c-.4 0-.72.32-.72.72v15.42c0 .4.33.72.72.72s.72-.32.72-.72v-4.77c0-.05.03-.1.08-.12l4.8-2.4c.71-.35 1.31-.66 1.73-.95.42-.3.87-.73.87-1.4s-.44-1.1-.87-1.4c-.42-.29-1.02-.59-1.73-.95l-4.88-2.44v-1c0-.4-.33-.72-.72-.72Z" /></svg>;


      export const PennantSolidIcon = createIcon("PennantSolidIcon", SVGComponent, {
  "fileName": "abs-pennant-solid.svg",
  "presentationName": "pennant",
  "style": "solid",
  "category": "location"
});