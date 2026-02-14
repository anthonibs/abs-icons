import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21 18.75H11c-.41 0-.75.34-.75.75s.34.75.75.75h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0-7H11c-.41 0-.75.34-.75.75s.34.75.75.75h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-10-5.5h10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H11c-.41 0-.75.34-.75.75s.34.75.75.75M6.47 2.97 4 5.44l-.47-.47c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1 1c.15.15.34.22.53.22s.38-.07.53-.22l3-3c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0m0 7L4 12.44l-.47-.47c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1 1c.15.15.34.22.53.22s.38-.07.53-.22l3-3c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0m0 7L4 19.44l-.47-.47c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1 1c.15.15.34.22.53.22s.38-.07.53-.22l3-3c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0" /></svg>;


      export const TaskOutlineIcon = createIcon("TaskOutlineIcon", SVGComponent, {
  "fileName": "abs-task.svg",
  "presentationName": "task",
  "style": "outline",
  "category": "analytics"
});