import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M12 2h.64l.62.02h.3l.58.05.55.05c4.78.46 6.73 2.41 7.2 7.2l.05.55.03.58c0 .1.01.2.01.3l.02.62v1.28l-.02.62v.3l-.05.58-.05.55c-.46 4.78-2.41 6.73-7.2 7.2l-.55.05-.58.03c-.1 0-.2.01-.3.01l-.62.02h-1.28l-.62-.02h-.3l-.58-.05-.55-.05c-4.78-.46-6.73-2.41-7.2-7.2l-.05-.55-.03-.58c0-.1 0-.2-.01-.3l-.02-.62v-1.28l.02-.62v-.3l.05-.58.05-.55c.46-4.78 2.41-6.73 7.2-7.2l.55-.05.58-.03c.1 0 .2 0 .3-.01l.62-.02zm0 6c-.55 0-1 .45-1 1v2H8.88A1.003 1.003 0 0 0 9 13h2v2.12a1.003 1.003 0 0 0 2-.12v-2h2.12a1.003 1.003 0 0 0-.12-2h-2V8.88c-.07-.5-.49-.88-1-.88" /></svg>;


      export const PlusSquareSolidIcon = createIcon("PlusSquareSolidIcon", SVGComponent, {
  "fileName": "abs-plus-square-solid.svg",
  "presentationName": "plus-square",
  "style": "solid",
  "category": "actions",
  "isNew": true
});