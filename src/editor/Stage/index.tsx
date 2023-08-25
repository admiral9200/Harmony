/* eslint-disable react-hooks/exhaustive-deps */
import Modal from "@/components/atoms/AtomModal";
import LayoutEditorTop from "@/components/layout/editor/sidebar/top";
import { AtomText, AtomWrapper } from "@whil/ui";
import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Stage } from "react-konva";
import {
  useElement,
  useEvent,
  useSelection,
  useStage,
  useZoom,
} from "../core/hooks";

type Props = {
  children: ReactNode;
};

const AtomEditorScreen: FC<Props> = ({ children }) => {
  const { onWheel, zoom: stage } = useZoom();
  const { handleMouseDown, handleMouseUp, handleMouseMove, stageDataRef } =
    useEvent();

  const { config } = useStage();
  const { handleEmptyElement } = useElement();
  const {
    setSelected,
    selectionRefsState: { trRef },
  } = useSelection();

  const divRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [show, setShow] = useState(false);

  const handleResize = useCallback(() => {
    setShow(false);
    const divElement = divRef.current;
    if (divElement) {
      const { width, height } = divElement.getBoundingClientRect();
      setDimensions({
        width,
        height,
      });
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const divElement = divRef.current;
    if (!divElement) return;

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(divElement);
    return () => {
      resizeObserver.unobserve(divElement);
    };
  }, []);

  return (
    <>
      <Modal />
      <AtomWrapper
        ref={divRef}
        className="CursorDefault"
        id="StageViewer"
        customCSS={(css) => css`
          position: relative;
          align-items: center;
          display: flex;
          justify-content: center;
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
        <LayoutEditorTop />
        {show ? (
          <Stage
            ref={stageDataRef}
            width={dimensions.width}
            height={dimensions.height}
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
        ) : (
          <AtomWrapper
            height="100vh"
            alignItems="center"
            justifyContent="center"
          >
            <AtomText color="white" textAlign="center">
              Harmony Web Editor <br /> Loading...
            </AtomText>
          </AtomWrapper>
        )}
      </AtomWrapper>
    </>
  );
};

export default AtomEditorScreen;
