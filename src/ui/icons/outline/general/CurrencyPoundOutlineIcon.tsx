import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M6.25 21.25c-.08 0-.14-.06-.14-.14v-1.86l.41-.25c.28-.17.58-.41.9-.74s.62-.74.89-1.25.4-1.1.4-1.76c0-.18-.01-.36-.04-.53s-.05-.33-.09-.48H7.1c-.55 0-1-.45-1-1s.45-1 1-1h.5c-.35-.55-.69-1.13-1.01-1.74S6.1 9.14 6.1 8.24c0-1.53.53-2.83 1.6-3.9s2.37-1.6 3.9-1.6c1.18 0 2.23.33 3.15.98.59.42 1.08.92 1.45 1.5.33.51.09 1.21-.47 1.44h-.01a.98.98 0 0 1-1.21-.37c-.23-.35-.53-.65-.89-.91-.69-.5-1.49-.7-2.39-.62-.68.06-1.35.35-1.86.79-.84.72-1.25 1.62-1.25 2.69 0 .8.2 1.47.6 2 .37.49.75 1.1 1.13 1.82.06.11.17.18.3.18h2.97c.55 0 1 .45 1 1s-.45 1-1 1h-2.48q.045.225.06.48c.015.255.01.34.01.53 0 .83-.15 1.58-.44 2.25-.27.62-.6 1.18-.98 1.65-.03.04 0 .1.05.1h4.77c.67 0 1.18-.18 1.53-.53q.225-.225.39-.51c.26-.44.83-.59 1.29-.36h.01c.51.26.7.89.43 1.39-.25.47-.6.87-1.06 1.19-.76.54-1.62.81-2.59.81H6.25Z" /></svg>;


      export const CurrencyPoundOutlineIcon = createIcon("CurrencyPoundOutlineIcon", SVGComponent, {
  "fileName": "abs-currency-pound.svg",
  "presentationName": "currency-pound",
  "style": "outline",
  "category": "general"
});