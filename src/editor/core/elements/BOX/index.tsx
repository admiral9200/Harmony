import Konva from "konva";
import { MutableRefObject, useEffect, useRef } from "react";
import { Rect, Transformer } from "react-konva";
import { IFCElement } from "../type";

const AtomEditorElementBox = (item: IFCElement) => {
  const { rotate, draggable, onChange, onSelect, isSelected } = item;
  const shapeRef = useRef<Konva.Rect>();
  const trRef = useRef<Konva.Transformer>();

  useEffect(() => {
    if (isSelected) {
      if (trRef.current && shapeRef.current) {
        trRef.current.nodes([shapeRef.current]);
        trRef.current?.getLayer()?.batchDraw();
        shapeRef.current?.setZIndex(item?.zIndex as number);
      }
    }
  }, [isSelected, item]);

  useEffect(() => {
    if (shapeRef.current) {
      shapeRef.current?.setZIndex(item?.zIndex as number);
    }
  }, [isSelected, item]);

  return (
    <>
      <Rect
        {...item}
        {...isPartialBorderRadius(item)}
        fill={item.style?.backgroundColor}
        shadowBlur={item?.style?.shadowBlur}
        ref={shapeRef as MutableRefObject<Konva.Rect>}
        draggable={draggable}
        onClick={() => {
          onSelect(item);
        }}
        onTap={() => {
          onSelect(item);
        }}
        stroke={item?.style?.stroke}
        strokeWidth={item?.style?.strokeWidth}
        rotation={rotate}
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

const isPartialBorderRadius = (item: IFCElement) => {
  const style = item?.style;
  return item?.style?.isAllBorderRadius
    ? {
        cornerRadius: [
          style?.borderRadiusTopLeft,
          style?.borderRadiusTopRight,
          style?.borderRadiusBottomRight,
          style?.borderRadiusBottomLeft,
        ] as number[],
      }
    : {
        cornerRadius: style?.borderRadius as number,
      };
};

export default AtomEditorElementBox;
