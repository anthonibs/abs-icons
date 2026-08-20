import { memo, useLayoutEffect, useRef, useState } from "react"
import CardIcon from "../components/CardIcon"
import useListIcons from "../hooks/useListIcons"

import { useWindowVirtualizer } from "@tanstack/react-virtual"

const ListIcons = () => {
  const { icons, sizeIcon, colorIcon } = useListIcons()

  const listRef = useRef<HTMLDivElement | null>(null)
  const [scrollMargin, setScrollMargin] = useState(0)

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScrollMargin(listRef.current?.offsetTop ?? 0)
  }, [])

  const virtualizer = useWindowVirtualizer({
    count: Math.ceil(icons.length / 4),
    estimateSize: () => 180,
    overscan: 5,
    scrollMargin,
  })

  return (
    <section className="w-full relative pr-3">
      {icons.length === 0 ? (
        <div className="py-20 text-center text-abs-text-muted">
          It seems that there are no icons matching the current filters. Try
          adjusting the filters to find the icons you need.
        </div>
      ) : (
        <div ref={listRef} className="List">
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {virtualizer.getVirtualItems().map((virtualRow) => {
              const rowStartIndex = virtualRow.index * 4
              const rowIcons = icons.slice(rowStartIndex, rowStartIndex + 4)

              return (
                <div
                  key={virtualRow.key}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${
                      virtualRow.start - virtualizer.options.scrollMargin
                    }px)`,
                  }}
                  className="grid grid-cols-4 gap-4"
                >
                  {rowIcons.map(([name, Icon]) => (
                    <CardIcon
                      key={name}
                      name={name}
                      Icon={Icon}
                      size={sizeIcon}
                      color={colorIcon}
                    />
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}

export default memo(ListIcons)
