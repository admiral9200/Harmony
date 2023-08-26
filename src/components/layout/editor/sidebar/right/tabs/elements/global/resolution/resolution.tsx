/* eslint-disable react-hooks/exhaustive-deps */
import { IParamsElement } from "@/editor/core/elements/type";
import { useElement, useTool } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import useGroups from "@/editor/core/hooks/groups/hook";
import useSelect from "@/editor/core/hooks/select";
import useCallStkcTime from "@/hooks/useCallTime";
import themeColors from "@/themes";
import { AtomButton, AtomInput, AtomText, AtomWrapper } from "@whil/ui";
import { FC, useCallback } from "react";

const SidebarResolutionsFC: FC = () => {
  const { SelectedChangeElement, handleSelectedChangeElement } = useSelect();
  const { handleSetElement } = useElement();
  const { handleSetElements } = useElements();
  const { handleAddGroup } = useGroups();
  const { width, height } = SelectedChangeElement;
  const { setTool } = useTool();
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
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          justify-content: center;
        `}
      >
        <AtomText color="white" fontWeight={"bold"} fontSize="small">
          Resolution
        </AtomText>
        <AtomWrapper
          alignItems="center"
          justifyContent="flex-end"
          customCSS={(css) => css`
            display: grid;
            grid-template-columns: repeat(2, 1.4rem);
            gap: 1em;
          `}
        >
          <AtomButton
            customCSS={(css) => css`
              padding: 0.2em;
              height: -webkit-fill-available;
              display: flex;
              width: 100%;
              align-items: center;
              justify-content: center;
              background-color: transparent;
              border: 0;
              ${SelectedChangeElement?.resolution === "portrait" &&
              css`
                background-color: ${themeColors.primary};
              `}
            `}
            onClick={() => {
              const isMHeight = Number(height) > Number(width);
              if (isMHeight) {
                handle({
                  width: height,
                  height: width,
                  resolution: "portrait",
                });
              }
            }}
          >
            <AtomWrapper
              customCSS={(css) => css`
                border: 1px solid ${themeColors.white};
                width: 1em;
                height: 0.5em;
              `}
            />
          </AtomButton>
          <AtomButton
            onClick={() => {
              const isMWidth = Number(width) > Number(height);
              if (isMWidth) {
                handle({
                  width: height,
                  height: width,
                  resolution: "landscape",
                });
              }
            }}
            customCSS={(css) => css`
              padding: 0.2em;
              height: -webkit-fill-available;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: transparent;
              border: 0;
              ${SelectedChangeElement?.resolution === "landscape" &&
              css`
                background-color: ${themeColors.primary};
              `}
            `}
          >
            <AtomWrapper
              customCSS={(css) => css`
                border: 1px solid ${themeColors.white};
                width: 0.7em;
                height: 1.5em;
              `}
            />
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, auto);
          gap: 0.6em;
        `}
      >
        <AtomWrapper
          // gap="0.4em"
          gridColumn="1"
          gridRow="1"
          customCSS={(css) => css`
            display: grid;
            grid-template-columns: 1.5em 1fr;
          `}
        >
          <AtomText
            color="white"
            backgroundColor="rgba(255, 255, 255, 0.20)"
            textAlign="center"
            fontWeight={"bold"}
            customCSS={(css) => css`
              vertical-align: center;
              margin: 0;
              line-height: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: small;
            `}
          >
            x
          </AtomText>
          <AtomInput
            readonly
            type="number"
            value={SelectedChangeElement.x?.toFixed(2)}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                x: Number(event.target.value),
              });
            }}
            customCSS={(css) => css`
              font-size: small;
              color: white;
              width: 100%;
              border: 1px solid ${themeColors.dark};
              &:hover {
              }
              background-color: ${themeColors.dark};
            `}
          />
        </AtomWrapper>
        <AtomWrapper
          gridColumn="2"
          gridRow="1"
          customCSS={(css) => css`
            display: grid;
            grid-template-columns: 1.5em 1fr;
          `}
        >
          <AtomText
            color="white"
            backgroundColor="rgba(255, 255, 255, 0.20)"
            textAlign="center"
            fontWeight={"bold"}
            customCSS={(css) => css`
              vertical-align: center;
              margin: 0;
              line-height: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: small;
            `}
          >
            y
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.y?.toFixed(2)}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                y: Number(event.target.value),
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
          gridColumn="1"
          gridRow="2"
          customCSS={(css) => css`
            display: grid;
            grid-template-columns: 1.5em 1fr;
          `}
        >
          <AtomText
            color="white"
            backgroundColor="rgba(255, 255, 255, 0.20)"
            textAlign="center"
            fontWeight={"bold"}
            customCSS={(css) => css`
              vertical-align: center;
              margin: 0;
              line-height: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: small;
            `}
          >
            w
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.width}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                width: Number(event.target.value),
              });
            }}
            customCSS={(css) => css`
              font-size: small;
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
        <AtomWrapper
          gridColumn="2"
          gridRow="2"
          customCSS={(css) => css`
            display: grid;
            grid-template-columns: 1.5em 1fr;
          `}
        >
          <AtomText
            color="white"
            backgroundColor="rgba(255, 255, 255, 0.20)"
            textAlign="center"
            fontWeight={"bold"}
            customCSS={(css) => css`
              vertical-align: center;
              margin: 0;
              line-height: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: small;
            `}
          >
            h
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.height}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                height: Number(event.target.value),
              });
            }}
            customCSS={(css) => css`
              font-size: small;
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
        <AtomWrapper
          gridColumn="1"
          gridRow="3"
          customCSS={(css) => css`
            display: grid;
            grid-template-columns: 1.5em 1fr;
          `}
        >
          <AtomText
            color="white"
            backgroundColor="rgba(255, 255, 255, 0.20)"
            textAlign="center"
            fontWeight={"bold"}
            customCSS={(css) => css`
              vertical-align: center;
              margin: 0;
              line-height: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: small;
            `}
          >
            R
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.rotate}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                rotate: Number(event.target.value),
              });
            }}
            customCSS={(css) => css`
              font-size: small;
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
          gap: 1em;
        `}
      >
        <AtomWrapper gap="0.4em" gridColumn="1" gridRow="1">
          <AtomInput
            type="checkbox"
            id="isBlocked"
            checked={SelectedChangeElement.isBlocked}
            onChange={() => {
              handle({
                isBlocked: !SelectedChangeElement.isBlocked,
              });
            }}
            customCSS={(css) => css`
              padding: 0.2em;
              color: white;
              width: 100%;
              font-size: small;
              border: 1px solid ${themeColors.dark};
              &:hover {
                border: 1px solid ${themeColors.white};
              }
              background-color: ${themeColors.dark};
            `}
          />
          <AtomText
            color="white"
            as={"label"}
            htmlFor="isBlocked"
            fontSize="small"
          >
            {SelectedChangeElement?.isBlocked ? "Blocked" : "Unblocked"}
          </AtomText>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SidebarResolutionsFC;
