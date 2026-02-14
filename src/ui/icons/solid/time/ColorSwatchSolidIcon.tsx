import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M8.2 3.45c-.31-.3-.68-.55-1.08-.72-.41-.16-.85-.24-1.29-.23-.88 0-1.72.35-2.35.97a3.36 3.36 0 0 0-.98 2.34v12.24c-.02.78.24 1.54.72 2.15a3.39 3.39 0 0 0 2.61 1.29c.88 0 1.73-.35 2.35-.97s.97-1.47.97-2.35V5.83c0-.44-.08-.87-.25-1.27-.16-.41-.4-.78-.7-1.1ZM6.47 18.82c-.17.17-.4.27-.65.28-.19 0-.37-.05-.53-.15a.96.96 0 0 1-.34-.43c-.07-.17-.09-.37-.06-.55.04-.18.13-.35.26-.48s.3-.22.48-.26a.95.95 0 0 1 .95.4c.11.16.16.34.16.53 0 .25-.1.49-.28.66Zm11.23-8.06a3.3 3.3 0 0 0 0-2.56c-.18-.41-.43-.78-.75-1.09s-.69-.55-1.09-.72c-.41-.17-.84-.26-1.28-.26-.89 0-1.74.33-2.37.95L10.59 8.7v9.39l6.39-6.23c.31-.31.56-.68.73-1.09Zm2.82 5.06c-.62-.62-1.46-.97-2.34-.97H16L9.35 21.5h8.83c.44 0 .87-.09 1.28-.25a3.34 3.34 0 0 0 1.8-1.82 3.32 3.32 0 0 0-.73-3.62Z" /></svg>;


      export const ColorSwatchSolidIcon = createIcon("ColorSwatchSolidIcon", SVGComponent, {
  "fileName": "abs-color-swatch-solid.svg",
  "presentationName": "color-swatch",
  "style": "solid",
  "category": "time"
});