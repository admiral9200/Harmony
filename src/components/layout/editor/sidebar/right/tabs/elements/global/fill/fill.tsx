/* eslint-disable react-hooks/exhaustive-deps */
import { useElement, useTool } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import useGroups from "@/editor/core/hooks/groups/hook";
import useSelect from "@/editor/core/hooks/select";
import useCallStkcTime from "@/hooks/useCallTime";
import themeColors from "@/themes";
import { AtomInput, AtomText, AtomWrapper } from "@whil/ui";
import { FC, useState } from "react";

const SidebarFillFC: FC = () => {
  const { SelectedChangeElement } = useSelect();
  const { handleSetElement } = useElement();
  const { handleSetElements } = useElements();
  const { setTool } = useTool();
  const { handleAddGroup } = useGroups();

  const { style } = SelectedChangeElement;

  const [color, setColor] = useState(
    style?.backgroundColor ?? style?.colorText ?? "#000000"
  );

  const { setTimer } = useCallStkcTime({
    callback: () => {
      const element = {
        ...SelectedChangeElement,
        style: {
          ...SelectedChangeElement.style,
          backgroundColor: color,
        },
      };
      handleSetElement(element);

      if (element?.tool === "GROUP") {
        handleAddGroup(element);
      } else {
        handleSetElements(element);
      }
    },
    ms: 100,
  });

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
          Fill
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        padding="0.5em 0.7em"
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
            id="backgroundStage"
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
            value={style?.backgroundColor}
            onChange={(event) => {
              setTimer(0);
              setColor(event.target.value);
            }}
          />
          <AtomText
            as={"label"}
            htmlFor="backgroundStage"
            customCSS={(css) => css`
              background-color: ${style?.backgroundColor};
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
          value={`#${style?.backgroundColor?.toUpperCase()?.replace(/#/, "")}`}
          onClick={() => {
            setTool("WRITING");
          }}
          onChange={(event) => {
            setTimer(0);
            setTool("WRITING");
            setColor(event.target.value);
          }}
          disabled
          customCSS={(css) => css`
            font-size: small;
            padding: 0.2em;
            color: white;
            width: 100%;
            border: 0px;

            background-color: ${themeColors.dark};
          `}
        />
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SidebarFillFC;
