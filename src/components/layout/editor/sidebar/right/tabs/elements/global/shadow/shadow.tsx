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

const SidebarShadowFC: FC = () => {
  const { SelectedChangeElement, handleSelectedChangeElement } = useSelect();
  const { handleSetElement } = useElement();
  const { handleSetElements } = useElements();
  const { setTool } = useTool();
  const { handleAddGroup } = useGroups();
  const { style } = SelectedChangeElement;

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
          Shadow
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, auto);
          gap: 0.6em;
        `}
      >
        <AtomWrapper
          alignItems="center"
          gridColumn="1"
          gridRow="1"
          customCSS={(css) => css`
            display: grid;
            grid-template-columns: 1.5em 1fr;
          `}
        >
          <AtomWrapper alignItems="center">
            <AtomInput
              type="color"
              id="shadowColor"
              customCSS={(css) => css`
                margin: 0%;
                outline: none;
                padding: 0%;
                border: none;
                opacity: 0;
                height: 0;
                width: 0;
                outline: none;
              `}
              value={style?.shadowColor ?? "#ffffff"}
              onChange={(event) =>
                handle({
                  style: {
                    ...SelectedChangeElement.style,
                    shadowColor: event.target.value,
                  },
                })
              }
            />
            <AtomText
              as={"label"}
              htmlFor="shadowColor"
              customCSS={(css) => css`
                background-color: ${style?.shadowColor ?? "#ffffff"};
                height: 1.3rem;
                border-radius: 0.2rem;
                width: 1.3rem;
              `}
            ></AtomText>
          </AtomWrapper>
          <AtomInput
            readonly
            type="text"
            value={`#${style?.shadowColor?.replace(/#/, "") ?? "ffffff"}`}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                style: {
                  ...SelectedChangeElement.style,
                  shadowColor: event.target.value,
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
          gap="0.4em"
          gridColumn="2"
          gridRow="1"
          alignItems="center"
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
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: small;
              padding: 0.3em;
            `}
          >
            b
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement?.style?.shadowBlur || 0}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                style: {
                  ...SelectedChangeElement.style,
                  shadowBlur: Number(event.target.value),
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
          gap="0.4em"
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
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: small;
              padding: 0.3em;
            `}
          >
            x
          </AtomText>
          <AtomInput
            readonly
            type="number"
            value={SelectedChangeElement.style?.shadowOffset?.x || 0}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                style: {
                  ...SelectedChangeElement.style,
                  shadowOffset: {
                    ...SelectedChangeElement.style?.shadowOffset,
                    x: Number(event.target.value),
                  },
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
          gap="0.4em"
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
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: small;
              padding: 0.3em;
            `}
          >
            y
          </AtomText>
          <AtomInput
            type="number"
            value={SelectedChangeElement.style?.shadowOffset?.y || 0}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTool("WRITING");
              handle({
                style: {
                  ...SelectedChangeElement.style,
                  shadowOffset: {
                    ...SelectedChangeElement.style?.shadowOffset,
                    y: Number(event.target.value),
                  },
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
      {/* <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          gap: 1em;
        `}
      >
       
      
      </AtomWrapper> */}
    </AtomWrapper>
  );
};

export default SidebarShadowFC;
