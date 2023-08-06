import Konva from "konva";
import { MutableRefObject, useEffect, useRef } from "react";
import { Rect, Transformer } from "react-konva";
import { isPartialBorderRadius } from "../BOX";
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
      }
    }
  }, [isSelected, item, trRef, shapeRef]);

  return (
    <>
      <Rect
        {...item}
        id={item?.id}
        x={item?.x}
        y={item?.y}
        width={item?.width}
        fill={item.style?.stroke}
        shadowColor={item?.style?.shadowColor}
        shadowOpacity={item?.style?.shadowOpacity}
        shadowOffsetX={item?.style?.shadowOffset?.x}
        shadowOffsetY={item?.style?.shadowOffset?.y}
        shadowBlur={item?.style?.shadowBlur}
        height={item?.style?.strokeWidth}
        cornerRadius={isPartialBorderRadius(item)?.cornerRadius}
        ref={shapeRef as MutableRefObject<Konva.Rect>}
        draggable={draggable}
        onClick={() => onSelect(item)}
        onTap={() => onSelect(item)}
        rotation={rotate}
        onDragEnd={(e) => {
          onChange({
            ...item,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransform={(e) => {
          const rotate = e.target.rotation();
          if (shapeRef?.current) {
            1;
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
          // keepRatio={false}
          // enabledAnchors={["middle-right", "middle-left"]}
          // enabledAnchors={[
          //   "top-left",
          //   "top-right",
          //   "bottom-left",
          //   "bottom-right",
          // ]}
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

export default AtomEditorElementBox;
