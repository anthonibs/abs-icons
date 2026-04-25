import { memo, useRef, useState, useEffect, useMemo } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import CardIcon from "../components/CardIcon"
import useListIcons from "../hooks/useListIcons"

const CARD_HEIGHT = 158
const GAP = 24
const MIN_CARD_WIDTH = 160
const VIEWPORT_OFFSET = 260
const MIN_VIEWPORT_HEIGHT = 420
const MAX_VIEWPORT_HEIGHT = 820

const ListIcons = () => {
  const { icons, sizeIcon, colorIcon } = useListIcons()

  const parentRef = useRef<HTMLElement | null>(null)
  const [columns, setColumns] = useState(4)

  useEffect(() => {
    if (!parentRef.current) return
    let timeoutId: number

    const observer = new ResizeObserver((entries) => {
      window.clearTimeout(timeoutId)

      timeoutId = window.setTimeout(() => {
        const { width } = entries[0].contentRect
        const cols = Math.floor((width + GAP) / (MIN_CARD_WIDTH + GAP))
        setColumns(Math.max(1, cols))
      }, 150)
    })

    observer.observe(parentRef.current)

    return () => {
      observer.disconnect()
      window.clearTimeout(timeoutId)
    }
  }, [])

  const rows = useMemo(() => {
    const chunked = []
    for (let i = 0; i < icons.length; i += columns) {
      chunked.push(icons.slice(i, i + columns))
    }
    return chunked
  }, [icons, columns])

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => CARD_HEIGHT + GAP,
    overscan: 5,
  })

  useEffect(() => {
    parentRef.current?.scrollTo({ top: 0, behavior: "auto" })
    rowVirtualizer.scrollToIndex(0, { align: "start" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [icons])

  return (
    <section
      ref={parentRef}
      className="w-full relative abs-scrollbar pr-3"
      style={{
        height: `clamp(${MIN_VIEWPORT_HEIGHT}px, calc(100vh - ${VIEWPORT_OFFSET}px), ${MAX_VIEWPORT_HEIGHT}px)`,
        overflow: "auto",
        contain: "strict",
      }}
    >
      {icons.length === 0 ? (
        <div className="py-20 text-center text-abs-text-muted">
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
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const rowItems = rows[virtualRow.index]

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
            )
          })}
        </div>
      )}
    </section>
  )
}

export default memo(ListIcons)
