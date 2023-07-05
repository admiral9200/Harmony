/* eslint-disable react-hooks/exhaustive-deps */
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import stagePosition from "../../helpers/stage/position";
import useElement from "../element/hook";
import useElements from "../elements/hook";
import usePipe from "../pipe/hook";
import useTool from "../tool/hook";
import eventElements from "./event";
import { IEndEvent, IStageEvents, IStartEvent } from "./types";

const useEvent = () => {
  const { isCreatingElement, tool, setTool, disableKeyBoard } = useTool();
  const { elements, handleSetElements } = useElements();
  const { pipeline, handleEmptyElement, handleSetElement } = usePipe();
  const { element, handleSetElement: handleSetEl } = useElement();

  const [drawing, setDraw] = useState(false);
  const [eventsKeyboard, setEventsKeyboard] =
    useState<IStageEvents>("STAGE_COPY_ELEMENT");

  const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
    if (isCreatingElement) {
      setDraw(true);
      const createStartElement = eventElements?.[tool]?.start as IStartEvent;

      const createdElement = createStartElement(
        event,
        Object.keys(elements).length
      );

      handleSetElement(createdElement);
    }

    if (eventsKeyboard === "STAGE_COPY_ELEMENT" && element?.id) {
      const newElement = Object.assign({}, element, { id: v4() });

      handleSetElement(newElement);
    }
  };
  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!drawing) return;
    if (isCreatingElement) {
      const updateProgressElement = eventElements?.[tool]
        ?.progress as IEndEvent;

      const updateElement = updateProgressElement(e, pipeline);
      handleSetElement(updateElement);
    }
    if (eventsKeyboard === "STAGE_COPY_ELEMENT" && pipeline?.id) {
      const stage = e.target?.getStage?.() as Konva.Stage;
      const { x, y } = stagePosition(stage);

      const updateElement = Object.assign({}, pipeline, { x, y });
      handleSetEl(updateElement);
    }
  };

  const handleMouseUp = () => {
    if (eventsKeyboard === "STAGE_COPY_ELEMENT") {
      setEventsKeyboard("STAGE_WATCHING");
    }
    if (drawing) {
      setDraw(false);
    }
    if (tool !== "MOVE") {
      setTool("MOVE");
    }
    if (pipeline?.id) {
      handleSetElements(pipeline);
      handleEmptyElement();
    }
    if (element?.id) {
      handleSetElements(element);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const KEY = event.key?.toUpperCase();

      if (disableKeyBoard) {
        if (KEY === "DELETE") {
          // deleteElement(element);
          handleEmptyElement();
        }
        if (KEY === "ALT") {
          setEventsKeyboard("STAGE_COPY_ELEMENT");
        }
        if (KEY === "O") {
          setTool("CIRCLE");
          handleEmptyElement();
        }
        if (KEY === "O") {
          setTool("CIRCLE");
          handleEmptyElement();
        }
        if (KEY === "L") {
          setTool("LINE");
          handleEmptyElement();
        }
        if (KEY === "V") {
          setTool("MOVE");
          handleEmptyElement();
        }
        if (KEY === "I") {
          setTool("IMAGE");
          handleEmptyElement();
        }
        if (KEY === "F") {
          setTool("BOX");
          handleEmptyElement();
        }
        if (KEY === "T") {
          handleEmptyElement();
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
  }, [pipeline, disableKeyBoard]);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};

export default useEvent;
