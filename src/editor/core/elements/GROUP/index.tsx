import Konva from "konva";
import { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import { Group, Rect, Transformer } from "react-konva";
import { IKeyTool } from "../../hooks/tool/types";
import { isPartialBorderRadius } from "../BOX";
import { MapEls } from "../mp_el";
import { FCE, IFCElement } from "../type";

const AtomGroupElement = (item: IFCElement) => {
  const {
    draggable,
    onChange,
    onSelect,
    isSelected,
    elements,
    element,
    isRef,
    onRef,
  } = item;
  const shapeRef = useRef<Konva.Rect>();
  const groupRef = useRef<Konva.Group | undefined>();
  const trRef = useRef<Konva.Transformer>();

  useEffect(() => {
    if (isSelected) {
      if (trRef.current && shapeRef.current) {
        trRef.current.nodes([shapeRef.current]);
        trRef.current?.getLayer()?.batchDraw();
      }
    }
  }, [isSelected, item, trRef, shapeRef]);

  useEffect(() => {
    if (isRef) {
      onRef?.(groupRef);
    }
  }, [isRef, groupRef, onRef]);

  return (
    <>
      <Rect
        x={item?.x}
        y={item?.y}
        width={item?.width}
        height={item?.height}
        rotationDeg={item?.rotate}
        shadowColor={item?.style?.shadowColor}
        shadowOpacity={item?.style?.shadowOpacity}
        shadowOffsetX={item?.style?.shadowOffset?.x}
        shadowOffsetY={item?.style?.shadowOffset?.y}
        shadowBlur={item?.style?.shadowBlur}
        id={"group-style-background"}
        cornerRadius={isPartialBorderRadius(item)?.cornerRadius}
        fill={item.style?.backgroundColor}
        draggable={item?.isBlocked === true ? false : draggable}
        stroke={item?.style?.stroke}
        ref={shapeRef as MutableRefObject<Konva.Rect>}
        strokeWidth={item?.style?.strokeWidth}
        onClick={() => {
          if (item?.isBlocked) return;

          onSelect(item);
        }}
        onTap={() => {
          if (item?.isBlocked) return;
          onSelect(item);
        }}
        onDragEnd={(e) => {
          if (item?.isBlocked) return;
          onChange({
            ...item,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const rotate = e.target.rotation();
          if (shapeRef?.current) {
            const node = shapeRef.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();
            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...item,
              x: node.x(),
              y: node.y(),
              rotate,
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
            });
          }
        }}
      />
      <Group
        {...item}
        id={item?.id}
        x={item?.x}
        y={item?.y}
        width={item?.width}
        height={item?.height}
        draggable={item?.isBlocked === true ? false : draggable}
        ref={groupRef as LegacyRef<Konva.Group>}
      >
        {elements?.map((elementsItem) => {
          const Component = MapEls?.[
            `${elementsItem?.tool}` as IKeyTool
          ] as FCE;
          const isBlocked = elementsItem?.isBlocked;
          const mySelectElt = element?.id === elementsItem?.id;

          return (
            <Component
              {...elementsItem}
              key={elementsItem?.id}
              draggable={isBlocked === true ? false : mySelectElt}
              isMoving={isBlocked === true ? false : mySelectElt}
              isSelected={mySelectElt}
              onChange={(item) => {
                if (isBlocked) return;
                onChange?.(item);
              }}
              onSelect={() => {
                onChange(elementsItem);
              }}
            />
          );
        })}
      </Group>
      {isSelected && (
        <Transformer
          ref={trRef as MutableRefObject<Konva.Transformer>}
          keepRatio={false}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default AtomGroupElement;
