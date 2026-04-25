import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M4 10.25c-.41 0-.75.34-.75.75s.34.75.75.75c4.55 0 8.25 3.7 8.25 8.25 0 .41.34.75.75.75s.75-.34.75-.75c0-5.38-4.37-9.75-9.75-9.75" /><path d="M4 3.25c-.41 0-.75.34-.75.75s.34.75.75.75c8.41 0 15.25 6.84 15.25 15.25 0 .41.34.75.75.75s.75-.34.75-.75c0-9.24-7.51-16.75-16.75-16.75" /><circle cx={5} cy={19} r={1.38} /></g></svg>;


      export const RssOutlineIcon = createIcon("RssOutlineIcon", SVGComponent, {
  "fileName": "abs-rss.svg",
  "presentationName": "rss",
  "style": "outline",
  "category": "general"
});