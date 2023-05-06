import useElement from "@/hooks/useElement";
import useScreen from "@/hooks/useScreen";
import useElements from "@/hooks/useStatement";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import useZoom from "@/hooks/useZoom";
import { getRandomColor } from "@/utils/randomColor";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode, useRef } from "react";
import { Stage } from "react-konva";
import { v4 } from "uuid";
import { IElement, IFCElement } from "../core/elements/type";

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

  const { handleStageClick, setElements } = useElements();

  const { setElement, upElement, element } = useElement();

  const isDrawing = useRef(false);

  const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true;

    const stage = event?.target?.getStage?.() as Konva.Stage;
    const { x, y } = getRelativePointerPosition(stage);

    const newElement: IElement = {
      id: v4(),
      x,
      y,
      tool: "DRAW",
      rotate: 0,
      height: 100,
      width: 100,
      style: {
        stroke: getRandomColor(),
      },
      points: [x, y],
    };
    setElement(newElement);
    setElements((prev) => [...prev, newElement]);
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage() as Konva.Stage;
    const { x, y } = getRelativePointerPosition(stage);

    const insertEl = {
      ...element,
      points: [...(element?.points as number[]), x, y],
    };

    setElement(insertEl);
    upElement(insertEl);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <AtomWrapper
      ref={ref}
      customCSS={(css) => css`
        overflow: none;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC")
          repeat 0 0;
        border: 2px solid red;
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
