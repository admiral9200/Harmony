import Konva from "konva";
import { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import { Group, Image as KonvaImg, Rect, Transformer } from "react-konva";
import { IKeyTool } from "../../hooks/tool/types";
import { MapEls } from "../mp_el";
import { FCE, IFCElement } from "../type";

const AtomGroupElement = (item: IFCElement) => {
  const {
    draggable,
    onChange,
    onSelect,
    isSelected,
    elements,
    element,
    isRef,
    onRef,
  } = item;
  const shapeRef = useRef<Konva.Rect>();
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

  const dataImage = new Image();

  dataImage.src = "/dragdrop.svg";

  return (
    <>
      <Group
        {...item}
        id={item?.id}
        x={item?.x}
        y={item?.y}
        width={item?.width}
        height={item?.height}
        draggable={item?.isBlocked}
        ref={groupRef as LegacyRef<Konva.Group>}
        // onClick={() => {
        //   if (item?.isBlocked) return;
        //   onSelect(item);
        // }}
        // onTap={() => {
        //   if (item?.isBlocked) return;
        //   onSelect(item);
        // }}
        onDragEnd={(e) => {
          if (!item?.isBlocked) return;
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
      >
        <Rect
          x={0}
          y={0}
          width={item?.width}
          height={70}
          cornerRadius={8}
          onMouseEnter={(e) => {
            // style stage container:
            const container = e.target.getStage()?.container();
            if (container) {
              container.style.cursor = "pointer";
            }
          }}
          onMouseLeave={(e) => {
            const container = e.target.getStage()?.container();
            if (container) {
              container.style.cursor = `url("/cursors/default.png"), auto`;
            }
          }}
          fill="black"
          stroke={"white"}
          strokeWidth={2}
          onClick={() => {
            onSelect(item);
            onChange({
              ...item,
              isBlocked: true,
            });
          }}
        />
        <KonvaImg x={10} y={17} width={42} height={42} image={dataImage} />
        <Rect
          x={0}
          y={80}
          width={item?.width}
          height={item?.height}
          rotationDeg={item?.rotate}
          shadowColor={item?.style?.shadowColor}
          shadowOpacity={item?.style?.shadowOpacity}
          shadowOffsetX={item?.style?.shadowOffset?.x}
          shadowOffsetY={item?.style?.shadowOffset?.y}
          shadowBlur={item?.style?.shadowBlur}
          id={"group-style-background"}
          cornerRadius={8}
          fill={item.style?.backgroundColor}
          stroke={item?.style?.stroke}
          strokeWidth={item?.style?.strokeWidth}
        />
        {elements?.map((elementsItem) => {
          const Component = MapEls?.[
            `${elementsItem?.tool}` as IKeyTool
          ] as FCE;
          const isBlocked = elementsItem?.isBlocked;
          const mySelectElt = element?.id === elementsItem?.id;

          return (
            <Component
              {...elementsItem}
              key={elementsItem?.id}
              draggable={isBlocked === true ? false : mySelectElt}
              isMoving={isBlocked === true ? false : mySelectElt}
              isSelected={mySelectElt}
              onChange={(item) => {
                if (isBlocked) return;
                onChange?.(item);
              }}
              onSelect={() => {
                onChange(elementsItem);
              }}
            />
          );
        })}
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

export default AtomGroupElement;
