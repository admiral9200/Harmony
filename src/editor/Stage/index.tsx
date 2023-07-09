/* eslint-disable react-hooks/exhaustive-deps */
import Modal from "@/components/atoms/AtomModal";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { Stage } from "react-konva";
import {
  useElement,
  useEvent,
  useSelection,
  useStage,
  useZoom,
} from "../core/hooks";
import useScreen from "../core/hooks/screen";

type Props = {
  children: ReactNode;
};

const AtomEditorScreen: FC<Props> = ({ children }) => {
  const { ref, width, height } = useScreen();
  const { onWheel, zoom: stage } = useZoom();
  const { handleMouseDown, handleMouseUp, handleMouseMove, stageDataRef } =
    useEvent();
  const { config } = useStage();
  const { handleEmptyElement } = useElement();
  const {
    setSelected,
    selectionRefsState: { trRef },
  } = useSelection();

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
            setSelected(false);
            trRef.current.nodes([]);
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
