import icons from "@/assets";
import { useElement, useTool } from "@/editor/core/hooks";
import { IKeyTool } from "@/editor/core/hooks/tool/types";
import themeColors from "@/themes";
import { AtomButton, AtomIcon, AtomWrapper } from "@whil/ui";
import { FC } from "react";

type Methods = {
  icon: string;
  keyMethod: IKeyTool;
};

const METHODS: Methods[] = [
  {
    icon: icons.cursor,
    keyMethod: "MOVE",
  },
  {
    icon: icons.group,
    keyMethod: "GROUP",
  },
  {
    icon: icons.box,
    keyMethod: "BOX",
  },
  {
    icon: icons.circle,
    keyMethod: "CIRCLE",
  },
  {
    icon: icons.line,
    keyMethod: "LINE",
  },
  {
    icon: icons.image,
    keyMethod: "IMAGE",
  },
  {
    icon: icons.text,
    keyMethod: "TEXT",
  },
  {
    icon: icons.code,
    keyMethod: "CODE",
  },
  // {
  //   icon: icons.peentool,
  //   keyMethod: "DRAW",
  // },
];

const LayoutEditorTop: FC = () => {
  const { tool, setTool } = useTool();
  const { handleEmptyElement } = useElement();

  return (
    <AtomWrapper
      padding="0em 0.4em"
      customCSS={(css) => css`
        grid-column: 1 / 4;
        grid-row: 1;
        height: auto;
        background-color: ${themeColors.dark};
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        display: flex;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1em;
        z-index: 999999999;
        position: absolute;
        padding: 0.4em;
        border-radius: 12px;
        top: 0.5em;
      `}
    >
      <AtomWrapper
        flexDirection="row"
        width="auto"
        alignItems="center"
        justifyContent="flex-start"
      >
        {METHODS?.map((item) => {
          const isSelected = item?.keyMethod === tool;
          return (
            <AtomButton
              key={item?.keyMethod}
              borderRadius="8px"
              width="2em"
              height="2em"
              border="0px"
              alignItems="center"
              justifyContent="center"
              backgroundColor={isSelected ? "#0496ff" : "transparent"}
              onClick={() => {
                setTool(item.keyMethod);
                handleEmptyElement();
              }}
              className="CursorPointer"
            >
              <AtomIcon
                src={item?.icon}
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
            </AtomButton>
          );
        })}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default LayoutEditorTop;
