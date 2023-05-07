import useElement from "@/hooks/useElement";
import useScreen from "@/hooks/useScreen";
import useStageConfig from "@/hooks/useStage";
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
  const { setElements, elements } = useElements();
  const { config } = useStageConfig();
  const { setElement, upElement, element } = useElement();

  const drawing = useRef(false);

  const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
    if (!isMoving) {
      drawing.current = true;
      const newBox = EventsStageElements({
        event,
        countElements: elements?.length,
      })?.[tool]?.start as IElement;
      setElement(newBox);
      setElements((prev) => [...prev, newBox]);
    }
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!drawing.current) return;
    if (!isMoving) {
      const newBox = EventsStageElements({
        event: e,
        element: element,
        countElements: elements?.length,
      })?.[tool]?.progress as IElement;
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
        ${stage.scale > 1.4428970000000028 &&
        config.Graphicmapdesign &&
        css`
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAxSURBVHgB7dYxDQAACANBwHbFQ7BAQqd/Ab21Kanju29k9ysMgYCAgICAgICcS8fvGhWuCe+rNdorAAAAAElFTkSuQmCC");
          z-index: 999999999;
          background-position: 100% 100%;
          background-attachment: fixed;
          background-size: calc(10px * ${stage.scale});
        `}

        background-color: ${config.backgroundColor};
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
