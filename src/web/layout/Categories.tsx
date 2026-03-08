import KEY_WORDS_CATEGORIES_MAP from "../../helpers/categories.json";
import useData from "../store/useData";

const useListIcons = () => {
  const category = useData((state) => state.category);
  const setCategory = useData((state) => state.setCategory);

  const categories = ["general", ...Object.keys(KEY_WORDS_CATEGORIES_MAP)]
    ?.sort()
    .map((key) => ({
      key,
    }));

  return {
    categories,
    categorySelected: category,
    setCategory,
  };
};

const Categories = () => {
  const { categories, categorySelected, setCategory } = useListIcons();

  return (
    <nav className="mt-12 bg-abs-card-background border border-abs-card-border rounded-lg p-4">
      <ul className="flex flex-col gap-3">
        <li
          className={`text-sm hover:text-abs-text-main cursor-pointer capitalize ${
            categorySelected === "all"
              ? "text-abs-brand-primary"
              : "text-abs-text-muted"
          }`}
          onClick={() => setCategory("all")}
        >
          all categories
        </li>
        {categories?.map((category) => (
          <li
            key={category.key}
            className={`text-sm hover:text-abs-text-main cursor-pointer capitalize ${
              categorySelected === category.key
                ? "text-abs-brand-primary"
                : "text-abs-text-muted "
            }`}
            onClick={() => setCategory(category.key)}
          >
            {category.key}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
