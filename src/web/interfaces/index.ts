import { ComponentType, SVGProps } from "react";

export type IconVariant = "all" | "outline" | "solid";

export interface IconMetadata {
  fileName: string;
  presentationName: string;
  style: "outline" | "solid";
  category: string;
}

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>> &
  IconMetadata;
