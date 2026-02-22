import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M13.78 14.67c0 .17-.13.35-.35.49-.38.26-.9.39-1.43.39s-1.05-.13-1.43-.39c-.23-.14-.36-.32-.36-.49 0-.16.13-.34.36-.5.77-.52 2.1-.52 2.86 0 .22.16.35.34.35.5" /><path d="M19.87 4.31C19.65 4.22 14.59 2 12 2S4.35 4.22 4.06 4.35c-.33.19-1.94 1.43-1.94 7.23 0 7.21 6.84 9.67 9.78 10.4.06.01.12.02.18.02s.12-.01.18-.02c2.26-.56 9.62-2.95 9.62-10.4 0-5.8-1.61-7.04-2.01-7.27m-7.92 2.73c1.28 0 2.32 1.05 2.32 2.34-.02 1.27-1 2.28-2.24 2.33h-.15c-1.26-.05-2.25-1.06-2.25-2.33s1.04-2.34 2.32-2.34m2.26 9.29c-.6.4-1.38.63-2.21.63s-1.62-.23-2.22-.63c-.61-.42-.96-1.01-.96-1.66s.35-1.25.96-1.65h.04v-.03c.61-.4 1.4-.6 2.18-.6s1.6.2 2.22.63c.61.4.96 1.01.96 1.65s-.35 1.24-.97 1.66m-2.3-6.03h.08c.49-.02.87-.42.87-.94s-.41-.91-.91-.91-.92.41-.92.93.39.9.88.92" /></svg>;


      export const ShieldUserSoftSolidIcon = createIcon("ShieldUserSoftSolidIcon", SVGComponent, {
  "fileName": "abs-shield-user-soft-solid.svg",
  "presentationName": "shield-user-soft",
  "style": "solid",
  "category": "security"
});