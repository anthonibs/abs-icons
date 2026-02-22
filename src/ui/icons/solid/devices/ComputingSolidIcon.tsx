import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21.27 6.24v-.02c-.22-.61-.5-1.13-.84-1.59l-.02-.02L4.62 20.4s.02.02.03 0c.49.38 1.08.67 1.75.89 1.42.49 3.25.68 5.61.68s4.21-.2 5.64-.69c1.83-.62 2.97-1.72 3.62-3.51v-.04c.52-1.44.73-3.31.73-5.74s-.21-4.32-.73-5.76Zm-3.11 9.79h-1.6v1.66c0 .39-.32.71-.71.71s-.72-.32-.72-.71v-1.66h-1.72c-.38 0-.71-.33-.71-.71s.33-.72.71-.72h1.72v-1.66c0-.39.33-.71.72-.71s.71.32.71.71v1.66h1.6c.39 0 .72.33.72.72s-.33.71-.72.71m1.21-12.45c-.49-.38-1.08-.67-1.75-.89-1.42-.49-3.25-.68-5.61-.68s-4.21.2-5.64.69c-1.83.62-2.97 1.72-3.62 3.51v.04c-.52 1.44-.73 3.31-.73 5.74s.21 4.32.73 5.76v.02c.22.61.5 1.13.84 1.59l.02.02L19.39 3.6h-.02ZM5.85 7.01h4.74c.38 0 .71.33.71.71s-.33.72-.71.72H5.85c-.39 0-.72-.33-.72-.72s.33-.71.72-.71" /></svg>;


      export const ComputingSolidIcon = createIcon("ComputingSolidIcon", SVGComponent, {
  "fileName": "abs-computing-solid.svg",
  "presentationName": "computing",
  "style": "solid",
  "category": "devices"
});