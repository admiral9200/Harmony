import { IParamsElement } from "@/editor/core/elements/type";
import { useElement, useTool } from "@/editor/core/hooks";
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
  const { setTool } = useTool();
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
        flexDirection="column"
      >
        <AtomInput
          readonly
          type="text"
          onClick={() => {
            setTool("WRITING");
          }}
          value={
            SelectedChangeElement?.src?.includes("data:image")
              ? "Image Blob"
              : SelectedChangeElement?.src
          }
          onChange={(event) => {
            if (SelectedChangeElement?.src?.includes("data:image")) return;
            setTool("WRITING");
            handle({
              src: event.target.value,
            });
          }}
          customCSS={(css) => css`
            color: white;
            width: 100%;
            border: 1px solid ${themeColors.dark};
            &:hover {
              border: 1px solid ${themeColors.white};
            }
            background-color: ${themeColors.dark};
          `}
        />
        <AtomInput
          type="file"
          // value={element?.style?.stroke}
          customCSS={(css) => css`
            color: white;
            width: 100%;
            background-color: ${themeColors.dark};
          `}
          onChange={(event) => {
            if (event.target.files?.length) {
              const reader = new FileReader();

              reader.onload = function (data) {
                const image = new Image();
                image.src = data?.target?.result as string;
                image.onload = () => {
                  handle({
                    height: image.naturalHeight,
                    width: image.naturalWidth,
                    src: data?.target?.result as string,
                  });
                };
              };
              reader.readAsDataURL(event.target.files[0]);
            }
          }}
        />
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SidebarIMG;
