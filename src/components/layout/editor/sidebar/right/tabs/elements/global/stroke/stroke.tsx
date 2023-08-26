/* eslint-disable react-hooks/exhaustive-deps */
import { useElement, useTool } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import useGroups from "@/editor/core/hooks/groups/hook";
import useSelect from "@/editor/core/hooks/select";
import useCallStkcTime from "@/hooks/useCallTime";
import themeColors from "@/themes";
import { AtomInput, AtomText, AtomWrapper } from "@whil/ui";
import { FC, useState } from "react";

const SidebarStrokeFC: FC = () => {
  const { SelectedChangeElement, handleSelectedChangeElement } = useSelect();
  const { handleSetElement } = useElement();
  const { handleSetElements } = useElements();
  const { setTool } = useTool();
  const { handleAddGroup } = useGroups();
  const { style } = SelectedChangeElement;

  const [color, setColor] = useState(style?.stroke || "#000000");

  const [swidth, setSWidth] = useState(
    SelectedChangeElement?.style?.strokeWidth || 0
  );

  const { setTimer } = useCallStkcTime({
    callback: () => {
      const element = Object.assign({}, SelectedChangeElement, {
        style: {
          ...SelectedChangeElement.style,
          stroke: color,
          strokeWidth: swidth,
        },
      });
      handleSetElement(element);

      if (element?.tool === "GROUP") {
        handleAddGroup(element);
      } else {
        handleSetElements(element);
      }
    },
    ms: 250,
  });

  // const handle = useCallback((params?: IParamsElement) => {
  //   setTimer(0);
  //   handleSelectedChangeElement({
  //     ...params,
  //   });
  // }, []);

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
          Stroke
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
          <AtomWrapper
            customCSS={(css) => css`
              width: 100%;
              display: grid;
              grid-template-columns: auto 1fr;
              grid-template-rows: 1fr !important;
              gap: 0.5em;
            `}
            alignItems="center"
          >
            <AtomWrapper alignItems="center">
              <AtomInput
                type="color"
                id="StrokeColor"
                customCSS={(css) => css`
                  background-color: blue;
                  margin: 0%;
                  outline: none;
                  padding: 0%;
                  border: none;
                  opacity: 0;
                  height: 0;
                  width: 0;
                  outline: none;
                `}
                value={color}
                onChange={(event) => {
                  setTimer(0);
                  setColor(event.target.value);
                }}
              />
              <AtomText
                as={"label"}
                htmlFor="StrokeColor"
                customCSS={(css) => css`
                  background-color: ${color};
                  /* border: 1px solid white; */
                  height: 1.3rem;
                  border-radius: 0.2rem;
                  width: 1.3rem;
                `}
              ></AtomText>
            </AtomWrapper>
            <AtomInput
              readonly
              type="text"
              disabled
              value={`#${style?.stroke?.replace(/#/, "")}`}
              onClick={() => {
                setTool("WRITING");
              }}
              onChange={(event) => {
                setTool("WRITING");
              }}
              customCSS={(css) => css`
                font-size: small;
                padding: 0.2em;
                color: white;
                width: 100%;
                border: 1px solid ${themeColors.dark};
                background-color: ${themeColors.dark};
              `}
            />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper
          // gap="0.4em"
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
            w
          </AtomText>
          <AtomInput
            type="number"
            value={swidth}
            onClick={() => {
              setTool("WRITING");
            }}
            onChange={(event) => {
              setTimer(0);
              setTool("WRITING");
              setSWidth(Number(event.target.value));
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
  );
};

export default SidebarStrokeFC;
