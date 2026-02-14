import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.71 8.67 14.95 8c-.22-.2-.5-.3-.8-.3h-1.36v-.89h.58v-1.3H8.74v1.3h.58v.89H7.88c-.29 0-.58.11-.8.3l-.76.67h-.53c-.66 0-1.2.54-1.2 1.2v2.04h-1.3v-1.66h-1.3v4.63h1.3v-1.66h1.3v2.04c0 .66.54 1.2 1.2 1.2h1.63l1.95 1.73c.22.2.5.3.8.3h6.05c.66 0 1.2-.54 1.2-1.2V9.88c0-.66-.54-1.2-1.2-1.2h-.53Zm5.6 1.01-.19-.32h-1.17c-.66 0-1.2.54-1.2 1.2v5.98c0 .66.54 1.2 1.2 1.2h1.17l.19-.32c.07-.12.69-1.23.69-3.87s-.62-3.76-.69-3.87" /></svg>;


      export const EngineSolidIcon = createIcon("EngineSolidIcon", SVGComponent, {
  "fileName": "abs-engine-solid.svg",
  "presentationName": "engine",
  "style": "solid",
  "category": "general"
});