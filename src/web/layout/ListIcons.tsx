import { memo } from "react";
import CardIcon from "../components/CardIcon";
import useListIcons from "../hooks/useListIcons";

const ListIcons = () => {
  const { icons, sizeIcon, colorIcon } = useListIcons();

  return (
    <section className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
      {icons.map(([name, Icon]) => (
        <CardIcon
          key={name}
          name={name}
          Icon={Icon}
          size={sizeIcon}
          color={colorIcon}
        />
      ))}

      {icons.length === 0 && (
        <div className="col-span-full py-20 text-center text-abs-text-muted">
          It seems that there are no icons matching the current filters. Try
          adjusting the filters to find the icons you need.
        </div>
      )}
    </section>
  );
};

export default memo(ListIcons);
