import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M2.25 12.25c0-.41.34-.75.75-.75 5.39 0 9.75 4.37 9.75 9.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75C11.25 16.69 7.56 13 3 13c-.41 0-.75-.34-.75-.75" /><path d="M2.25 15.25c0-.41.34-.75.75-.75 3.73 0 6.75 3.02 6.75 6.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75C8.25 18.35 5.9 16 3 16c-.41 0-.75-.34-.75-.75" /><path d="M3 17.5c-.41 0-.75.34-.75.75s.34.75.75.75c1.24 0 2.25 1.01 2.25 2.25 0 .41.34.75.75.75s.75-.34.75-.75c0-2.07-1.68-3.75-3.75-3.75m-.98-7.28c.3-.14.63-.22.98-.22 6.21 0 11.25 5.04 11.25 11.25 0 .26-.05.51-.13.75 2.78-.01 4.28-.1 5.33-1.01 1.18-1.01 1.42-2.71 1.91-6.09l.28-1.94c.38-2.64.57-3.96.03-5.09-.54-1.12-1.69-1.81-3.99-3.18l-1.39-.82C14.2 2.62 13.16 2 12 2s-2.2.62-4.29 1.87l-1.39.82c-2.3 1.37-3.45 2.06-3.99 3.18-.31.65-.38 1.36-.31 2.35" /></svg>;


      export const SmartHomeSolidIcon = createIcon("SmartHomeSolidIcon", SVGComponent, {
  "fileName": "abs-smart-home-solid.svg",
  "presentationName": "smart-home",
  "style": "solid",
  "category": "interface"
});