import { createIcon } from "../../../createIcon";

      import type { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" color="currentColor" width="1em" height="1em" {...props}><g><path d="M9.19 12.78h.88c.55 0 1 .45 1 1s-.45 1-1 1h-.88c-.06 0-.12.05-.12.12v.88c0 .55-.45 1-1 1s-1-.45-1-1v-.88c0-.06-.05-.12-.12-.12h-.88c-.55 0-1-.45-1-1s.45-1 1-1h.88c.06 0 .12-.05.12-.12v-.88c0-.55.45-1 1-1s1 .45 1 1v.88c0 .06.05.12.12.12" /><rect width={4} height={1.5} x={13.08} y={14.78} rx={0.75} ry={0.75} /><rect width={6} height={1.5} x={13.08} y={11.78} rx={0.75} ry={0.75} /><path d="M14.74 5.63c-.62-.02-1.29-.02-2-.02v1.74h-1.48V5.61c-.71 0-1.38 0-2 .02-5.46.12-7.38 1.04-7.38 7.98 0 8 2.55 8 10.12 8s10.12 0 10.12-8c0-6.94-1.92-7.86-7.38-7.98M12 19.88c-7.43 0-8.39 0-8.39-6.26 0-5.39.71-6.14 5.65-6.24.8-.02 1.71-.02 2.74-.02s1.94 0 2.74.01c4.94.11 5.65.86 5.65 6.25 0 6.26-.96 6.26-8.39 6.26" /><path d="M13.06 2.39h-2.12c-.93 0-1.68.7-1.68 1.57v3.83c0 .86.75 1.56 1.67 1.56h2.14c.92 0 1.67-.7 1.67-1.56V3.96c0-.87-.75-1.57-1.68-1.57m-.47 5.09H11.4c-.08 0-.15-.06-.15-.14V4.38c0-.08.07-.14.15-.14h1.19c.08 0 .15.06.15.14v2.96c0 .08-.07.14-.15.14" /></g></svg>;


      export const MedicalInformationOutlineIcon = createIcon("MedicalInformationOutlineIcon", SVGComponent, {
  "fileName": "abs-medical-information.svg",
  "presentationName": "medical-information",
  "style": "outline",
  "category": "general",
  "isNew": false
});