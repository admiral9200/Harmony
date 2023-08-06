import Konva from "konva";
import { MutableRefObject, useEffect, useRef } from "react";
import { Rect, Transformer } from "react-konva";
import { IFCElement, IStyleElement } from "../type";

const AtomEditorElementBox = (item: IFCElement) => {
  const { rotate, draggable, onChange, onSelect, isSelected } = item;
  const shapeRef = useRef<Konva.Rect>();
  const trRef = useRef<Konva.Transformer>();

  useEffect(() => {
    if (isSelected) {
      if (trRef.current && shapeRef.current) {
        trRef.current.nodes([shapeRef.current]);
        trRef.current?.getLayer()?.batchDraw();
      }
    }
  }, [isSelected, item, trRef, shapeRef]);

  return (
    <>
      <Rect
        {...item}
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
        id={item?.id}
        cornerRadius={isPartialBorderRadius(item)?.cornerRadius}
        fill={item.style?.backgroundColor}
        ref={shapeRef as MutableRefObject<Konva.Rect>}
        draggable={draggable}
        stroke={item?.style?.stroke}
        strokeWidth={item?.style?.strokeWidth}
        rotation={rotate}
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

export const isPartialBorderRadius = (item: IFCElement) => {
  const {
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomRight,
    borderRadiusBottomLeft,
    borderRadius,
  } = item?.style as IStyleElement;

  return {
    cornerRadius: [
      borderRadiusTopLeft,
      borderRadiusTopRight,
      borderRadiusBottomRight,
      borderRadiusBottomLeft,
    ] as number[],
  };
};

export default AtomEditorElementBox;
