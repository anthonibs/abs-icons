import useData from "../store/useData";
import { ChangeEvent, useEffect, useRef } from "react";

import { SearchOutlineIcon } from "@anthonibs/abs-icons";

const variants = [
  { label: "All Icons", value: "all" },
  { label: "Outline", value: "outline" },
  { label: "Solid", value: "solid" },
] as const;

const Search = () => {
  const setSearchQuery = useData((state) => state.setSearchQuery);

  const variant = useData((state) => state.variants);
  const setVariant = useData((state) => state.setVariants);

  const timerRef = useRef<number | null>(null);

  const onChangeSearchIcon = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setSearchQuery(value);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <nav className="mb-10 flex flex-col md:flex-row gap-6 justify-between items-center">
      <div className="relative w-full md:max-w-lg border border-abs-card-border rounded-xl text-abs-text-muted transition-colors focus-within:border-yellow-400 focus-within:text-yellow-400">
        <label
          htmlFor="search-icons"
          aria-label="Search icons by name or tag"
          className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors"
        >
          <SearchOutlineIcon />
        </label>

        <input
          id="search-icons"
          className="block w-full pl-12 pr-4 py-3 bg-abs-card-background rounded-xl text-sm text-abs-text-main placeholder-text-muted focus:outline-none focus:ring-0 transition-all shadow-sm border-none"
          placeholder="Search from 285 icons..."
          type="text"
          onChange={onChangeSearchIcon}
        />
      </div>

      <div className="relative flex bg-abs-card-background rounded-xl p-1 border border-abs-card-border overflow-hidden">
        <span
          aria-hidden
          className="pointer-events-none absolute top-1 bottom-1 left-1 w-22 rounded-lg bg-abs-brand-primary shadow-sm"
          style={{
            transform: `translateX(${
              variant === "all" ? 0 : variant === "outline" ? 100 : 200
            }%)`,
            transition: "transform 250ms cubic-bezier(0.2,0.8,0.2,1)",
            willChange: "transform",
          }}
        />

        {variants.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setVariant(value)}
            aria-pressed={variant === value}
            className={`relative z-10 px-5 cursor-pointer min-w-22 py-2 text-xs font-semibold rounded-lg transition-colors ${
              variant === value
                ? "text-slate-900"
                : "text-abs-text-muted hover:text-abs-text-main"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Search;
