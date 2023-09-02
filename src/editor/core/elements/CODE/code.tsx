import Konva from "konva";
import { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import { Group, Rect, Transformer } from "react-konva";
import { IFCElement } from "../type";

const AtomCodeElement = (item: IFCElement) => {
  const { draggable, onChange, onSelect, isSelected, isRef, onRef } = item;
  const groupRef = useRef<Konva.Group | undefined>();
  const trRef = useRef<Konva.Transformer>();

  useEffect(() => {
    if (isSelected) {
      if (trRef.current && groupRef.current) {
        trRef.current.nodes([groupRef.current]);
        trRef.current?.getLayer()?.batchDraw();
      }
    }
  }, [isSelected, item, trRef, groupRef]);

  useEffect(() => {
    if (isRef) {
      onRef?.(groupRef);
    }
  }, [isRef, groupRef, onRef]);

  return (
    <>
      <Group
        {...item}
        id={item?.id}
        x={item?.x}
        y={item?.y}
        width={item?.width}
        height={item?.height}
        draggable={item?.isBlocked === true ? false : draggable}
        ref={groupRef as LegacyRef<Konva.Group>}
        onClick={() => {
          if (item?.isBlocked) return;
          onSelect(item);
        }}
        onTap={() => {
          if (item?.isBlocked) return;
          onSelect(item);
        }}
        onDragEnd={(e) => {
          if (item?.isBlocked) return;
          onChange({
            ...item,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const rotate = e.target.rotation();
          if (groupRef?.current) {
            const node = groupRef.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();
            node.scaleX(1);
            node.scaleY(1);
            const height = Math.max(node.height() * scaleY);
            const width = Math.max(5, node.width() * scaleX);
            onChange({
              ...item,
              x: node.x(),
              y: node.y(),
              rotate,
              width: width < 300 ? 300 : width,
              height: height < 150 ? 150 : height,
            });
          }
        }}
      >
        <Rect
          x={0}
          y={0}
          width={item?.width}
          height={item?.height}
          fill={item?.style?.backgroundColor}
          cornerRadius={[
            Number(item?.style?.borderRadiusTopLeft),
            Number(item?.style?.borderRadiusTopRight),
            Number(item?.style?.borderRadiusBottomLeft),
            Number(item?.style?.borderRadiusBottomRight),
          ]}
        />
        <Rect
          x={0}
          y={0}
          fill="#333e44"
          cornerRadius={[
            Number(item?.style?.borderRadiusTopLeft),
            Number(item?.style?.borderRadiusTopRight),
            0,
            0,
          ]}
          width={Number(item?.width)}
          height={40}
        />
        <Rect
          x={17}
          y={17}
          fill="#ff5f57"
          width={13}
          height={13}
          cornerRadius={10}
        />
        <Rect
          x={37}
          y={17}
          fill="#febc2e"
          width={13}
          height={13}
          cornerRadius={10}
        />
        <Rect
          x={57}
          y={17}
          fill="#28c840"
          width={13}
          height={13}
          cornerRadius={10}
        />
      </Group>
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

export default AtomCodeElement;
