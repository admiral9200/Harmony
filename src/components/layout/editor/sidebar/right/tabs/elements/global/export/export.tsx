/* eslint-disable react-hooks/exhaustive-deps */
import { useElement } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import { IKeyTool } from "@/editor/core/hooks/tool/types";
import themeColors from "@/themes";
import { AtomButton, AtomText, AtomWrapper } from "@whil/ui";
import Konva from "konva";
import { FC, useCallback, useEffect } from "react";
import threads, { Threads } from "./threads/threads";

function downloadURI(uri: string, name: string) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const SidebarExportFC: FC = () => {
  const { element } = useElement();
  const { elements } = useElements();
  // const [typeExport, setTypeExport] = useState("IMG");

  const handleExport = useCallback(() => {
    const stage = new Konva.Stage({
      container: "viewer-layout",
      width: element?.width,
      height: element?.height,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    if (element?.tool === "GROUP") {
      const groupElements = Object.values(elements)?.filter(
        (item) => item?.groupId === element?.groupId
      );

      console.log(groupElements, "groupElements");

      layer.add(
        new Konva.Rect({
          x: 0,
          y: 0,
          width: element?.width,
          height: element?.height,
          fill: element?.style?.backgroundColor,
          rotation: 0,
        })
      );

      for (const iterator of groupElements) {
        const thread = threads?.[iterator?.tool as IKeyTool]?.(iterator);
        layer.add(thread as Threads);
      }
    } else {
      const thread = threads?.[element?.tool as IKeyTool]?.(element);
      layer.add(thread as Threads);
    }

    return stage;
  }, [element, elements]);

  useEffect(() => {
    handleExport();
  }, [element, elements]);

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
          Export
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          width: 100%;
          gap: 0.5em;
          display: grid;
          grid-template-columns: auto 1fr;
        `}
        alignItems="center"
      >
        <AtomWrapper
          as={"select"}
          customCSS={(css) => css`
            padding: 0em;
            color: white;
            width: 100%;
            height: 2rem;
            border: 1px solid ${themeColors.dark};
            &:hover {
              border: 1px solid ${themeColors.primary};
            }

            background-color: ${themeColors.dark};
          `}
        >
          <AtomWrapper as={"option"}>IMG</AtomWrapper>
          <AtomWrapper as={"option"}>PDF</AtomWrapper>
        </AtomWrapper>
        <AtomButton
          customCSS={(css) => css`
            height: 1rem;
            border: 1px solid ${themeColors.dark};
            background-color: transparent;
            user-select: none !important;
            color: white;
            padding: 0.4em;
            text-align: center;
            align-items: center;
            display: flex;
            justify-content: center;
            border: 1px solid ${themeColors.primary};
            &:active {
              background-color: ${themeColors.primary};
            }
          `}
          onClick={() => {
            const stage = handleExport();
            const dataURL = stage.toDataURL({ pixelRatio: 1 });
            downloadURI(
              dataURL,
              `${element?.tool?.toLowerCase()}_${element?.id?.slice(0, 4)}.png`
            );
          }}
        >
          Export
        </AtomButton>
      </AtomWrapper>
      <AtomWrapper
        customCSS={(css) => css`
          width: 100%;
          height: 240px;
          padding: 0.5em 0.7em;
        `}
      >
        <AtomWrapper
          id="viewer-layout"
          customCSS={(css) => css`
            width: 215px;
            height: 220px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            div {
              width: 215px !important;
              height: 220px !important;
            }
            canvas {
              width: 215px !important;
              height: 220px !important;
            }
          `}
        ></AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SidebarExportFC;
