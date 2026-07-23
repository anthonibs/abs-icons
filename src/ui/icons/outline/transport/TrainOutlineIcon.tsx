import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M3 15.25h16c1.52 0 2.75-1.23 2.75-2.75 0-3.58-2.82-7.75-10.75-7.75H3c-.41 0-.75.34-.75.75v9c0 .41.34.75.75.75m.75-5.5v-3.5h3.5v3.5zm15.25 4H3.75v-2.5H20.1c.09.4.15.81.15 1.25 0 .69-.56 1.25-1.25 1.25m.48-4h-5.73V6.47c2.71.46 4.71 1.61 5.73 3.28M12.25 6.3v3.45h-3.5v-3.5H11c.43 0 .84.02 1.25.05M21 17.75H3c-.41 0-.75.34-.75.75s.34.75.75.75h18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" /></svg>;


      export const TrainOutlineIcon = createIcon("TrainOutlineIcon", SVGComponent, {
  "fileName": "abs-train.svg",
  "presentationName": "train",
  "style": "outline",
  "category": "transport",
  "isNew": true
});