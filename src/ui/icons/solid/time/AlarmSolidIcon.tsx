import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.3 20.6h-.93v-5.81c0-4.62-3.75-8.37-8.37-8.37s-8.37 3.75-8.37 8.37v5.81H2.7c-.38 0-.7.32-.7.7s.32.7.7.7h18.6c.38 0 .7-.32.7-.7s-.32-.7-.7-.7M12 4.33c-.38 0-.7-.32-.7-.7V2.7c0-.38.32-.7.7-.7s.7.32.7.7v.93c0 .38-.32.7-.7.7M5.49 6.19c-.18 0-.35-.07-.49-.2l-.93-.93c-.27-.27-.27-.72 0-.99s.72-.27.99 0l.93.93c.27.27.27.72 0 .99-.14.14-.32.2-.49.2Zm13.02 0c-.18 0-.35-.07-.49-.2a.706.706 0 0 1 0-.99l.93-.93c.27-.27.72-.27.99 0s.27.72 0 .99l-.93.93c-.14.14-.32.2-.49.2Z" /></svg>;


      export const AlarmSolidIcon = createIcon("AlarmSolidIcon", SVGComponent, {
  "fileName": "abs-alarm-solid.svg",
  "presentationName": "alarm",
  "style": "solid",
  "category": "time"
});