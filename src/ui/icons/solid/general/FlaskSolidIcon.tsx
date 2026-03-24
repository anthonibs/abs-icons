import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path fillRule="evenodd" d="M6.83 4.45c.35-.04.69-.08 1.04-.11v1.31c0 .56-.18 1.11-.5 1.59a79 79 0 0 0-4.97 8.54c-1.09 2.2.15 4.79 2.53 5.37 4.75 1.14 9.4 1.14 14.15 0a3.78 3.78 0 0 0 2.53-5.37c-1.45-2.92-3.33-6.13-4.97-8.54-.32-.48-.5-1.03-.5-1.59V4.34c.35.03.69.07 1.04.11.59.07 1.12-.35 1.19-.94a1.07 1.07 0 0 0-.94-1.19c-.62-.07-1.25-.13-1.87-.18-.03 0-.06 0-.09-.01-1.15-.09-2.29-.13-3.43-.13-1.81 0-3.63.11-5.46.32-.59.07-1.01.6-.94 1.19s.6 1.01 1.19.94m9.83 7.36c.15-.02.23-.19.15-.31-.66-1.1-1.32-2.14-1.95-3.06a5 5 0 0 1-.87-2.79V4.57c0-.21-.17-.39-.38-.39-.52-.02-1.05-.03-1.57-.03q-.825 0-1.65.03c-.21 0-.38.18-.38.39v1.08c0 1.01-.32 1.98-.87 2.79-.62.92-1.29 1.97-1.95 3.07-.08.13 0 .29.15.31 3.13.38 6.19.38 9.31 0Z" /></svg>;


      export const FlaskSolidIcon = createIcon("FlaskSolidIcon", SVGComponent, {
  "fileName": "abs-flask-solid.svg",
  "presentationName": "flask",
  "style": "solid",
  "category": "general"
});