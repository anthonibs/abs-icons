import { memo, useState, useCallback } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { IconComponent } from "../layout/Content";
import useData from "../store/useData";

type CardIconProps = {
  name: string;
  Icon: IconComponent;
  size?: number;
  color?: string;
};

const CardIcon = ({
  name,
  Icon,
  size = 32,
  color = "#D4AF37",
}: CardIconProps) => {
  const isSelected = useData(
    useCallback((state) => state.selectedIcon?.name === name, [name]),
  );
  const setSelectedIcon = useData((state) => state.setSelectedIcon);

  const [copiedSvg, setCopiedSvg] = useState(false);
  const [copiedJsx, setCopiedJsx] = useState(false);

  const handleCopySvg = (e: React.MouseEvent) => {
    e.stopPropagation();
    const svgString = renderToStaticMarkup(
      <Icon width={size} height={size} fill="currentColor" />,
    );
    navigator.clipboard.writeText(svgString);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 1200);
  };

  const handleCopyImport = (e: React.MouseEvent) => {
    e.stopPropagation();
    const importText = `import { ${name} } from "@anthonibs/abs-icons";`;
    navigator.clipboard.writeText(importText);
    setCopiedJsx(true);
    setTimeout(() => setCopiedJsx(false), 1200);
  };

  return (
    <article
      onClick={() => setSelectedIcon({ name, Icon })}
      style={{
        ["--enter-delay" as any]: `${(name.charCodeAt(0) % 6) * 80}ms`,
      }}
      className={`abs-card-icon-anim group animate-in fade-in duration-500 relative flex flex-col items-center justify-center h-40 bg-abs-card-background rounded-2xl border transition-all overflow-hidden hover:border-abs-brand-primary ${
        isSelected ? "border-abs-brand-primary" : "border-abs-card-border"
      }`}
    >
      <div className="flex flex-col items-center group-hover:opacity-40 transition-opacity duration-300 icon">
        <span className="icon-inner">
          <Icon width={size} height={size} fill={color} />
        </span>

        <span
          className={`mt-4 text-[10px] font-mono ${
            isSelected ? "text-abs-text-main" : "text-abs-text-muted/80"
          }`}
        >
          {Icon.metadata?.presentationName || name}
        </span>
      </div>

      <div className="absolute inset-0 bg-abs-background-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-3 overlay">
        <button
          className="w-full cursor-pointer py-1.5 text-[10px] font-bold text-abs-brand-primary border border-abs-brand-primary bg-abs-background-dark/80 rounded-lg hover:bg-abs-brand-primary hover:text-abs-text-main transition-all"
          onClick={handleCopySvg}
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

export default memo(CardIcon);
