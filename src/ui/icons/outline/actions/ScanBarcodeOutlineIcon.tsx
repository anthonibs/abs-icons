import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 19.5 19.5" color="currentColor" width="1em" height="1em" {...props}><path d="M.75 5.5c.41 0 .75-.34.75-.75v-.8C1.5 2.6 2.6 1.5 3.95 1.5h.8c.41 0 .75-.34.75-.75S5.16 0 4.75 0h-.8C1.77 0 0 1.77 0 3.95v.8c0 .41.34.75.75.75M15.55 0h-.8c-.41 0-.75.34-.75.75s.34.75.75.75h.8C16.9 1.5 18 2.6 18 3.95v.8c0 .41.34.75.75.75s.75-.34.75-.75v-.8C19.5 1.77 17.73 0 15.55 0m3.2 14c-.41 0-.75.34-.75.75v.8C18 16.9 16.9 18 15.55 18h-.8c-.41 0-.75.34-.75.75s.34.75.75.75h.8c2.18 0 3.95-1.77 3.95-3.95v-.8c0-.41-.34-.75-.75-.75m-14 4h-.8C2.6 18 1.5 16.9 1.5 15.55v-.8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.8c0 2.18 1.77 3.95 3.95 3.95h.8c.41 0 .75-.34.75-.75S5.16 18 4.75 18m1-14c-.41 0-.75.34-.75.75v10c0 .41.34.75.75.75s.75-.34.75-.75v-10c0-.41-.34-.75-.75-.75m4 0c-.41 0-.75.34-.75.75v10c0 .41.34.75.75.75s.75-.34.75-.75v-10c0-.41-.34-.75-.75-.75m5 11.5c.41 0 .75-.34.75-.75v-10c0-.41-.34-.75-.75-.75s-.75.34-.75.75v10c0 .41.34.75.75.75" /></svg>;


      export const ScanBarcodeOutlineIcon = createIcon("ScanBarcodeOutlineIcon", SVGComponent, {
  "fileName": "abs-scan-barcode.svg",
  "presentationName": "scan-barcode",
  "style": "outline",
  "category": "actions"
});