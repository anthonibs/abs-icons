import { memo, useRef, useState, useEffect, useMemo } from "react";
import CardIcon from "../components/CardIcon";
import useListIcons from "../hooks/useListIcons";
import { useVirtualizer } from "@tanstack/react-virtual";

const CARD_HEIGHT = 158;
const GAP = 24;
const MIN_CARD_WIDTH = 160;

const ListIcons = () => {
  const { icons, sizeIcon, colorIcon } = useListIcons();

  const parentRef = useRef(null);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    if (!parentRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      const cols = Math.floor((width + GAP) / (MIN_CARD_WIDTH + GAP));
      setColumns(Math.max(1, cols));
    });

    observer.observe(parentRef.current);
    return () => observer.disconnect();
  }, []);

  const rows = useMemo(() => {
    const chunked = [];
    for (let i = 0; i < icons.length; i += columns) {
      chunked.push(icons.slice(i, i + columns));
    }
    return chunked;
  }, [icons, columns]);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => CARD_HEIGHT + GAP,
    overscan: 3,
  });

  return (
    <section
      ref={parentRef}
      className="w-full relative abs-scrollbar pr-3"
      style={{
        height: `724px`,
        overflow: "auto",
      }}
    >
      {icons.length === 0 ? (
        <div className="py-20 text-center text-abs-text-muted ">
          It seems that there are no icons matching the current filters. Try
          adjusting the filters to find the icons you need.
        </div>
      ) : (
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
          className="abs-scrollbar"
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const rowItems = rows[virtualRow.index];

            return (
              <div
                key={virtualRow.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${CARD_HEIGHT}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                  display: "grid",
                  gridTemplateColumns: `repeat(${columns}, minmax(${MIN_CARD_WIDTH}px, 1fr))`,
                  gap: `${GAP}px`,
                }}
              >
                {rowItems.map(([name, Icon]) => (
                  <CardIcon
                    key={name}
                    name={name}
                    Icon={Icon}
                    size={sizeIcon}
                    color={colorIcon}
                  />
                ))}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default memo(ListIcons);
