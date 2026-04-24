import useData from "../store/useData";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SearchOutlineIcon } from "../../ui/icons";

const variants = [
  { label: "Outline", value: "outline" },
  { label: "Solid", value: "solid" },
] as const;

const Search = () => {
  const searchQuery = useData((state) => state.searchQuery);
  const setSearchQuery = useData((state) => state.setSearchQuery);

  const variant = useData((state) => state.variants);
  const setVariant = useData((state) => state.setVariants);

  const [inputValue, setInputValue] = useState(searchQuery);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeSearchIcon = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearSearch = () => {
    setInputValue("");
    setSearchQuery("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 250);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [inputValue, setSearchQuery]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTypingField =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (event.key === "/" && !isTypingField) {
        event.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }

      if (
        event.key === "Escape" &&
        document.activeElement === inputRef.current
      ) {
        clearSearch();
      }
    };

    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <nav className="mb-10 flex flex-col md:flex-row gap-6 justify-between items-center">
      <div className="relative w-full md:max-w-lg border border-abs-card-border rounded-xl text-abs-text-muted transition-colors focus-within:border-abs-brand-primary focus-within:text-abs-brand-primary">
        <label
          htmlFor="search-icons"
          aria-label="Search icons by name or tag"
          className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors"
        >
          <SearchOutlineIcon />
        </label>

        <input
          ref={inputRef}
          id="search-icons"
          className="block w-full pl-12 pr-4 py-3 bg-abs-card-background rounded-xl text-sm text-abs-text-main placeholder-text-muted focus:outline-none focus:ring-0 transition-all shadow-sm border-none"
          placeholder="Search icons by name ( / )"
          autoComplete="off"
          type="text"
          value={inputValue}
          onChange={onChangeSearchIcon}
        />

        {inputValue.length > 0 && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-2 my-auto h-8 px-2 text-xs text-abs-text-muted hover:text-abs-text-main"
            aria-label="Clear search"
          >
            Clear
          </button>
        )}
      </div>

      <div className="flex space-x-5 items-center">
        <div className="relative flex bg-abs-terminal rounded-xl p-1 h-11 border border-abs-card-border overflow-hidden">
          <span
            aria-hidden
            className={`pointer-events-none absolute top-1 bottom-1 left-1 w-22 rounded-lg bg-abs-brand-primary shadow-sm`}
            style={{
              transform: `translateX(${
                variant === "all" ? 210 : variant === "outline" ? 0 : 100
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

        <span className="h-6 w-px block bg-abs-card-border"></span>

        <button
          className={`cursor-pointer text-xs font-semibold h-11 py-2 px-4 border rounded-xl ${
            variant === "all"
              ? "text-abs-brand-primary border-abs-brand-primary bg-abs-brand-primary/10"
              : "text-abs-text-muted  border-abs-card-border"
          }`}
          onClick={() => setVariant("all")}
        >
          All
        </button>
      </div>
    </nav>
  );
};

export default Search;
