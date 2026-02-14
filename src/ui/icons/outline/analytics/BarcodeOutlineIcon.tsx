import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M17 2.75H7c-3.65 0-5.75 2.1-5.75 5.75v7c0 3.65 2.1 5.75 5.75 5.75h10c3.65 0 5.75-2.1 5.75-5.75v-7c0-3.65-2.1-5.75-5.75-5.75m4.25 12.75c0 2.86-1.39 4.25-4.25 4.25H7c-2.86 0-4.25-1.39-4.25-4.25v-7c0-2.86 1.39-4.25 4.25-4.25h10c2.86 0 4.25 1.39 4.25 4.25z" /><path d="M6 7.25c-.41 0-.75.34-.75.75v8c0 .41.34.75.75.75s.75-.34.75-.75V8c0-.41-.34-.75-.75-.75m3 0c-.41 0-.75.34-.75.75v4c0 .41.34.75.75.75s.75-.34.75-.75V8c0-.41-.34-.75-.75-.75m0 7c-.41 0-.75.34-.75.75v1c0 .41.34.75.75.75s.75-.34.75-.75v-1c0-.41-.34-.75-.75-.75m6-7c-.41 0-.75.34-.75.75v1c0 .41.34.75.75.75s.75-.34.75-.75V8c0-.41-.34-.75-.75-.75m-3 0c-.41 0-.75.34-.75.75v8c0 .41.34.75.75.75s.75-.34.75-.75V8c0-.41-.34-.75-.75-.75m3 4c-.41 0-.75.34-.75.75v4c0 .41.34.75.75.75s.75-.34.75-.75v-4c0-.41-.34-.75-.75-.75m3-4c-.41 0-.75.34-.75.75v8c0 .41.34.75.75.75s.75-.34.75-.75V8c0-.41-.34-.75-.75-.75" /></g></svg>;


      export const BarcodeOutlineIcon = createIcon("BarcodeOutlineIcon", SVGComponent, {
  "fileName": "abs-barcode.svg",
  "presentationName": "barcode",
  "style": "outline",
  "category": "analytics"
});