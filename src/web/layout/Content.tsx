import { memo } from "react";

export type IconComponent = React.NamedExoticComponent<IconProps> & {
  metadata: IconMetadata;
};

import { SettingsOutlineIcon } from "@anthonibs/abs-icons";

import Search from "./Search";
import useData from "../store/useData";
import ListIcons from "./ListIcons";
import PreviewIcon from "./PreviewIcon";
import SizeControl from "./SizeControl";
import ColorControl from "./ColorControl";
import { IconProps } from "../../ui/createIcon";
import { IconMetadata } from "../interfaces";

const Content = () => {
  const handleReset = useData((state) => state.handleReset);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-[1fr_280px]">
      <section className="grow flex flex-col min-w-0">
        <Search />

        <header className="flex items-center gap-4 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-abs-text-muted">
            Component Library
          </h2>

          <hr className="h-px grow border-abs-card-border" />
        </header>

        <ListIcons />
      </section>

      <aside className="md:w-70 md:max-w-80 shrink-0 h-fit bg-abs-card-background rounded-2xl border border-abs-card-border p-6 space-y-8 sticky top-24">
        <PreviewIcon />

        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-abs-card-border pb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-abs-text-main flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-abs-brand-primary">
                <SettingsOutlineIcon />
              </span>
              Properties
            </h3>

            <button
              onClick={handleReset}
              className="text-[10px] cursor-pointer px-2 py-0.5 outline-none focus-within:border-abs-brand-primary focus-within:ring-2 focus-within:ring-abs-brand-primary/30 border border-abs-card-border rounded hover:bg-zinc-800 text-abs-text-muted transition-colors"
            >
              Reset
            </button>
          </div>

          <SizeControl />
          <ColorControl />
        </div>

        <div className="pt-4 border-t border-abs-card-border">
          <p className="text-[10px] text-center text-abs-text-muted leading-relaxed">
            Copy icons directly from the grid for instant use in your
            components. Available in SVG and JSX formats.
          </p>
        </div>
      </aside>
    </main>
  );
};

export default memo(Content);
