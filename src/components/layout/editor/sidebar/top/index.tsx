import icons from "@/assets";
import AtomModalControls from "@/components/atoms/AtomModalControls";
import { useElement, useTool } from "@/editor/core/hooks";
import { IKeyTool } from "@/editor/core/hooks/tool/types";
import themeColors from "@/themes";
import { AtomButton, AtomIcon, AtomText, AtomWrapper } from "@whil/ui";
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
  // {
  //   icon: "https://res.cloudinary.com/whil/image/upload/v1682651572/app/harmony/format-square_jidxxt.svg",
  //   keyMethod: "FRAME",
  // },
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
    icon: icons.peentool,
    keyMethod: "DRAW",
  },
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
        background-color: ${themeColors.dark};
        height: auto;
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        display: flex;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1em;
        z-index: 999999999999999999999;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
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
              borderRadius="0px"
              padding="0.7em"
              border="0px"
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
                height="25px"
                width="20px"
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
      <AtomWrapper alignItems="center" justifyContent="center">
        <AtomText color="white" fontWeight={"bold"}>
          Harmony
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        width="auto"
        alignItems="center"
        flexDirection="row"
        justifyContent="flex-end"
        gap="10px"
      >
        <AtomModalControls />
        <AtomButton
          isFocus
          backgroundColor={`${themeColors.dark}`}
          onClick={() => {
            window.open("https://github.com/Whil117/Harmony", "_blank");
          }}
          customCSS={(css) => css`
            border-radius: 0em;
            border: 0px;
            border-radius: 0px;
            cursor: pointer;
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 115 112"
            fill="none"
          >
            <path
              d="M57.4998 0.416748C50.0035 0.416748 42.5807 1.89325 35.655 4.76196C28.7293 7.63066 22.4365 11.8354 17.1358 17.1361C6.43062 27.8413 0.416504 42.3606 0.416504 57.5001C0.416504 82.7309 16.7994 104.137 39.4615 111.729C42.3157 112.186 43.229 110.416 43.229 108.875V99.228C27.4169 102.653 24.049 91.5788 24.049 91.5788C21.4232 84.9572 17.7128 83.1876 17.7128 83.1876C12.5182 79.6484 18.1123 79.7626 18.1123 79.7626C23.8207 80.1622 26.8461 85.6422 26.8461 85.6422C31.8123 94.3188 40.2036 91.7501 43.4573 90.3801C43.9711 86.6697 45.4553 84.158 47.0536 82.7309C34.3811 81.3038 21.0807 76.3947 21.0807 54.6459C21.0807 48.3097 23.2498 43.2292 26.9603 39.1763C26.3894 37.7492 24.3915 31.8126 27.5311 24.1063C27.5311 24.1063 32.3261 22.5651 43.229 29.9288C47.7386 28.673 52.6478 28.0451 57.4998 28.0451C62.3519 28.0451 67.2611 28.673 71.7707 29.9288C82.6736 22.5651 87.4686 24.1063 87.4686 24.1063C90.6082 31.8126 88.6103 37.7492 88.0394 39.1763C91.7498 43.2292 93.919 48.3097 93.919 54.6459C93.919 76.4517 80.5615 81.2467 67.8319 82.6738C69.8869 84.4434 71.7707 87.9255 71.7707 93.2342V108.875C71.7707 110.416 72.684 112.243 75.5953 111.729C98.2573 104.08 114.583 82.7309 114.583 57.5001C114.583 50.0038 113.107 42.5809 110.238 35.6552C107.369 28.7296 103.165 22.4367 97.8638 17.1361C92.5632 11.8354 86.2703 7.63066 79.3447 4.76196C72.419 1.89325 64.9961 0.416748 57.4998 0.416748Z"
              fill="white"
            />
          </svg>
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default LayoutEditorTop;
