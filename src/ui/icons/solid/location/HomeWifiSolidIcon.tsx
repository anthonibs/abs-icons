import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M2.33 7.87c-.54 1.13-.35 2.45.03 5.09l.28 1.94c.49 3.38.73 5.08 1.91 6.09C5.72 22 7.45 22 10.9 22h2.21c3.45 0 5.17 0 6.35-1.01s1.42-2.71 1.91-6.09l.28-1.94c.38-2.64.57-3.96.03-5.09-.54-1.12-1.69-1.81-3.99-3.18l-1.39-.82C14.21 2.62 13.17 2 12.01 2s-2.2.62-4.29 1.87l-1.39.82c-2.3 1.37-3.45 2.06-3.99 3.18Zm11.12 8.64c-.81-.87-2.09-.87-2.9 0-.28.3-.76.32-1.06.04a.755.755 0 0 1-.04-1.06c1.4-1.51 3.7-1.51 5.1 0 .28.3.26.78-.04 1.06s-.78.26-1.06-.04m-4.9-2.16c1.91-2.06 4.99-2.06 6.9 0 .28.3.76.32 1.06.04s.32-.76.04-1.06c-2.51-2.7-6.59-2.7-9.1 0-.28.3-.26.78.04 1.06s.78.26 1.06-.04m8.9-2.16c-3.02-3.25-7.88-3.25-10.9 0-.28.31-.76.32-1.06.04a.755.755 0 0 1-.04-1.06c3.61-3.89 9.49-3.89 13.1 0 .28.31.26.78-.04 1.06s-.78.27-1.06-.04" /></svg>;


      export const HomeWifiSolidIcon = createIcon("HomeWifiSolidIcon", SVGComponent, {
  "fileName": "abs-home-wifi-solid.svg",
  "presentationName": "home-wifi",
  "style": "solid",
  "category": "location"
});