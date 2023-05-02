import Konva from "konva";
import { MutableRefObject, useEffect, useRef } from "react";
import { Group, Rect, Text, Transformer } from "react-konva";
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
  const shapeRef = useRef<Konva.Rect>();
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
      <Group
        onClick={() => onSelect(item)}
        draggable={draggable}
        onTap={() => onSelect(item)}
      >
        <Rect
          x={x}
          y={y}
          fill={style?.backgroundColor}
          width={width}
          height={height}
          ref={shapeRef as MutableRefObject<Konva.Rect>}
          // draggable={draggable}
          // onClick={() => onSelect(item)}
          // onTap={() => onSelect(item)}
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
              // we will reset it back
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
        <Text
          x={x}
          y={y}
          width={width}
          height={height}
          // align="center"
          fontSize={12}
          // fill={isDarkLight(`${fill}`)}
          fill={style?.colorText}
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus laborum sunt, officia, veritatis iure sapiente assumenda ipsum ducimus quasi atque est delectus neque harum ullam non ex! Nulla, temporibus eveniet?"
        />
      </Group>

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

export default AtomElementText;
