/* eslint-disable react-hooks/exhaustive-deps */
import { isPartialBorderRadius } from "@/editor/core/elements/BOX";
import { IFCElement } from "@/editor/core/elements/type";
import { useElement } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import usePipe from "@/editor/core/hooks/pipe/hook";
import { IKeyTool } from "@/editor/core/hooks/tool/types";
import themeColors from "@/themes";
import { AtomButton, AtomImage, AtomText, AtomWrapper } from "@whil/ui";
import Konva from "konva";
import { Stage } from "konva/lib/Stage";
import { FC, useCallback, useEffect, useState } from "react";
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
  const { pipeline } = usePipe();
  const [url, setUrl] = useState(null as unknown as Stage);

  const handleExportd = useCallback(() => {
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

      layer.add(
        new Konva.Rect({
          x: 0,
          y: 0,
          width: element?.width,
          height: element?.height,
          fill: element?.style?.backgroundColor,
          stroke: element?.style?.stroke,
          strokeWidth: element?.style?.strokeWidth,
          shadowBlur: element?.style?.shadowBlur,
          shadowColor: element?.style?.shadowColor,
          shadowOpacity: element?.style?.shadowOpacity,
          shadowOffsetX: element?.style?.shadowOffset?.x,
          shadowOffsetY: element?.style?.shadowOffset?.y,
          rotation: element?.rotate,
          cornerRadius: isPartialBorderRadius(element as IFCElement)
            ?.cornerRadius,
        })
      );

      for (const iterator of groupElements) {
        const thread = threads?.[iterator?.tool as IKeyTool]?.(iterator);
        layer.add(thread as Threads);
      }
    } else {
      const thread = threads?.[element?.tool as IKeyTool]?.({
        ...element,
        x: 0,
        y: 0,
      });
      layer.add(thread as Threads);
    }
    setUrl(stage as any);
  }, [element, elements, pipeline]);

  useEffect(() => {
    handleExportd();
  }, [element, elements, pipeline]);

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
        `}
        alignItems="center"
      >
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
            width: 100%;
            border: 1px solid ${themeColors.white};
            font-size: small;
            &:active {
              background-color: ${themeColors.white};
              color: ${themeColors.dark};
            }
          `}
          onClick={() => {
            downloadURI(
              url?.toDataURL({ pixelRatio: 7 }),
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
        <AtomImage
          src={url?.toDataURL()}
          width="100%"
          maxHeight="150px"
          objectFit="cover"
        />
        <AtomWrapper
          id="viewer-layout"
          customCSS={(css) => css`
            width: 0px;
            height: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            display: none;
            background-color: white;
            div {
              width: 0px !important;
              height: 0px !important;
            }
            canvas {
              width: 0px !important;
              height: 0px !important;
            }
          `}
        ></AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SidebarExportFC;
