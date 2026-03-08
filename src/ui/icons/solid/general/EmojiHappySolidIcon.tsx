import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.07 4.96c-3.9-3.9-10.24-3.9-14.14 0A9.87 9.87 0 0 0 2 12.16a9.92 9.92 0 0 0 3.14 7.12c1.82 1.73 4.26 2.68 6.86 2.68s5.04-.95 6.86-2.68c1.99-1.87 3.1-4.4 3.14-7.12s-1-5.28-2.93-7.2m-2.99 11.37c-1.09 1.03-2.54 1.6-4.08 1.6s-2.99-.57-4.08-1.6a.82.82 0 0 1-.04-1.15.83.83 0 0 1 1.16-.03c1.63 1.54 4.29 1.54 5.92 0 .33-.31.85-.29 1.15.03.15.16.23.37.22.59 0 .22-.09.42-.25.56" /></svg>;


      export const EmojiHappySolidIcon = createIcon("EmojiHappySolidIcon", SVGComponent, {
  "fileName": "abs-emoji-happy-solid.svg",
  "presentationName": "emoji-happy",
  "style": "solid",
  "category": "general"
});