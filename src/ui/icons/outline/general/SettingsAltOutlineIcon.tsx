import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M12 8.01C9.5 8.01 8.01 9.5 8.01 12S9.5 15.99 12 15.99s3.99-1.49 3.99-3.99S14.5 8.01 12 8.01m0 6.65c-1.74 0-2.66-.92-2.66-2.66s.92-2.66 2.66-2.66 2.66.92 2.66 2.66-.92 2.66-2.66 2.66" /><path d="M20.73 6.99c-.22-.39-.55-.71-.94-.94l-6.51-3.72c-.78-.45-1.79-.45-2.56 0L4.2 6.05c-.39.22-.71.55-.94.94-.22.39-.34.83-.34 1.28v7.45c0 .45.12.89.34 1.28s.55.71.94.94l6.51 3.72c.39.22.83.34 1.28.34s.89-.12 1.28-.34l6.52-3.72c.39-.22.71-.55.94-.94.22-.39.34-.83.34-1.28V8.27c0-.45-.12-.89-.34-1.28m-1.05 8.73c0 .2-.05.4-.16.58-.1.18-.25.32-.42.42l-6.52 3.72c-.35.21-.81.21-1.17 0L4.9 16.72c-.18-.1-.32-.25-.42-.42-.1-.18-.16-.38-.16-.58V8.28c0-.2.05-.41.16-.58.1-.18.25-.32.42-.42l6.52-3.72c.18-.1.38-.16.58-.16s.4.05.58.16l6.51 3.72a1.18 1.18 0 0 1 .59 1.01v7.45Z" /></g></svg>;


      export const SettingsAltOutlineIcon = createIcon("SettingsAltOutlineIcon", SVGComponent, {
  "fileName": "abs-settings-alt.svg",
  "presentationName": "settings-alt",
  "style": "outline",
  "category": "general"
});