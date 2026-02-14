import { EyeOutlineIcon } from "@anthonibs/abs-icons";
import useData from "../store/useData";
import { memo } from "react";

const PreviewIcon = () => {
  const selectedIcon = useData((state) => state.selectedIcon?.Icon);
  const sizeIcon = useData((state) => state.sizeIcon);
  const colorIcon = useData((state) => state.colorIcon);

  const Icon = selectedIcon;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-widest text-abs-text-main flex items-center gap-2">
          <span className="text-[18px] text-abs-brand-primary flex items-center">
            <EyeOutlineIcon size={18} />
          </span>
          Preview
        </h3>
      </div>

      <div className="abs-background-preview relative w-full aspect-square rounded-xl border border-card-border-dark inner-gold-glow flex items-center justify-center overflow-hidden bg-abs-card-background">
        <div
          className="absolute inset-0 opacity-[0.3] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(var(--primary-hover) 0.5px, transparent 0.5px)",
            backgroundSize: "16px 16px",
          }}
        ></div>

        {Icon ? (
          <span className="scale-180 z-10 text-primary drop-shadow-[0_0_12px_rgba(212,175,55,0.56)] transition-all duration-300">
            <Icon size={sizeIcon} color={colorIcon} />
          </span>
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] opacity-12 grayscale">
              <img
                src="/logo-abs-icons.webp"
                alt="Preview Placeholder"
                className="w-30 h-30 object-cover"
              />
            </div>

            <span className="relative z-10 text-xs text-abs-text-muted font-mono ">
              Waiting for selection...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(PreviewIcon);
