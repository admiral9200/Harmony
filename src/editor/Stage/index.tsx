/* eslint-disable react-hooks/exhaustive-deps */
import Modal from "@/components/atoms/AtomModal";
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
import { FC, ReactNode, useEffect, useRef, useState } from "react";
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
  const { isCreatingElement, tool, setTool, disableKeyBoard } = useTool();
  const { setElements, elements } = useElements();
  const { config } = useStageConfig();
  const { setElement, upElement, element, deleteElement } = useElement();

  const drawing = useRef(false);
  const [eventsKeyboard, setEventsKeyboard] = useState<
    "STAGE_COPY_ELEMENT" | "STAGE_WATCHING"
  >("STAGE_COPY_ELEMENT");

  const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
    if (isCreatingElement) {
      drawing.current = true;
      const newBox = EventsStageElements({
        event,
        countElements: elements?.length,
      })?.[tool]?.start as IElement;
      setElement(newBox);
      setElements((prev) => [...prev, newBox]);
    }

    if (eventsKeyboard === "STAGE_COPY_ELEMENT" && element?.id) {
      const newElemetCopy = {
        ...element,
        id: v4(),
      };
      setElement(newElemetCopy);
      setElements((prev) => [...prev, newElemetCopy]);
    }
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!drawing.current) return;
    if (isCreatingElement) {
      const newBox = EventsStageElements({
        event: e,
        element: element,
        countElements: elements?.length,
      })?.[tool]?.progress as IElement;
      setElement(newBox);
      upElement(newBox);
    }
    if (eventsKeyboard === "STAGE_COPY_ELEMENT" && element?.id) {
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
    setEventsKeyboard("STAGE_WATCHING");
    setTool("MOVE");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const KEY = event.key?.toUpperCase();

      if (disableKeyBoard) {
        if (KEY === "DELETE") {
          deleteElement(element);
          setElement({} as IFCElement);
        }
        if (KEY === "ALT") {
          setEventsKeyboard("STAGE_COPY_ELEMENT");
        }
        if (KEY === "O") {
          setTool("CIRCLE");
          setElement({} as IFCElement);
        }
        if (KEY === "O") {
          setTool("CIRCLE");
          setElement({} as IFCElement);
        }
        if (KEY === "L") {
          setTool("LINE");
          setElement({} as IFCElement);
        }
        if (KEY === "V") {
          setTool("MOVE");
          setElement({} as IFCElement);
        }
        if (KEY === "I") {
          setTool("IMAGE");
          setElement({} as IFCElement);
        }
        if (KEY === "F") {
          setTool("BOX");
          setElement({} as IFCElement);
        }
        if (KEY === "T") {
          setElement({} as IFCElement);
          setTool("TEXT");
        }
      }
    };

    const handleKeyUp = () => {
      setEventsKeyboard("STAGE_WATCHING");
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [element, disableKeyBoard]);

  return (
    <>
      <Modal />
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
    </>
  );
};

export default AtomEditorScreen;
