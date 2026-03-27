import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="m14.89 19.88-.06-.03a8.7 8.7 0 0 1-3.22-3.03c-.9-1.42-1.35-2.99-1.35-4.7a8.7 8.7 0 0 1 3.27-6.8c.09-.07.23-.01.23.11v3.05a.749.749 0 1 0 1.5 0V3.45c0-.42-.34-.75-.75-.75H9.47a.749.749 0 1 0 0 1.5h2.73c.13 0 .18.15.09.23-1.07.93-1.91 2.03-2.53 3.3a9.95 9.95 0 0 0-1 4.4q0 3.195 1.77 5.79c.94 1.39 2.13 2.47 3.59 3.24.04.03.09.06.14.07.08.04.18.06.28.06.34 0 .64-.23.72-.56.02-.06.03-.12.03-.19 0-.28-.16-.53-.4-.66" /></svg>;


      export const SwitchAccessShortcutOutlineIcon = createIcon("SwitchAccessShortcutOutlineIcon", SVGComponent, {
  "fileName": "abs-switch-access-shortcut.svg",
  "presentationName": "switch-access-shortcut",
  "style": "outline",
  "category": "arrows"
});