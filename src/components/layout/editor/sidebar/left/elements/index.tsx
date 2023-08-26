import icons from "@/assets";
import { IPELMT } from "@/editor/core/elements/type";
import { useElement } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import { LayerOrderElements } from "@/editor/core/hooks/elements/jotai";
import { IKeyTool } from "@/editor/core/hooks/tool/types";
import themeColors from "@/themes";
import { AtomIcon, AtomText, AtomWrapper, isDarkLight } from "@whil/ui";
import { useAtomValue } from "jotai";
import { FC, ReactNode, useCallback } from "react";

type Props = {
  children?: ReactNode;
};

type IElementsIcons = {
  [key in IKeyTool]?: string;
};

const ElementsIcons: IElementsIcons = {
  BOX: icons.box,
  CIRCLE: icons.circle,
  IMAGE: icons.image,
  TEXT: icons.text,
  LINE: icons.line,
  MOVE: icons.cursor,
  GROUP: icons.group,
  DRAW: icons.peentool,
};

const ElementsList: FC<Props> = () => {
  const { dragSetState, dragState, handleOrderElements } = useElements();

  const { handleSetElement, element } = useElement();

  const getColor = useCallback(
    (id: string) => {
      return element?.id === id
        ? isDarkLight(` ${themeColors.primary}`)
        : "white";
    },
    [element]
  );
  const elementsMemo = useAtomValue(LayerOrderElements);

  return (
    <AtomWrapper
      width="100%"
      display="flex"
      flexDirection="column"
      customCSS={(css) => css`
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      `}
    >
      <AtomWrapper padding="0.5em 0.7em" justifyContent="space-between">
        <AtomText color="white" fontWeight={"bold"} fontSize="small">
          Elements
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        customCSS={(css) => css`
          height: 20rem;
          overflow: hidden;
          overflow-x: hidden;

          &:hover {
            overflow-y: scroll;

            ::-webkit-scrollbar {
              width: 6px;
            }
            ::-webkit-scrollbar-thumb {
              background: #ffffff67;
              border-radius: 99px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: ${themeColors.white};
              box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
            }
          }
          display: flex;
          justify-content: flex-start;
        `}
        width="100%"
        flexDirection="column"
      >
        {elementsMemo?.map((item) => (
          <>
            <AtomWrapper
              key={item?.id}
              height="auto"
              className="CursorPointer"
              draggable={true}
              onDragStart={() => {
                dragSetState({
                  start: item,
                  enter: {},
                });
              }}
              onDragEnter={(event) => {
                event.preventDefault();
                event.dataTransfer.getData("text/plain");
                if (dragState?.start?.id !== item?.id) {
                  dragSetState((prev) => ({
                    ...prev,
                    enter: item,
                  }));
                }
              }}
              onDragEnd={() => {
                if (dragState?.start?.id !== dragState?.enter?.id) {
                  handleOrderElements();
                }
                dragSetState({
                  start: {} as IPELMT,
                  enter: {} as IPELMT,
                });
              }}
              customCSS={(css) => css`
                width: 100%;
                border: 1px solid ${themeColors.dark};
                user-select: none !important;
                opacity: 0.8;
                ${element.id === item?.id &&
                css`
                  border: 1px solid ${themeColors.primary};
                  background-color: ${themeColors.primary};
                  opacity: 1;
                `}
                ${dragState?.enter?.id === item?.id &&
                css`
                  background-color: ${themeColors.primary};
                `}
                &:hover {
                  border: 1px solid ${themeColors.primary};
                  opacity: 1;
                }
                cursor: move;
              `}
              padding="0.35em 0.7em"
              flexDirection="row"
              alignItems="center"
              gap="5px"
              onClick={() => handleSetElement(item)}
            >
              <AtomIcon
                src={ElementsIcons?.[`${item?.tool}` as IKeyTool]}
                color="default"
                height="1em"
                width="1em"
                customCSS={(css) => css`
                  svg {
                    path {
                      stroke: #ffffff;
                    }
                    line {
                      stroke: #ffffff;
                    }
                  }
                `}
              />
              <AtomText
                color={getColor(item?.id as string)}
                cursor="pointer"
                customCSS={(css) => css`
                  font-size: small;
                  cursor: grab !important;
                  &:active {
                    cursor: grabbing !important;
                  }
                `}
              >
                {item?.view_position}
              </AtomText>
              <AtomText
                color={getColor(item?.id as string)}
                cursor="pointer"
                customCSS={(css) => css`
                  user-select: none;
                  white-space: nowrap;
                  overflow: hidden;
                  font-size: small;
                  text-overflow: ellipsis;
                  &::first-letter {
                    text-transform: uppercase;
                  }
                  text-transform: lowercase;
                `}
              >
                {item?.text || item.tool}
              </AtomText>
            </AtomWrapper>
          </>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ElementsList;
