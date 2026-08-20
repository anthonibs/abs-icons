import { memo, useEffect, useRef } from "react"

export type IconComponent = React.NamedExoticComponent<IconProps> & {
  metadata: IconMetadata
}

import Search from "./Search"
import useData from "../store/useData"
import PreviewIcon from "./PreviewIcon"
import SizeControl from "./SizeControl"
import ColorControl from "./ColorControl"
import { IconProps } from "../../ui/createIcon"
import { IconMetadata } from "../interfaces"
import Categories from "./Categories"
import { SettingsOutlineIcon } from "../../ui/icons"
import ListIcons from "./ListIcons"

const Content = () => {
  const handleReset = useData((state) => state.handleReset)
  const variant = useData((state) => state.variants)
  const category = useData((state) => state.category)
  const contentRef = useRef<HTMLElement>(null)
  const previousFiltersRef = useRef({ variant, category })

  useEffect(() => {
    if (
      previousFiltersRef.current.variant === variant &&
      previousFiltersRef.current.category === category
    ) {
      return
    }

    previousFiltersRef.current = { variant, category }
    contentRef.current?.scrollIntoView({ block: "start" })
  }, [category, variant])

  return (
    <main
      ref={contentRef}
      className="w-full max-w-350 mx-auto scroll-mt-20 px-4 py-12"
    >
      <div className="grid gap-8 md:grid-cols-[180px_1fr_280px] shrink-0 items-start sticky">
        <aside className="sticky top-24">
          <h2 className="text-2xl font-bold tracking-tight text-abs-text-main">
            Categories
          </h2>
          <Categories />
        </aside>

        <section>
          <div className="bg-abs-background z-10 pb-1 pt-4 sticky top-20">
            <Search />

            <header className="flex items-center gap-4 mb-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-abs-text-muted">
                Component Library
              </h2>
              <hr className="h-px grow border-abs-card-border" />
            </header>
          </div>

          <ListIcons />
        </section>

        <aside className="sticky top-24 md:w-70 md:max-w-80 bg-abs-card-background rounded-2xl border border-abs-card-border p-6 space-y-8">
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
      </div>
    </main>
  )
}

export default memo(Content)
