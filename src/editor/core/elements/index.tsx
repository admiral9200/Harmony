/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAtomValue } from "jotai";
import Konva from "konva";
import { MutableRefObject, memo, useCallback, useEffect } from "react";
import { Layer, Rect, Transformer } from "react-konva";
import { Portal } from "react-konva-utils";
import { useElement, useSelection, useTool } from "../hooks";
import useElements from "../hooks/elements/hook";
import { CanvasElements } from "../hooks/elements/jotai";
import useGroups from "../hooks/groups/hook";
import { IKeyTool } from "../hooks/tool/types";
import { MapEls } from "./mp_el";
import AtomPipeComponent from "./pipe";
import { FCE, IElement, IParamsElement } from "./type";

const AtomEditorMapper = memo(() => {
  const { elements, draggable, handleSetElements } = useElements();
  const { element, handleSetElement } = useElement();
  const { isMoving } = useTool();

  const mapped = useAtomValue(CanvasElements);

  const {
    selectionRectRef,
    trRef,
    selectionRef,
    setSelectionRefs,
    layerRef,
    setSelected,
  } = useSelection();
  const { listGroups, handleAddGroup } = useGroups();

  const onChange = useCallback(
    (element: IElement | IParamsElement) => {
      if (!element.id) return;
      handleSetElement(element);
      if (element?.tool === "GROUP") {
        handleAddGroup(element);
      } else {
        handleSetElements(element);
      }
    },
    [isMoving, element, elements]
  );

  useEffect(() => {
    setSelectionRefs({
      rectRef: selectionRectRef,
      trRef,
      selection: selectionRef,
      layerRef,
    });
  }, []);

  return (
    <>
      <Layer ref={layerRef as MutableRefObject<Konva.Layer>}>
        {listGroups?.map((item) => {
          const Component = MapEls?.[`${item?.tool}` as IKeyTool] as FCE;
          const isBlocked = item?.isBlocked;
          const isSelected = item?.id === element?.id;
          return isBlocked ? (
            <Component
              {...item}
              key={item?.id}
              draggable={false}
              isMoving={false}
              isSelected={isSelected}
              onChange={() => {}}
              onSelect={() => {}}
              element={element}
              elements={mapped?.filter(
                (dataItem) => dataItem?.groupId === item?.groupId
              )}
            />
          ) : (
            <Component
              {...item}
              key={item?.id}
              draggable={draggable}
              isMoving={isMoving}
              isSelected={isSelected}
              element={element}
              onChange={onChange}
              onSelect={() => {
                setSelected(false);
                trRef?.current?.nodes?.([]);
                onChange(item);
              }}
              elements={mapped?.filter(
                (dataItem) => dataItem?.groupId === item?.groupId
              )}
            />
          );
        })}

        {/* <Group x={1000} y={0} width={250} height={250} draggable>
          <Rect x={0} y={0} fill="red" width={250} height={250} />
          {mapped?.map((item) => {
            return (
              <Rect
                key={item.id}
                x={125}
                y={125}
                fill="blue"
                draggable
                width={10}
                height={10}
              />
            );
          })}
        </Group> */}
      </Layer>
      <Layer>
        <Portal selector=".top-layer" enabled={true}>
          <Transformer
            ref={trRef as MutableRefObject<Konva.Transformer>}
            boundBoxFunc={(oldBox, newBox) => {
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
          />
          <Rect
            id="select-rect-default"
            fill="#8A9BA7"
            stroke="#0D99FF"
            strokeWidth={1}
            ref={selectionRectRef as MutableRefObject<Konva.Rect>}
          />
        </Portal>
      </Layer>
      <AtomPipeComponent />
    </>
  );
});

export default AtomEditorMapper;
