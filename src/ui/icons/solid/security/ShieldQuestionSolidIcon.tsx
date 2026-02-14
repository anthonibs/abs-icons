import * as React from "react";
      import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M19.81 5.38a3.6 3.6 0 0 0-1.87-1.33L13.97 2.8c-1.29-.4-2.65-.4-3.94 0L6.06 4.05c-.76.23-1.4.69-1.87 1.33s-.72 1.39-.72 2.18v5.63c0 1.02.24 2.03.7 2.94.45.91 1.12 1.71 1.93 2.32l2.59 1.94a5.495 5.495 0 0 0 6.62 0l2.59-1.94c.81-.61 1.48-1.41 1.93-2.32.46-.9.7-1.92.7-2.94V7.56c0-.79-.25-1.54-.72-2.18m-7.8 11.54H12c-.51-.01-.92-.42-.92-.93s.41-.92.92-.92.92.41.92.92-.41.92-.91.93m3.15-5.1c-.26.64-.7 1.17-1.26 1.54-.57.38-1.23.58-1.9.58h-.13v-.03a.93.93 0 0 1-.8-.92c0-.51.42-.92.93-.92.31 0 .61-.09.87-.27s.46-.42.58-.71a1.56 1.56 0 0 0-.34-1.71c-.22-.22-.5-.37-.8-.42-.3-.07-.62-.04-.91.09-.29.12-.54.33-.71.58-.17.26-.27.57-.27.87 0 .51-.41.93-.92.93s-.93-.42-.93-.93c0-.69.2-1.34.58-1.9s.91-.99 1.54-1.25a3.36 3.36 0 0 1 1.98-.2 3.5 3.5 0 0 1 1.76.93c.48.48.81 1.11.93 1.76.13.67.07 1.33-.2 1.98" /></svg>;


      export const ShieldQuestionSolidIcon = createIcon("ShieldQuestionSolidIcon", SVGComponent, {
  "fileName": "abs-shield-question-solid.svg",
  "presentationName": "shield-question",
  "style": "solid",
  "category": "security"
});