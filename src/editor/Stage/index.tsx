/* eslint-disable react-hooks/exhaustive-deps */
import Modal from "@/components/atoms/AtomModal";
import Konva from "konva";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode, useRef } from "react";
import { Stage } from "react-konva";
import { useElement, useEvent, useStage, useZoom } from "../core/hooks";
import useScreen from "../core/hooks/screen";

type Props = {
  children: ReactNode;
};

const AtomEditorScreen: FC<Props> = ({ children }) => {
  const { ref, width, height } = useScreen();
  const stageDataRef = useRef<Konva.Stage>(null);
  const { onWheel, zoom: stage } = useZoom();
  const { handleMouseDown, handleMouseUp, handleMouseMove } = useEvent();
  const { config } = useStage();
  const { handleEmptyElement } = useElement();
  return (
    <>
      <Modal />
      <AtomWrapper
        ref={ref}
        className="CursorDefault"
        customCSS={(css) => css`
          ${stage.scale > 1.4428970000000028 &&
          config.graphicMapped &&
          css`
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAxSURBVHgB7dYxDQAACANBwHbFQ7BAQqd/Ab21Kanju29k9ysMgYCAgICAgICcS8fvGhWuCe+rNdorAAAAAElFTkSuQmCC");
            z-index: 999999999;
            background-position: 100% 100%;
            background-attachment: fixed;
            background-size: calc(10px * ${stage.scale});
          `}
          cursor: url("/cursors/default.png"), auto !important;

          background-color: ${config.backgroundColor};
        `}
      >
        <Stage
          ref={stageDataRef}
          width={width}
          height={height}
          onWheel={onWheel}
          scaleX={stage.scale}
          scaleY={stage.scale}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
          onDblClick={() => {
            handleEmptyElement();
          }}
          x={stage.x}
          y={stage.y}
        >
          {children}
        </Stage>
      </AtomWrapper>
    </>
  );
};

export default AtomEditorScreen;
