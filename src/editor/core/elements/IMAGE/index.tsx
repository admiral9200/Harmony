/* eslint-disable jsx-a11y/alt-text */
import Konva from "konva";
import { MutableRefObject, useCallback, useEffect, useRef } from "react";
import { Image as KonvaImg, Transformer } from "react-konva";
import { isPartialBorderRadius } from "../BOX";
import { IFCElement } from "../type";

const AtomElementImage = (item: IFCElement) => {
  const { x, y } = item;

  const image = useCallback(() => {
    const dataImage = new Image();

    dataImage.src =
      item?.src?.includes("https") || item?.src?.includes("data:image")
        ? (item.src as string)
        : "/logoharmony.png";

    return dataImage;
  }, [item]);

  const { rotate, draggable, onChange, onSelect, isSelected } = item;
  const shapeRef = useRef<Konva.Image>();
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
      <KonvaImg
        {...item}
        x={x}
        id={item?.id}
        y={y}
        width={item.width}
        height={item?.height}
        cornerRadius={isPartialBorderRadius(item)?.cornerRadius}
        image={image()}
        fill={item.style?.backgroundColor}
        shadowBlur={item?.style?.shadowBlur}
        stroke={item?.style?.stroke}
        shadowColor={item?.style?.shadowColor}
        shadowOpacity={item?.style?.shadowOpacity}
        shadowOffsetX={item?.style?.shadowOffset?.x}
        shadowOffsetY={item?.style?.shadowOffset?.y}
        strokeWidth={item?.style?.strokeWidth}
        rotation={rotate}
        ref={shapeRef as MutableRefObject<Konva.Image>}
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

export default AtomElementImage;
