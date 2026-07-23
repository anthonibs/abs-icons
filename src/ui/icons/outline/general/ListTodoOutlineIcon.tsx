import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M21 6.25h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75m0 7h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75m0 7h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75m-16 0c-.19 0-.38-.07-.53-.22l-2-2c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0L5 18.44l3.47-3.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22m3-9H4c-.96 0-1.75-.79-1.75-1.75v-4c0-.96.79-1.75 1.75-1.75h4c.96 0 1.75.79 1.75 1.75v4c0 .96-.79 1.75-1.75 1.75m-4-6c-.14 0-.25.11-.25.25v4c0 .14.11.25.25.25h4c.14 0 .25-.11.25-.25v-4c0-.14-.11-.25-.25-.25z" /></svg>;


      export const ListTodoOutlineIcon = createIcon("ListTodoOutlineIcon", SVGComponent, {
  "fileName": "abs-list-todo.svg",
  "presentationName": "list-todo",
  "style": "outline",
  "category": "general",
  "isNew": true
});