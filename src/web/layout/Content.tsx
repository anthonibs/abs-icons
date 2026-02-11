import {
  ComponentType,
  SVGProps,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import CardIcon from "../components/CardIcon";

import * as Icons from "@anthonibs/abs-icons";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const min = 16;
const max = 128;
const defaultSize = 24;
const defaultColor = "#D4AF37";

const variants = ["all", "filled", "outline"] as const;

const Content = () => {
  const [search, setSearch] = useState("");
  const [variant, setVariant] = useState<(typeof variants)[number]>("all");

  const timeoutRef = useRef<number | null>(null);

  const [size, setSize] = useState(defaultSize);
  const [color, setColor] = useState(defaultColor);

  const icons = useMemo(() => {
    return (Object.entries(Icons) as [string, IconComponent][])
      .filter(([name]) => name.toLowerCase().includes(search.toLowerCase()))
      .filter(([name]) => {
        if (variant === "filled") return name.includes("Filled");
        if (variant === "outline") return name.includes("Outline");
        return true;
      });
  }, [search, variant]);

  const [selectedIcon, setSelectedIcon] = useState<IconComponent | null>(
    icons[0]?.[1] || null,
  );

  const Icon = useMemo(() => {
    if (!selectedIcon) return null;
    return selectedIcon;
  }, [selectedIcon]);

  const handleReset = useCallback(() => {
    setSearch("");
    setVariant("all");
    setSize(defaultSize);
    setColor(defaultColor);
    setSelectedIcon(icons[0]?.[1] || null);
  }, []);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12">
      <section className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <nav className="grow flex flex-col min-w-0">
          <div className="mb-10 flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-text-muted text-[22px]">
                  X
                </span>
              </div>

              <input
                className="block w-full pl-12 pr-4 py-3 bg-abs-card-background border border-abs-card-border rounded-xl text-sm text-abs-text-main placeholder-text-muted focus:outline-none focus:border-abs-brand-primary focus:ring-1 focus:ring-abs-brand-primary transition-all shadow-sm"
                placeholder="Search from 285 icons..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setVariant("all")}
                className="px-5 cursor-pointer py-2 text-xs font-semibold rounded-lg text-abs-text-main"
              >
                All Icons
              </button>

              <div className="flex bg-abs-card-background rounded-xl p-1 border border-abs-card-border">
                <button
                  onClick={() => setVariant("outline")}
                  className="px-5 cursor-pointer py-2 text-xs font-semibold rounded-lg text-slate-900 bg-abs-brand-primary shadow-sm"
                >
                  Outline
                </button>
                <button
                  onClick={() => setVariant("filled")}
                  className="px-5 cursor-pointer py-2 text-xs font-semibold rounded-lg text-abs-text-muted hover:text-abs-text-main duration-200 transition-colors"
                >
                  Filled
                </button>
              </div>
            </div>
          </div>

          <header className="flex items-center gap-4 mb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-abs-text-muted">
              Component Library
            </h2>
            <div className="h-px grow bg-abs-card-border"></div>
          </header>

          <section className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
            {icons.map(([name, Icon]) => (
              <CardIcon
                key={name}
                name={name}
                Icon={Icon}
                size={size}
                color={color}
              />
            ))}
          </section>
        </nav>

        <aside className="w-80 shrink-0 h-fit bg-abs-card-background rounded-2xl border border-abs-card-border p-6 space-y-8 sticky top-24">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-widest text-abs-text-main flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-abs-brand-primary">
                  O
                </span>
                Preview
              </h3>
            </div>
            <div className="abs-background-preview relative w-full aspect-square rounded-xl border border-card-border-dark inner-gold-glow flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--primary-hover) 0.5px, transparent 0.5px)",
                  backgroundSize: "16px 16px",
                }}
              ></div>

              <span className="scale-180 text-primary drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                {Icon && <Icon width={size} height={size} fill={color} />}
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-abs-card-border pb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-abs-text-main flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-abs-brand-primary">
                  X
                </span>
                Properties
              </h3>
              <button
                onClick={handleReset}
                className="text-[10px] cursor-pointer px-2 py-0.5 border border-abs-card-border rounded hover:bg-zinc-800 text-abs-text-muted transition-colors"
              >
                Reset
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-abs-text-muted">
                  Icon Size
                </label>
                <span className="text-xs font-mono text-abs-brand-primary bg-abs-brand-primary/10 px-2 py-0.5 rounded">
                  32px
                </span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={min}
                  max={max}
                  defaultValue={size}
                  className="w-full h-1 bg-abs-card-border/60 rounded-full appearance-none cursor-pointer accent-abs-brand-primary "
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                    }

                    timeoutRef.current = window.setTimeout(() => {
                      setSize(val);
                    }, 120);
                  }}
                />

                <span className="text-xs font-mono text-abs-brand-primary">
                  {size}px
                </span>
              </div>
              <div className="flex justify-between text-[10px] text-abs-text-muted font-mono">
                <span>{min}px</span>
                <span>{max}px</span>
              </div>
            </div>
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
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl border-2 border-white/10 shadow-[0_0_15px_rgba(212,175,55,0.3)] cursor-pointer hover:scale-105 transition-transform shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    <input
                      type="color"
                      className="w-full h-full opacity-0 cursor-pointer"
                      defaultValue={color}
                      onChange={(e) => {
                        const input = e.target as HTMLInputElement & {
                          dataset: any;
                        };
                        const val = input.value;
                        if (input.dataset.__colorTimeout) {
                          clearTimeout(Number(input.dataset.__colorTimeout));
                        }
                        input.dataset.__colorTimeout = String(
                          window.setTimeout(() => {
                            setColor(val);
                          }, 300),
                        );
                      }}
                    />
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <div className="w-6 h-6 rounded-full bg-white border border-abs-card-border cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-zinc-400 border border-abs-card-border cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-500 border border-abs-card-border cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-red-500 border border-abs-card-border cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-abs-card-border">
            <p className="text-[10px] text-center text-abs-text-muted leading-relaxed">
              Copy icons directly from the grid for instant use in your
              components. Available in SVG and JSX formats.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Content;
