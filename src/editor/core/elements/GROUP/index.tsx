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
        {...item}
        x={item?.x}
        y={item?.y}
        width={item?.width}
        height={item?.height}
        rotationDeg={item?.rotate}
        id={item?.id}
        cornerRadius={isPartialBorderRadius(item)?.cornerRadius}
        fill={item.style?.backgroundColor}
        shadowBlur={item?.style?.shadowBlur}
        draggable={draggable}
        stroke={item?.style?.stroke}
        ref={shapeRef as MutableRefObject<Konva.Rect>}
        strokeWidth={item?.style?.strokeWidth}
        onClick={() => {
          onSelect(item);
        }}
        onTap={() => {
          onSelect(item);
        }}
        onDragEnd={(e) => {
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
        x={item?.x}
        y={item?.y}
        width={item?.width}
        height={item?.height}
        ref={groupRef as LegacyRef<Konva.Group>}
      >
        {elements?.map((elementsItem) => {
          const Component = MapEls?.[
            `${elementsItem?.tool}` as IKeyTool
          ] as FCE;
          const isBlocked = elementsItem?.isBlocked;
          const mySelectElt = element?.id === elementsItem?.id;

          return isBlocked ? (
            <Component
              {...elementsItem}
              key={elementsItem?.id}
              draggable={false}
              isMoving={mySelectElt}
              element={{}}
              isSelected={mySelectElt}
              onChange={() => {}}
              onSelect={() => {}}
              elements={[]}
            />
          ) : (
            <Component
              {...elementsItem}
              key={elementsItem?.id}
              draggable={draggable}
              isMoving={true}
              isSelected={mySelectElt}
              element={{}}
              onChange={onChange}
              onSelect={() => {
                // setSelected(false);
                // trRef?.current?.nodes?.([]);
                onChange(elementsItem);
              }}
              elements={[]}
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
