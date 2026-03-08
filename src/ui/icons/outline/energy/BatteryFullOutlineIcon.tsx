import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.31 9.49c-.38 0-.69.31-.69.69v3.69c0 .38.31.69.69.69s.69-.31.69-.69v-3.69c0-.38-.31-.69-.69-.69M7.14 8.65c-.33.18-.46.6-.29.93 0 0 .38.75.38 2.44s-.37 2.43-.37 2.43c-.19.33-.07.76.27.94a.69.69 0 0 0 .95-.27c.06-.1.55-1.05.55-3.1s-.49-3-.55-3.1a.685.685 0 0 0-.93-.27Zm3.23 0c-.33.18-.46.6-.29.93 0 0 .38.75.38 2.44s-.37 2.43-.37 2.43c-.19.33-.07.76.27.94a.69.69 0 0 0 .95-.27c.06-.1.55-1.05.55-3.1s-.49-3-.55-3.1a.685.685 0 0 0-.93-.27Zm3.23 0c-.33.18-.46.6-.29.93 0 0 .38.75.38 2.44s-.37 2.43-.37 2.43c-.19.33-.07.76.27.94a.69.69 0 0 0 .95-.27c.06-.1.55-1.05.55-3.1s-.49-3-.55-3.1a.69.69 0 0 0-.93-.27Z" /><path d="M10.84 3.98C4.23 3.98 2 3.98 2 12s2.23 8.02 8.84 8.02 8.84 0 8.84-8.02-2.23-8.02-8.84-8.02m0 14.65c-6.46 0-7.45 0-7.45-6.63s.99-6.63 7.45-6.63 7.45 0 7.45 6.63-.99 6.63-7.45 6.63" /></svg>;


      export const BatteryFullOutlineIcon = createIcon("BatteryFullOutlineIcon", SVGComponent, {
  "fileName": "abs-battery-full.svg",
  "presentationName": "battery-full",
  "style": "outline",
  "category": "energy"
});