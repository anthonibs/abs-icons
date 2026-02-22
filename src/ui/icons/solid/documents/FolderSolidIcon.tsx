import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M20.56 7.52a4.83 4.83 0 0 0-3.46-1.44h-1.97c-.19 0-.4-.04-.57-.14s-.33-.23-.44-.41l-.53-.78c-.35-.53-.84-.97-1.4-1.28-.56-.3-1.2-.46-1.84-.46H6.89c-1.31 0-2.53.51-3.46 1.44-.93.92-1.44 2.15-1.44 3.46v8.16c0 1.3.52 2.54 1.44 3.46.92.93 2.15 1.44 3.46 1.44h10.2c1.29 0 2.55-.53 3.46-1.44.93-.92 1.44-2.15 1.44-3.46v-5.1c0-1.31-.51-2.53-1.44-3.46Z" /></svg>;


      export const FolderSolidIcon = createIcon("FolderSolidIcon", SVGComponent, {
  "fileName": "abs-folder-solid.svg",
  "presentationName": "folder",
  "style": "solid",
  "category": "documents"
});