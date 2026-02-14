import { useRef } from "react";
import useData from "../store/useData";

const min = 16;
const max = 128;

const SizeControl = () => {
  const sizeIcon = useData((state) => state.sizeIcon);
  const setSizeIcon = useData((state) => state.setSizeIcon);

  const timeoutRef = useRef<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-xs font-medium text-abs-text-muted">
          Icon Size
        </label>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          value={sizeIcon}
          className="w-full h-1 bg-abs-card-border/60 rounded-full appearance-none cursor-pointer accent-abs-brand-primary "
          onChange={(e) => {
            const val = Number(e.target.value);
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = window.setTimeout(() => {
              setSizeIcon(val);
            }, 120);
          }}
        />

        <span className="text-xs font-mono text-abs-brand-primary">
          {sizeIcon}px
        </span>
      </div>
      <div className="flex justify-between text-[10px] text-abs-text-muted font-mono">
        <span>{min}px</span>
        <span>{max}px</span>
      </div>
    </div>
  );
};

export default SizeControl;
