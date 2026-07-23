import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.54 9.85 18.33 8l3.21-1.85c.36-.21.48-.67.27-1.02a.74.74 0 0 0-1.02-.27l-3.21 1.85v-3.7c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.7l-3.21-1.85a.746.746 0 0 0-.75 1.29L15.33 8l-3.21 1.85c-.36.21-.48.67-.27 1.02.14.24.39.38.65.38.13 0 .26-.03.37-.1l3.21-1.85V13c0 .41.34.75.75.75s.75-.34.75-.75V9.3l3.21 1.85c.12.07.25.1.37.1.26 0 .51-.13.65-.38.21-.36.08-.82-.27-1.02m-14.71 4.4h-2c-1.52 0-2.75 1.23-2.75 2.75v2c0 1.52 1.23 2.75 2.75 2.75h2c1.52 0 2.75-1.23 2.75-2.75v-2c0-1.52-1.23-2.75-2.75-2.75M8.08 19c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25z" /></svg>;


      export const RegexOutlineIcon = createIcon("RegexOutlineIcon", SVGComponent, {
  "fileName": "abs-regex.svg",
  "presentationName": "regex",
  "style": "outline",
  "category": "general",
  "isNew": true
});