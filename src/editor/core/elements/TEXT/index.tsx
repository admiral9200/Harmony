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

  useEffect(() => {
    shapeRef.current?.setZIndex(item?.zIndex as number);
    shapeRef.current?.zIndex(item?.zIndex as number);
    trRef.current?.zIndex(item?.zIndex as number);
  }, [isSelected, item, trRef, shapeRef]);
  return (
    <>
      <Text
        x={x}
        y={y}
        id={item?.id}
        // width={width}
        // height={0}
        fontSize={item?.style?.fontSize}
        fontStyle={item?.style?.fontStyle}
        textDecoration={item?.style?.textDecoration}
        fill={style?.colorText}
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
