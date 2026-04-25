import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><path d="M15.74 5.74H2.93c-.52 0-.93.42-.93.92s.42.92.93.92h12.81c.52 0 .93-.42.93-.92s-.42-.92-.93-.92m0 4.27H2.93c-.52 0-.93.42-.93.92s.42.93.93.93h12.81a.926.926 0 1 0 0-1.85m5.97 2.41a.91.91 0 0 0-1.28 0l-3.62 3.62-1.48-1.49a.95.95 0 0 0-.64-.26c-.25 0-.48.1-.68.28-.34.36-.34.93 0 1.3L16.15 18c.36.36.95.36 1.31 0l4.28-4.27a.93.93 0 0 0-.03-1.31m-10.24 1.86H2.93c-.52 0-.93.42-.93.92s.42.93.93.93h8.54c.52 0 .92-.42.92-.93s-.41-.92-.92-.92" /></svg>;


      export const AddToPlaylistOutlineIcon = createIcon("AddToPlaylistOutlineIcon", SVGComponent, {
  "fileName": "abs-add-to-playlist.svg",
  "presentationName": "add-to-playlist",
  "style": "outline",
  "category": "actions"
});