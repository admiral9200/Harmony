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
        <AtomText color="white" fontWeight={"bold"}>
          Border Radius
        </AtomText>
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
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SidebarBorderFC;
