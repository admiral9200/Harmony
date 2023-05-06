import useElement from "@/hooks/useElement";
import useScreen from "@/hooks/useScreen";
import useElements from "@/hooks/useStatement";
import useTool from "@/hooks/useTool";
import useZoom from "@/hooks/useZoom";
import { KonvaEventObject } from "konva/lib/Node";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode, useRef } from "react";
import { Stage } from "react-konva";
import { IElement, IFCElement } from "../core/elements/type";
import EventsStageElements from "./events";

type Props = {
  children: ReactNode;
};

const AtomEditorScreen: FC<Props> = ({ children }) => {
  const {
    ref,
    dimensions: { width, height },
  } = useScreen({
    deps: [],
  });

  const { onWheel, stage } = useZoom();
  const { isMoving, tool, setTool } = useTool();
  const { handleStageClick, setElements } = useElements();

  const { setElement, upElement, element } = useElement();

  const drawing = useRef(false);

  const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
    if (!isMoving) {
      drawing.current = true;
      const newBox = EventsStageElements(event)?.[tool]?.start as IElement;
      setElement(newBox);
      setElements((prev) => [...prev, newBox]);
    }
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!drawing.current) return;
    if (!isMoving) {
      const newBox = EventsStageElements(e, element)?.[tool]
        ?.progress as IElement;
      setElement(newBox);
      upElement(newBox);
    }
  };

  const handleMouseUp = () => {
    drawing.current = false;
    setTool("MOVE");
  };

  return (
    <AtomWrapper
      ref={ref}
      customCSS={(css) => css`
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC")
          repeat 0 0;
      `}
    >
      <Stage
        width={width}
        height={height}
        onWheel={onWheel}
        scaleX={stage.scale}
        scaleY={stage.scale}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onClick={(event) => {
          handleStageClick(event);
        }}
        onDblClick={() => {
          setElement({} as IFCElement);
        }}
        x={stage.x}
        y={stage.y}
      >
        {children}
      </Stage>
    </AtomWrapper>
  );
};

export default AtomEditorScreen;
