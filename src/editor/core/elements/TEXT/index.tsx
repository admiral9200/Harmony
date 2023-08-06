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
        {...item}
        x={x}
        y={y}
        id={item?.id}
        width={width}
        height={height}
        fontSize={item?.style?.fontSize}
        shadowColor={item?.style?.shadowColor}
        shadowOpacity={item?.style?.shadowOpacity}
        shadowOffsetX={item?.style?.shadowOffset?.x}
        shadowOffsetY={item?.style?.shadowOffset?.y}
        shadowBlur={item?.style?.shadowBlur}
        fontFamily={`${item?.style?.fontFamily}-${item?.style?.fontStyle}-${item?.style?.fontWeight}`}
        textDecoration={item?.style?.textDecoration}
        fill={style?.backgroundColor}
        stroke={style?.stroke ?? "black"}
        strokeWidth={style?.strokeWidth ?? 0}
        text={item?.text ?? item?.id?.slice?.(0, 4)}
        ref={shapeRef as MutableRefObject<Konva.Text>}
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
