/* eslint-disable react-hooks/exhaustive-deps */
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import { useElement } from "..";
import stagePosition from "../../helpers/stage/position";
import useElements from "../elements/hook";
import useTool from "../tool/hook";
import eventElements from "./event";
import { IEndEvent, IStageEvents, IStartEvent } from "./types";

const useEvent = () => {
  const { isCreatingElement, tool, setTool, disableKeyBoard } = useTool();
  const { elements, handleSetElements } = useElements();
  const { element, handleEmptyElement, handleSetElement } = useElement();

  const drawing = useRef(false);
  const [eventsKeyboard, setEventsKeyboard] =
    useState<IStageEvents>("STAGE_COPY_ELEMENT");

  const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
    if (isCreatingElement) {
      drawing.current = true;
      const createStartElement = eventElements?.[tool]?.start as IStartEvent;

      const createdElement = createStartElement(
        event,
        Object.keys(elements).length
      );

      handleSetElement(createdElement);
      handleSetElements(createdElement);
    }

    if (eventsKeyboard === "STAGE_COPY_ELEMENT" && element?.id) {
      const newElement = {
        ...element,
        id: v4(),
      };
      handleSetElement(newElement);
      handleSetElements(newElement);
    }
  };
  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!drawing.current) return;
    if (isCreatingElement) {
      const updateProgressElement = eventElements?.[tool]
        ?.progress as IEndEvent;

      const newElement = updateProgressElement(e, element);
      handleSetElement(newElement);
      handleSetElements(newElement);
    }
    if (eventsKeyboard === "STAGE_COPY_ELEMENT" && element?.id) {
      const stage = e.target?.getStage?.() as Konva.Stage;
      const { x, y } = stagePosition(stage);
      const newElemetCopy = {
        ...element,
        x,
        y,
      };
      handleSetElement(newElemetCopy);
      handleSetElements(newElemetCopy);
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
  }, [element, disableKeyBoard]);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};

export default useEvent;
