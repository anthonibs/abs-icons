import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 22c-.1 0-.21 0-.31-.03-.67-.13-1.21-.66-1.34-1.34-.6-3.58-3.4-6.38-6.97-6.98a1.68 1.68 0 0 1-1.35-1.96c.13-.67.66-1.21 1.34-1.34a8.52 8.52 0 0 0 6.99-6.97c.08-.45.33-.83.7-1.09s.81-.35 1.25-.26c.67.13 1.21.66 1.34 1.34.6 3.58 3.4 6.38 6.97 6.98a1.68 1.68 0 0 1 1.35 1.96c-.13.67-.66 1.21-1.34 1.34a8.52 8.52 0 0 0-6.99 6.97v.01c-.08.44-.33.82-.7 1.07-.28.19-.61.29-.94.29Zm0-18.5s-.08.02-.1.03c-.03.02-.06.05-.07.11-.7 4.19-4 7.48-8.2 8.19-.06.01-.11.07-.13.14-.02.09.04.19.14.2 4.19.7 7.48 4 8.19 8.2.01.06.07.11.14.13.06.01.1 0 .13-.03.03-.02.06-.05.07-.11.71-4.19 4-7.49 8.2-8.19.06-.01.11-.07.13-.14.02-.09-.04-.19-.14-.2-4.19-.7-7.48-4-8.19-8.2-.01-.06-.07-.11-.14-.13zm.91 16.99" /></svg>;


      export const AstroidOutlineIcon = createIcon("AstroidOutlineIcon", SVGComponent, {
  "fileName": "abs-astroid.svg",
  "presentationName": "astroid",
  "style": "outline",
  "category": "general",
  "isNew": true
});