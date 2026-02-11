import { ComponentType, SVGProps, useCallback, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { IconComponent } from "../layout/Content";

type CardIconProps = {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  size?: number;
  color?: string;
};

const CardIcon = ({
  name,
  Icon,
  size = 32,
  color = "#D4AF37",
}: CardIconProps) => {
  const [copiedSvg, setCopiedSvg] = useState(false);
  const [copiedJsx, setCopiedJsx] = useState(false);

  const [selected, setSelected] = useState("BoxFilledIcon");

  const importText = `import { ${name} } from "@anthonibs/abs-icons";`;

  const handleCopySvg = (
    IconComponent: ComponentType<SVGProps<SVGSVGElement>>,
  ) => {
    const svgString = renderToStaticMarkup(
      <IconComponent width={size} height={size} fill="currentColor" />,
    );
    navigator.clipboard.writeText(svgString);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 1200);
  };

  const handleCopyImport = () => {
    navigator.clipboard.writeText(importText);
    setCopiedJsx(true);
    setTimeout(() => setCopiedJsx(false), 1200);
  };

  return (
    <article
      className={`group relative flex flex-col items-center justify-center h-40 bg-abs-card-background rounded-2xl border  transition-all duration-300 overflow-hidden hover:border-abs-brand-primary ${
        selected === name
          ? "border-abs-brand-primary"
          : "border-abs-card-border"
      }`}
    >
      <div className="flex flex-col items-center group-hover:opacity-40 transition-opacity duration-300">
        <span>
          <Icon width={size} height={size} fill={color} />
        </span>

        <span
          className={`mt-4 text-[10px] font-mono ${
            selected === name ? "text-abs-text-main" : "text-abs-text-muted/80"
          }`}
        >
          {name}
        </span>
      </div>

      <div className="absolute inset-0 bg-abs-background-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-3">
        <button
          className="w-full cursor-pointer py-1.5 text-[10px] font-bold text-abs-brand-primary border border-abs-brand-primary bg-abs-background-dark/80 rounded-lg hover:bg-abs-brand-primary hover:text-abs-text-main transition-all"
          onClick={() => handleCopySvg(Icon)}
        >
          {copiedSvg ? "COPIED!" : "COPY SVG"}
        </button>

        <button
          className="w-full cursor-pointer py-1.5 text-[10px] font-bold text-abs-brand-primary border border-abs-brand-primary bg-abs-background-dark/80 rounded-lg hover:bg-abs-brand-primary hover:text-abs-text-main transition-all"
          onClick={handleCopyImport}
        >
          {copiedJsx ? "COPIED!" : "COPY JSX"}
        </button>
      </div>
    </article>
  );
};

export default CardIcon;
