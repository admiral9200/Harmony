import Konva from "konva";
import { MutableRefObject, useEffect, useRef } from "react";
import { Circle, Transformer } from "react-konva";
import { IFCElement } from "../type";

const AtomElementCircle = (item: IFCElement) => {
  const { draggable, onChange, onSelect, isSelected } = item;
  const shapeRef = useRef<Konva.Circle>();
  const trRef = useRef<Konva.Transformer>();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      if (trRef.current && shapeRef.current) {
        trRef.current.nodes([shapeRef.current]);
        trRef.current?.getLayer()?.batchDraw();
      }
    }
  }, [isSelected]);
  return (
    <>
      <Circle
        key={item.id}
        name={item.id}
        x={item.x}
        y={item.y}
        fill={item?.style?.backgroundColor}
        radius={50}
        ref={shapeRef as MutableRefObject<Konva.Circle>}
        draggable={draggable}
        onClick={() => onSelect(item)}
        onTap={() => onSelect(item)}
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
            // limit resize
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

export default AtomElementCircle;
