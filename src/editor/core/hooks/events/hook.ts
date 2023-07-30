/* eslint-disable react-hooks/exhaustive-deps */
import { useAtomValue } from "jotai";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import { IPELMT } from "../../elements/type";
import groupAbsolutePosition from "../../helpers/group/position/position";
import stageAbsolutePosition from "../../helpers/stage/position";
import useElement from "../element/hook";
import useElements from "../elements/hook";
import useGroups from "../groups/hook";
import { groupRefAtom } from "../groups/jotai";
import usePages from "../pages/hook";
import usePipe from "../pipe/hook";
import useSelection from "../selection/hook";
import useTool from "../tool/hook";
import eventElements from "./event";
import { IEndEvent, IStageEvents, IStartEvent } from "./types";

const useEvent = () => {
  const { isCreatingElement, tool, setTool, disableKeyBoard } = useTool();
  const {
    elements,
    handleSetElements,
    handleDeleteElement,
    handleDeleteManyElements,
  } = useElements();
  const { pipeline, handleEmptyElement, handleSetElement } = usePipe();
  const {
    element,
    handleSetElement: handleSetEl,
    handleEmptyElement: handleElementEmpty,
  } = useElement();
  const {
    selectionRefsState: { rectRef: selectionRectRef, layerRef, trRef },
    selectionRef: selection,
    setSelected,
    isSelected,
  } = useSelection();

  const {
    handleAddGroup,
    groupSelectId,
    groups,
    handleDeleteGroup,
    handleDeleteManyGroups,
  } = useGroups();
  const groupRef = useAtomValue(groupRefAtom);
  const { page } = usePages();
  const stageDataRef = useRef<Konva.Stage>(null);

  const [drawing, setDraw] = useState(false);
  const [eventsKeyboard, setEventsKeyboard] =
    useState<IStageEvents>("STAGE_COPY_ELEMENT");
  const [elementsIds, setElementsIds] = useState<string[]>([]);

  const updateSelectionRect = useCallback(() => {
    if (selectionRectRef.current) {
      const node = selectionRectRef.current;
      if (node) {
        node.setAttrs({
          visible: selection.current.visible,
          x: Math.min(selection.current.x1, selection.current.x2),
          y: Math.min(selection.current.y1, selection.current.y2),
          width: Math.abs(selection.current.x1 - selection.current.x2),
          height: Math.abs(selection.current.y1 - selection.current.y2),
          fill: "rgba(0, 161, 255, 0.3)",
        });
        node.getLayer().batchDraw();
      }
    }
  }, [selectionRectRef]);

  const handleMouseDown = useCallback(
    (event: KonvaEventObject<MouseEvent>) => {
      if (
        !isCreatingElement &&
        eventsKeyboard === "STAGE_WATCHING" &&
        !drawing &&
        !element?.id &&
        !pipeline?.id &&
        !isSelected
      ) {
        const { x, y } = stageAbsolutePosition(event);
        selection.current.visible = true;
        selection.current.x1 = Number(x);
        selection.current.y1 = Number(y);
        selection.current.x2 = Number(x);
        selection.current.y2 = Number(y);
        updateSelectionRect();
      }

      if (isCreatingElement) {
        setDraw(true);
        const createStartElement = eventElements?.[tool]?.start as IStartEvent;
        const eventd =
          tool === "GROUP"
            ? stageAbsolutePosition(event)
            : groupAbsolutePosition(groupRef);

        const createdElement = createStartElement(
          eventd,
          Object.keys(elements).length,
          page,
          groupSelectId as string
        );

        handleSetElement(createdElement);
      }

      if (
        eventsKeyboard === "STAGE_COPY_ELEMENT" &&
        element?.id &&
        !isSelected
      ) {
        const id = v4();

        const newElement = Object.assign({}, element, {
          id,
          groupId: element?.tool === "GROUP" ? id : element.groupId,
          view_position: Object.keys(elements).length + 1,
        } as IPELMT);

        handleSetElement(newElement);
      }

      if (eventsKeyboard === "STAGE_COPY_ELEMENT" && isSelected) {
        for (let index = 0; index < elementsIds.length; index++) {
          const elemnt =
            elements[elementsIds[index]] ?? groups[elementsIds[index]];
          const id = v4();
          if (elemnt?.tool === "GROUP") {
            handleAddGroup(
              Object.assign({}, elemnt, {
                id,
                groupId: id,
                view_position: Object.keys(groups).length + index + 1,
              } as IPELMT)
            );
          } else {
            handleSetElements(
              Object.assign({}, elemnt, {
                id: v4(),
                view_position: Object.keys(elements).length + index + 1,
              })
            );
          }
        }
      }
    },
    [
      isCreatingElement,
      eventsKeyboard,
      handleSetElement,
      drawing,
      element,
      pipeline,
      isSelected,
      elements,
    ]
  );

  const handleMouseMove = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (
        !isCreatingElement &&
        eventsKeyboard === "STAGE_WATCHING" &&
        !drawing &&
        !element?.id &&
        !pipeline?.id &&
        !isSelected
      ) {
        if (!selection.current.visible) {
          return;
        }
        const { x, y } = stageAbsolutePosition(e);
        selection.current.x2 = Number(x);
        selection.current.y2 = Number(y);
        updateSelectionRect();
      }

      if (!drawing) return;
      if (isCreatingElement) {
        const updateProgressElement = eventElements?.[tool]
          ?.progress as IEndEvent;
        const evnt =
          pipeline?.tool === "GROUP"
            ? stageAbsolutePosition(e)
            : groupAbsolutePosition(groupRef);
        const updateElement = updateProgressElement(evnt, pipeline);
        handleSetElement(updateElement);
      }
      if (eventsKeyboard === "STAGE_COPY_ELEMENT" && pipeline?.id) {
        const evnt =
          pipeline?.tool === "GROUP"
            ? stageAbsolutePosition(e)
            : groupAbsolutePosition(groupRef);

        const updateElement = Object.assign({}, pipeline, {
          x: evnt?.x,
          y: evnt?.y,
        });
        handleSetEl(updateElement);
      }
    },
    [
      isCreatingElement,
      eventsKeyboard,
      drawing,
      element,
      pipeline,
      isSelected,
      elements,
    ]
  );

  const handleMouseUp = useCallback(() => {
    if (selection.current.visible) {
      selection.current.visible = false;
      const { x1, x2, y1, y2 } = selection.current;
      const moved = x1 !== x2 || y1 !== y2;
      if (!moved) {
        updateSelectionRect();
        return;
      }
      updateSelectionRect();
      const selBox = selectionRectRef?.current?.getClientRect?.();

      const elementsSelected = layerRef?.current?.children?.filter?.(
        (elementNode) => {
          if (
            elementNode?.attrs?.id === "select-rect-default" ||
            elementNode?.attrs?.isBlocked
          )
            return;
          const elBox = elementNode.getClientRect();
          if (Konva.Util.haveIntersection(selBox, elBox)) {
            return elementNode;
          }
        }
      );

      setElementsIds(
        elementsSelected?.map((item) => `${item?.attrs?.id}`) as string[]
      );

      setSelected(Boolean(Number(elementsSelected?.length)));
      if (elementsSelected?.length) {
        trRef.current.nodes(elementsSelected);
      } else {
        trRef.current.nodes([]);
      }
    }
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
      if (pipeline?.tool === "GROUP") {
        handleAddGroup(pipeline);
      } else {
        handleSetElements(pipeline);
      }
      handleEmptyElement();
    }
    if (element?.id) {
      if (element?.tool === "GROUP") {
        handleAddGroup(pipeline);
      } else {
        handleSetElements(element);
      }
      handleEmptyElement();
    }
  }, [selection, layerRef, eventsKeyboard, drawing, tool, pipeline, element]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const KEY = event.key?.toUpperCase();

      if (disableKeyBoard) {
        if (KEY === "DELETE") {
          if (!isSelected) {
            if (element?.tool === "GROUP") {
              handleDeleteGroup(`${element?.id}`);
            } else {
              handleDeleteElement(`${element?.id}`);
            }
            handleElementEmpty();
          } else {
            handleDeleteManyGroups(elementsIds);
            handleDeleteManyElements(elementsIds);
            handleElementEmpty();
            setSelected(false);
            trRef.current.nodes([]);
            setElementsIds([]);
          }
        }
        if (KEY === "ALT") {
          setEventsKeyboard("STAGE_COPY_ELEMENT");
        }
        if (KEY === "O") {
          setTool("CIRCLE");
          handleElementEmpty();
          handleEmptyElement();
        }
        if (KEY === "O") {
          setTool("CIRCLE");
          handleEmptyElement();
          handleElementEmpty();
        }
        if (KEY === "L") {
          setTool("LINE");
          handleElementEmpty();
          handleEmptyElement();
        }
        if (KEY === "V") {
          setTool("MOVE");
          handleElementEmpty();
          handleEmptyElement();
        }
        if (KEY === "I") {
          setTool("IMAGE");
          handleEmptyElement();
          handleElementEmpty();
        }
        if (KEY === "F") {
          setTool("BOX");
          handleElementEmpty();
          handleEmptyElement();
        }
        if (KEY === "T") {
          handleElementEmpty();
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
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [pipeline, disableKeyBoard, element, elementsIds]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTool("MOVE");
        setEventsKeyboard("STAGE_WATCHING");
      } else {
        setTool("MOVE");
        setEventsKeyboard("STAGE_WATCHING");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    stageDataRef,
  };
};

export default useEvent;
