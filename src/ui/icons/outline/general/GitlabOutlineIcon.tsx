import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M11.51 20.85 4.53 15.6c-.85-.63-1.42-1.47-1.7-2.5s-.23-2.05.15-3.05l2.55-6.63c.05-.13.13-.24.25-.31S6.02 3 6.16 3s.26.04.39.11.21.2.26.36l1.68 5.14c.03.08.1.13.19.13h6.67c.08 0 .16-.05.19-.13l1.68-5.14c.05-.17.14-.29.26-.36s.25-.11.39-.11.26.04.38.11.2.18.25.31l2.53 6.63c.38 1 .43 2.02.15 3.05s-.85 1.87-1.7 2.5l-7 5.25q-.195.15-.48.15c-.285 0-.34-.05-.48-.15Z" /></svg>;


      export const GitlabOutlineIcon = createIcon("GitlabOutlineIcon", SVGComponent, {
  "fileName": "abs-gitlab.svg",
  "presentationName": "gitlab",
  "style": "outline",
  "category": "general"
});