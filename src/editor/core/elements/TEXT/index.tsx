import Konva from "konva";
import { MutableRefObject, useEffect, useRef } from "react";
import { Text, Transformer } from "react-konva";
import { IFCElement } from "../type";

const AtomElementText = (item: IFCElement) => {
  const {
    x,
    y,
    draggable,
    onChange,
    onSelect,
    isSelected,
    width,
    height,
    style,
  } = item;
  const shapeRef = useRef<Konva.Text>();
  const trRef = useRef<Konva.Transformer>();

  useEffect(() => {
    if (isSelected) {
      if (trRef.current && shapeRef.current) {
        trRef.current.nodes([shapeRef.current]);
        trRef.current?.getLayer()?.batchDraw();
      }
    }
  }, [isSelected]);
  return (
    <>
      <Text
        x={x}
        y={y}
        width={width}
        height={height}
        fontSize={12}
        ref={shapeRef as MutableRefObject<Konva.Text>}
        draggable={draggable}
        onClick={() => onSelect(item)}
        onTap={() => onSelect(item)}
        zIndex={2}
        onDragEnd={(e) => {
          onChange({
            ...item,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          if (shapeRef?.current) {
            const rotate = e.target.rotation();
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
        fill={style?.colorText}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus laborum sunt, officia, veritatis iure sapiente assumenda ipsum ducimus quasi atque est delectus neque harum ullam non ex! Nulla, temporibus eveniet?"
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

export default AtomElementText;
