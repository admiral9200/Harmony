/* eslint-disable react-hooks/exhaustive-deps */
import useElement from "@/hooks/useElement";
import useScreen from "@/hooks/useScreen";
import useStageConfig from "@/hooks/useStage";
import useElements from "@/hooks/useStatement";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import useTool from "@/hooks/useTool";
import useZoom from "@/hooks/useZoom";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode, useEffect, useRef } from "react";
import { Stage } from "react-konva";
import { v4 } from "uuid";
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
  const stageDataRef = useRef<Konva.Stage>(null);
  const { onWheel, stage } = useZoom();
  const { isMoving, tool, setTool } = useTool();
  const { setElements, elements } = useElements();
  const { config } = useStageConfig();
  const { setElement, upElement, element, deleteElement } = useElement();

  const drawing = useRef(false);

  const isCopy = useRef(false);
  const isDraggingCopy = useRef(false);

  console.log({ isMoving });

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
    if (isCopy.current && element?.id) {
      const stage = event.target?.getStage?.() as Konva.Stage;
      const { x, y } = getRelativePointerPosition(stage);
      const newElemetCopy = {
        ...element,
        id: v4(),
      };
      setElement(newElemetCopy);
      setElements((prev) => [...prev, newElemetCopy]);
      isDraggingCopy.current = true;
      isCopy.current = false;
    }
    console.log("CLICK COPY");
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
    if (isDraggingCopy.current && element?.id) {
      const stage = e.target?.getStage?.() as Konva.Stage;
      const { x, y } = getRelativePointerPosition(stage);
      const newElemetCopy = {
        ...element,
        x,
        y,
      };
      setElement(newElemetCopy);
      upElement(newElemetCopy);
    }
  };

  const handleMouseUp = () => {
    drawing.current = false;
    isCopy.current = false;
    isDraggingCopy.current = false;
    setTool("MOVE");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.stopImmediatePropagation();
      console.log(event.key);

      const KEY = event.key?.toUpperCase();

      if (KEY === "DELETE") {
        deleteElement(element);
        setElement({} as IFCElement);
      }
      if (KEY === "ALT") {
        isCopy.current = true;
      }
      if (KEY === "F") {
        setTool("BOX");
        setElement({} as IFCElement);
      }
      if (KEY === "CONTROL") {
        setTool("MOVE");
      }
      if (KEY === "T") {
        setTool("TEXT");
      }
      // if (event.key === "Alt" && element?.id) {
      //   const stage = stageDataRef?.current?.getStage?.() as Konva.Stage;
      //   const { x, y } = getRelativePointerPosition(stage);
      //   const newElemetCopy = {
      //     ...element,
      //     id: v4(),
      //     x,
      //     y,
      //   };
      //   setElement(newElemetCopy);
      //   setElements((prev) => [...prev, newElemetCopy]);
      // }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [element]);

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
        ref={stageDataRef}
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
