import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M14.52 4.63a.84.84 0 0 0-.63-.65c-.1-.02-2.37-.55-5.05-.55s-4.96.53-5.05.55c-.32.08-.57.33-.63.65-.02.1-.36 1.8-.54 4.16h12.45c-.18-2.38-.52-4.07-.54-4.17Z" /><path d="M21.13 7.77c-.05-.22-.15-.43-.3-.6l-2.89-3.28a1.297 1.297 0 0 0-1.95 1.71l.59.67V8.6c0 1.04.84 1.88 1.88 1.88h.37c.04.68.08 1.52.08 2.5 0 1.1-.2 2.96-.29 3.86-.03.3-.05.5-.06.58-.02.24-.16.49-.41.49-.22 0-.41-.18-.41-.47a3 3 0 0 0-2.66-2.98c.04-.76.07-1.59.07-2.46 0-.46 0-.91-.02-1.35H2.52c-.01.44-.02.89-.02 1.35 0 4.18.62 7.25.65 7.38.07.32.31.58.63.65.1.02 2.37.54 5.05.54s4.95-.52 5.05-.54a.85.85 0 0 0 .64-.65c.01-.07.19-.93.35-2.33.17.05.29.22.29.46 0 1.65 1.34 3 3 3s2.89-1.25 2.99-2.92c0-.07.02-.23.05-.47.1-.94.3-2.9.3-4.13 0-3.35-.36-5.14-.37-5.21Z" /></svg>;


      export const FuelStationSolidIcon = createIcon("FuelStationSolidIcon", SVGComponent, {
  "fileName": "abs-fuel-station-solid.svg",
  "presentationName": "fuel-station",
  "style": "solid",
  "category": "energy"
});