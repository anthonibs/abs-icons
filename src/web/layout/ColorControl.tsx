import { useEffect, useRef } from "react";
import useData from "../store/useData";

const ColorControl = () => {
  const colorTimerRef = useRef<number | null>(null);

  const colorIcon = useData((state) => state.colorIcon);
  const setColorIcon = useData((state) => state.setColorIcon);

  useEffect(() => {
    return () => {
      if (colorTimerRef.current) clearTimeout(colorTimerRef.current);
    };
  }, []);

  return (
    <div className="space-y-4">
      <label className="text-xs font-medium text-abs-text-muted block">
        Stroke Color
      </label>

      <div className="flex flex-col gap-3">
        <div className="flex items-center bg-background-dark border border-abs-card-border rounded-xl px-4 py-3 group focus-within:border-abs-brand-primary transition-all">
          <span className="text-xs font-mono text-abs-text-muted mr-2">
            HEX
          </span>

          <input
            className="bg-transparent border-none outline-none p-0 text-xs font-mono text-abs-text-muted focus:ring-0 w-full"
            type="text"
            value={colorIcon}
            onChange={(e) => setColorIcon(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl border-2 border-white/10 shadow-[0_0_15px_rgba(212,175,55,0.3)] cursor-pointer hover:scale-105 transition-transform shrink-0"
            style={{ backgroundColor: colorIcon }}
          >
            <input
              type="color"
              className="w-full h-full opacity-0 cursor-pointer"
              defaultValue={colorIcon}
              onChange={(e) => setColorIcon(e.target.value)}
              aria-label="Selecionar cor personalizada"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setColorIcon("#ffffff")}
              className="w-6 h-6 rounded-full bg-white border border-abs-card-border cursor-pointer"
              aria-label="Selecionar cor branca"
            ></button>
            <button
              onClick={() => setColorIcon("#a1a1aa")}
              className="w-6 h-6 rounded-full bg-zinc-400 border border-abs-card-border cursor-pointer"
              aria-label="Selecionar cor cinza"
            ></button>
            <button
              onClick={() => setColorIcon("#3b82f6")}
              className="w-6 h-6 rounded-full bg-blue-500 border border-abs-card-border cursor-pointer"
              aria-label="Selecionar cor azul"
            ></button>
            <button
              onClick={() => setColorIcon("#ef4444")}
              className="w-6 h-6 rounded-full bg-red-500 border border-abs-card-border cursor-pointer"
              aria-label="Selecionar cor vermelha"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorControl;
