import { IParamsElement } from "@/editor/core/elements/type";
import { useElement } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import useSelect from "@/editor/core/hooks/select";
import useCallStkcTime from "@/hooks/useCallTime";
import themeColors from "@/themes";
import { AtomInput, AtomText, AtomWrapper } from "@whil/ui";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const SidebarIMG: FC<Props> = (props) => {
  const { SelectedChangeElement, handleSelectedChangeElement } = useSelect();
  const { handleSetElement } = useElement();
  const { handleSetElements } = useElements();

  const { width, height, style } = SelectedChangeElement;

  const { setTimer } = useCallStkcTime({
    callback: () => {
      handleSetElement(SelectedChangeElement);
      handleSetElements(SelectedChangeElement);
    },
    ms: 250,
  });

  const handle = (params?: IParamsElement) => {
    setTimer(0);
    handleSelectedChangeElement({
      ...params,
    });
  };
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
          Image
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          width: 100%;
          gap: 0.5em;
        `}
        alignItems="center"
      >
        <AtomInput
          readonly
          type="text"
          value={SelectedChangeElement?.src}
          onChange={(event) => {
            handle({
              src: event.target.value,
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

export default SidebarIMG;
