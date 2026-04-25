import KEY_WORDS_CATEGORIES_MAP from "../../helpers/categories.json"
import useData from "../store/useData"

const useListIcons = () => {
  const category = useData((state) => state.category)
  const setCategory = useData((state) => state.setCategory)
  const setSearchQuery = useData((state) => state.setSearchQuery)

  const categories = [...Object.keys(KEY_WORDS_CATEGORIES_MAP)]
    ?.sort()
    .map((key) => ({
      key,
    }))

  return {
    categories,
    categorySelected: category,
    setCategory,
    setSearchQuery,
  }
}

const Categories = () => {
  const { categories, categorySelected, setCategory, setSearchQuery } =
    useListIcons()

  const handleCategorySelect = (categoryKey: string) => {
    setCategory(categoryKey)
    setSearchQuery("")
  }

  return (
    <nav className="mt-12 bg-abs-card-background border border-abs-card-border rounded-lg p-4">
      <ul className="flex flex-col gap-1 max-h-[60vh] overflow-auto pr-1 abs-scrollbar">
        <li className="list-none">
          <button
            type="button"
            aria-current={categorySelected === "all" ? "true" : "false"}
            className={`w-full text-left text-sm px-2 py-1.5 rounded-md hover:text-abs-text-main hover:bg-abs-terminal/60 cursor-pointer capitalize ${
              categorySelected === "all"
                ? "text-abs-brand-primary bg-abs-brand-primary/10"
                : "text-abs-text-muted"
            }`}
            onClick={() => {
              handleCategorySelect("all")
            }}
          >
            all categories
          </button>
        </li>
        {categories?.map((category) => (
          <li key={category.key} className="list-none">
            <button
              type="button"
              aria-current={
                categorySelected === category.key ? "true" : "false"
              }
              className={`w-full text-left text-sm px-2 py-1.5 rounded-md hover:text-abs-text-main hover:bg-abs-terminal/60 cursor-pointer capitalize ${
                categorySelected === category.key
                  ? "text-abs-brand-primary bg-abs-brand-primary/10"
                  : "text-abs-text-muted"
              }`}
              onClick={() => {
                handleCategorySelect(category.key)
              }}
            >
              {category.key}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Categories
