/* eslint-disable react-hooks/exhaustive-deps */
import { IParamsElement } from "@/editor/core/elements/type";
import { useElement, useTool } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import useGroups from "@/editor/core/hooks/groups/hook";
import useSelect from "@/editor/core/hooks/select";
import useCallStkcTime from "@/hooks/useCallTime";
import themeColors from "@/themes";
import { AtomInput, AtomText, AtomWrapper } from "@whil/ui";
import { FC, useCallback } from "react";

const SidebarBorderFC: FC = () => {
  const { SelectedChangeElement, handleSelectedChangeElement } = useSelect();
  const { handleSetElement } = useElement();
  const { handleSetElements } = useElements();
  const { setTool } = useTool();
  const { handleAddGroup } = useGroups();

  const { setTimer } = useCallStkcTime({
    callback: () => {
      handleSetElement(SelectedChangeElement);

      if (SelectedChangeElement?.tool === "GROUP") {
        handleAddGroup(SelectedChangeElement);
      } else {
        handleSetElements(SelectedChangeElement);
      }
    },
    ms: 250,
  });

  const handle = useCallback((params?: IParamsElement) => {
    setTimer(0);
    handleSelectedChangeElement({
      ...params,
    });
  }, []);

  return (
    <AtomWrapper display="flex" flexDirection="column" width="100%">
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          align-items: center;
          justify-content: flex-start;
        `}
      >
        <AtomText color="white" fontWeight={"bold"} fontSize="small">
          Borders
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          width: 100%;
          height: 160px;
        `}
      >
        <AtomWrapper
          customCSS={(css) => css`
            /* background-color: red; */
            border: 1px solid white;
            height: 100%;
            width: 100%;
            display: grid;
            grid-template-columns: 42px 1fr 42px;
            grid-template-rows: 30px 1fr 30px;
            background: linear-gradient(
              45deg,
              transparent 25%,
              rgba(255, 255, 255, 0.3) 25%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 50%,
              transparent 75%,
              rgba(251, 251, 251, 0.3) 75%
            );
            background-size: 8px 8px;
          `}
        >
          <AtomWrapper
            customCSS={(css) => css`
              background-color: BLUE;
            `}
          >
            <AtomInput
              readonly
              type="number"
              value={SelectedChangeElement.style?.borderRadiusTopLeft}
              onClick={() => {
                setTool("WRITING");
              }}
              onChange={(event) => {
                setTool("WRITING");
                handle({
                  style: {
                    ...SelectedChangeElement.style,
                    borderRadiusTopLeft: Number(event.target.value),
                  },
                });
              }}
              customCSS={(css) => css`
                font-size: small;
                color: white;
                width: 100%;
                border: 1px solid ${themeColors.dark};

                background-color: ${themeColors.dark};
              `}
            />
          </AtomWrapper>
          <AtomWrapper
            customCSS={(css) => css`
              border-left: 1px solid white;
              border-right: 1px solid white;
              /* border-bottom: 1px solid white; */
            `}
          >
            {/* 1 */}
          </AtomWrapper>
          <AtomWrapper
            customCSS={(css) => css`
              background-color: BLUE;
            `}
          >
            <AtomInput
              type="number"
              value={SelectedChangeElement.style?.borderRadiusTopRight}
              onClick={() => {
                setTool("WRITING");
              }}
              onChange={(event) => {
                setTool("WRITING");
                handle({
                  style: {
                    ...SelectedChangeElement.style,
                    borderRadiusTopRight: Number(event.target.value),
                  },
                });
              }}
              customCSS={(css) => css`
                /* padding: 0.2em; */
                font-size: small;
                color: white;
                width: 100%;
                border: 1px solid ${themeColors.dark};

                background-color: ${themeColors.dark};
              `}
            />
          </AtomWrapper>
          <AtomWrapper
            customCSS={(css) => css`
              border-top: 1px solid white;
              border-bottom: 1px solid white;
            `}
          >
            {/* 12 */}
          </AtomWrapper>
          <AtomWrapper>{/* 1 */}</AtomWrapper>
          <AtomWrapper
            customCSS={(css) => css`
              border-bottom: 1px solid white;
              border-top: 1px solid white;
            `}
          >
            {/* 1 */}
          </AtomWrapper>
          <AtomWrapper>
            <AtomInput
              readonly
              type="number"
              value={SelectedChangeElement.style?.borderRadiusBottomLeft}
              onClick={() => {
                setTool("WRITING");
              }}
              onChange={(event) => {
                setTool("WRITING");
                handle({
                  style: {
                    ...SelectedChangeElement.style,
                    borderRadiusBottomLeft: Number(event.target.value),
                  },
                });
              }}
              customCSS={(css) => css`
                font-size: small;
                color: white;
                width: 100%;
                border: 1px solid ${themeColors.dark};

                background-color: ${themeColors.dark};
              `}
            />
          </AtomWrapper>
          <AtomWrapper
            customCSS={(css) => css`
              border-left: 1px solid white;
              border-right: 1px solid white;
            `}
          >
            1
          </AtomWrapper>
          <AtomWrapper>
            <AtomInput
              type="number"
              value={SelectedChangeElement.style?.borderRadiusBottomRight}
              onClick={() => {
                setTool("WRITING");
              }}
              onChange={(event) => {
                setTool("WRITING");
                handle({
                  style: {
                    ...SelectedChangeElement.style,
                    borderRadiusBottomRight: Number(event.target.value),
                    isAllBorderRadius: false,
                  },
                });
              }}
              customCSS={(css) => css`
                font-size: small;
                color: white;
                width: 100%;
                border: 1px solid ${themeColors.dark};
                background-color: ${themeColors.dark};
              `}
            />
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
      {/* <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr !important;
          gap: 1em;
        `}
      >
        <AtomWrapper gap="0.4em" gridColumn="1" gridRow="1">
          <AtomText color="white" width="5em">
            All-B
          </AtomText>
          <AtomInput
            readonly
            type="number"
            value={SelectedChangeElement.style?.borderRadiusBottomLeft}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              const borderRadius = Number(event.target.value);
              handle({
                style: {
                  ...SelectedChangeElement.style,
                  borderRadiusBottomLeft: borderRadius,
                  borderRadiusBottomRight: borderRadius,
                  borderRadiusTopLeft: borderRadius,
                  borderRadiusTopRight: borderRadius,
                },
              });
            }}
            customCSS={(css) => css`
              padding: 0.2em;
              color: white;
              width: 100%;
              border: 1px solid ${themeColors.dark};
              &:hover {
                border: 1px solid ${themeColors.white};
              }
              background-color: ${themeColors.dark};
            `}
          />
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr !important;
          gap: 1em;
        `}
      >
        <AtomWrapper gap="0.4em" gridColumn="1" gridRow="1">
          <AtomText color="white" width="1.5em">
            x1
          </AtomText>
          <AtomInput
            readonly
            type="number"
            value={SelectedChangeElement.style?.borderRadiusTopLeft}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                style: {
                  ...SelectedChangeElement.style,
                  borderRadiusTopLeft: Number(event.target.value),
                },
              });
            }}
            customCSS={(css) => css`
              padding: 0.2em;
              color: white;
              width: 100%;
              border: 1px solid ${themeColors.dark};
              &:hover {
                border: 1px solid ${themeColors.white};
              }
              background-color: ${themeColors.dark};
            `}
          />
        </AtomWrapper>
        <AtomWrapper gap="0.4em" gridColumn="2" gridRow="1">
          <AtomText color="white" width="1.5em">
            x2
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.style?.borderRadiusTopRight}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                style: {
                  ...SelectedChangeElement.style,
                  borderRadiusTopRight: Number(event.target.value),
                },
              });
            }}
            customCSS={(css) => css`
              padding: 0.2em;
              color: white;
              width: 100%;
              border: 1px solid ${themeColors.dark};
              &:hover {
                border: 1px solid ${themeColors.white};
              }
              background-color: ${themeColors.dark};
            `}
          />
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr !important;
          gap: 1em;
        `}
      >
        <AtomWrapper gap="0.4em" gridColumn="1" gridRow="1">
          <AtomText color="white" width="1.5em">
            y1
          </AtomText>
          <AtomInput
            readonly
            type="number"
            value={SelectedChangeElement.style?.borderRadiusBottomLeft}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                style: {
                  ...SelectedChangeElement.style,
                  borderRadiusBottomLeft: Number(event.target.value),
                },
              });
            }}
            customCSS={(css) => css`
              padding: 0.2em;
              color: white;
              width: 100%;
              border: 1px solid ${themeColors.dark};
              &:hover {
                border: 1px solid ${themeColors.white};
              }
              background-color: ${themeColors.dark};
            `}
          />
        </AtomWrapper>
        <AtomWrapper gap="0.4em" gridColumn="2" gridRow="1">
          <AtomText color="white" width="1.5em">
            y2
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.style?.borderRadiusBottomRight}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                style: {
                  ...SelectedChangeElement.style,
                  borderRadiusBottomRight: Number(event.target.value),
                  isAllBorderRadius: false,
                },
              });
            }}
            customCSS={(css) => css`
              padding: 0.2em;
              color: white;
              width: 100%;
              border: 1px solid ${themeColors.dark};
              &:hover {
                border: 1px solid ${themeColors.white};
              }
              background-color: ${themeColors.dark};
            `}
          />
        </AtomWrapper>
      </AtomWrapper> */}
    </AtomWrapper>
  );
};

export default SidebarBorderFC;
