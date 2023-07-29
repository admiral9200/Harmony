/* eslint-disable react-hooks/exhaustive-deps */
import { IParamsElement } from "@/editor/core/elements/type";
import { useElement } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import useSelect from "@/editor/core/hooks/select";
import useCallStkcTime from "@/hooks/useCallTime";
import themeColors from "@/themes";
import { AtomButton, AtomInput, AtomText, AtomWrapper } from "@whil/ui";
import { FC, useCallback } from "react";

const SidebarResolutionsFC: FC = () => {
  const { SelectedChangeElement, handleSelectedChangeElement } = useSelect();
  const { handleSetElement } = useElement();
  const { handleSetElements } = useElements();

  const { width, height } = SelectedChangeElement;

  const { setTimer } = useCallStkcTime({
    callback: () => {
      handleSetElement(SelectedChangeElement);
      handleSetElements(SelectedChangeElement);
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
        <AtomText color="white" fontWeight={"bold"}>
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
          grid-template-rows: 1fr !important;
          gap: 1em;
        `}
      >
        <AtomWrapper gap="0.4em" gridColumn="1" gridRow="1">
          <AtomText color="white" width="1.5em">
            x
          </AtomText>
          <AtomInput
            readonly
            type="number"
            value={SelectedChangeElement.x}
            onChange={(event) => {
              handle({
                x: Number(event.target.value),
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
            y
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.y}
            onChange={(event) => {
              handle({
                y: Number(event.target.value),
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
          gap: 1em;
        `}
      >
        <AtomWrapper gap="0.4em" gridColumn="1" gridRow="1">
          <AtomText color="white" width="1.5em">
            w
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.width}
            onChange={(event) => {
              handle({
                width: Number(event.target.value),
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
            h
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.height}
            onChange={(event) => {
              handle({
                height: Number(event.target.value),
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
            R
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.rotate}
            onChange={(event) => {
              handle({
                rotate: Number(event.target.value),
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
              border: 1px solid ${themeColors.dark};
              &:hover {
                border: 1px solid ${themeColors.white};
              }
              background-color: ${themeColors.dark};
            `}
          />
          <AtomText color="white" as={"label"} htmlFor="isBlocked">
            {SelectedChangeElement?.isBlocked ? "Blocked" : "Unblocked"}
          </AtomText>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SidebarResolutionsFC;
