import Konva from "konva";
import { MutableRefObject, useEffect, useRef } from "react";
import { Line, Text, Transformer } from "react-konva";
import { IFCElement } from "../type";

const AtomElementDraw = (item: IFCElement) => {
  const { draggable, isSelected, rotate, onChange, onSelect } = item;
  const shapeRef = useRef<Konva.Line>();
  const trRef = useRef<Konva.Transformer>();

  useEffect(() => {
    if (isSelected) {
      if (trRef.current && shapeRef.current) {
        trRef.current.nodes([shapeRef.current]);
        trRef.current?.getLayer()?.batchDraw();
      }
    }
  }, [isSelected]);

  console.log(item, " Element Line");

  return (
    <>
      <Text
        x={item.x}
        y={item.y}
        fontSize={10}
        text={JSON.stringify(item?.points)}
      />
      <Line
        x={item.x}
        y={item.y}
        width={item.width}
        height={item.height}
        points={item?.points}
        stroke="#2c26df"
        strokeWidth={1}
        tension={0.4}
        lineCap="round"
        lineJoin="round"
        ref={shapeRef as MutableRefObject<Konva.Line>}
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
          // borderStroke="green"
          ignoreStroke
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

export default AtomElementDraw;
