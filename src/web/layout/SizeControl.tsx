import { useRef, useState, useEffect, memo } from "react";
import useData from "../store/useData";

const min = 16;
const max = 128;

const SizeControl = () => {
  const sizeIcon = useData((state) => state.sizeIcon);
  const setSizeIcon = useData((state) => state.setSizeIcon);

  const [localSize, setLocalSize] = useState<number>(sizeIcon);

  const isDragging = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isDragging.current) {
      setLocalSize(sizeIcon);
    }
  }, [sizeIcon]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setLocalSize(val);
    isDragging.current = true;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      setSizeIcon(val);
    }, 300);
  };

  const handleCommit = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    isDragging.current = false;
    setSizeIcon(localSize);
  };

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
          value={localSize}
          onChange={handleChange}
          onMouseUp={handleCommit}
          onTouchEnd={handleCommit}
          onKeyUp={(e) => {
            if (["Enter", "ArrowLeft", "ArrowRight"].includes(e.key)) {
              handleCommit();
            }
          }}
          className="abs-input-range"
        />

        <span className="text-xs font-mono text-abs-brand-primary w-12 text-right">
          {localSize}px
        </span>
      </div>
      <div className="flex justify-between text-[10px] text-abs-text-muted font-mono">
        <span>{min}px</span>
        <span>{max}px</span>
      </div>
    </div>
  );
};

export default memo(SizeControl);
