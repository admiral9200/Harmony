import { IParamsElement } from "@/editor/core/elements/type";
import { useElement } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import useGroups from "@/editor/core/hooks/groups/hook";
import useSelect from "@/editor/core/hooks/select";
import useCallStkcTime from "@/hooks/useCallTime";
import themeColors from "@/themes";
import { AtomInput, AtomText, AtomWrapper } from "@whil/ui";
import { FC, useCallback } from "react";

const SidebarFillFC: FC = () => {
  const { SelectedChangeElement, handleSelectedChangeElement } = useSelect();
  const { handleSetElement } = useElement();
  const { handleSetElements } = useElements();

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
        <AtomText color="white" fontWeight={"bold"}>
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
            onChange={(event) =>
              handle({
                style: {
                  ...SelectedChangeElement.style,
                  backgroundColor: event.target.value,
                },
              })
            }
          />
          <AtomText
            as={"label"}
            htmlFor="backgroundStage"
            customCSS={(css) => css`
              background-color: ${style?.backgroundColor};
              border: 1px solid white;
              height: 1.7rem;
              border-radius: 0.4rem;
              width: 1.7rem;
            `}
          ></AtomText>
        </AtomWrapper>
        <AtomInput
          readonly
          type="text"
          value={`#${style?.backgroundColor?.replace(/#/, "")}`}
          onChange={(event) => {
            handle({
              style: {
                ...SelectedChangeElement.style,
                backgroundColor: event.target.value,
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
  );
};

export default SidebarFillFC;
