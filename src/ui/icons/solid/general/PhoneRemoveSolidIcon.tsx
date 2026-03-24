import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M19.54 5.84a.223.223 0 0 1 0-.32l2.24-2.24c.28-.28.28-.75 0-1.03a.736.736 0 0 0-1.03 0l-2.24 2.24c-.09.09-.23.09-.32 0l-2.24-2.24a.736.736 0 0 0-1.03 0c-.28.28-.28.75 0 1.03l2.24 2.24c.09.09.09.23 0 .32l-2.24 2.24c-.28.28-.28.75 0 1.03.14.15.33.21.52.21s.37-.07.52-.21l2.24-2.24c.09-.09.23-.09.32 0l2.24 2.24c.14.15.33.21.52.21s.37-.07.52-.21c.28-.28.28-.75 0-1.03l-2.24-2.24Zm-4.08 7.96c-.97.47-1.81.88-3.99-1.3-2.18-2.19-1.78-3.02-1.3-4 .68-1.41.96-2.69-2.15-5.25-.74-.61-1.54-.84-2.39-.68-1.81.34-3.04 2.31-3.04 2.31-.79 1.11-1.87 4.43 5.1 11.4 4.58 4.59 7.59 5.69 9.41 5.69.95 0 1.58-.3 1.95-.56.02 0 2.03-1.27 2.36-3.08.15-.84-.08-1.63-.68-2.37-2.56-3.11-3.84-2.84-5.25-2.15Z" /></svg>;


      export const PhoneRemoveSolidIcon = createIcon("PhoneRemoveSolidIcon", SVGComponent, {
  "fileName": "abs-phone-remove-solid.svg",
  "presentationName": "phone-remove",
  "style": "solid",
  "category": "general"
});