/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { KonvaEventObject } from "konva/lib/Node";
import { Stage } from "konva/lib/Stage";
import { Vector2d } from "konva/lib/types";
import { useCallback, useEffect, useState } from "react";
import harmonyZoomAtom from "./jotai";
import { IScrollEvent } from "./types";

const useZoom = () => {
  const [zoom, setZoom] = useAtom(harmonyZoomAtom);

  const [scrollEvent, setScrollEvent] =
    useState<IScrollEvent>("SCROOLL_VERTICAL");

  const handlwRealWheel = useCallback(
    (event: KonvaEventObject<WheelEvent>) => {
      if (scrollEvent === "SCROOLL_VERTICAL") {
        setZoom((prevScrollPosition) => {
          return Object.assign({}, prevScrollPosition, {
            evt: event.evt,
            y: -event.evt.deltaY + prevScrollPosition.y,
          });
        });
      }

      if (scrollEvent === "SCROOLL_HORIZONTAL") {
        setZoom((prevScrollPosition) => {
          return Object.assign({}, prevScrollPosition, {
            evt: event.evt,
            x: -event.evt.deltaY + prevScrollPosition.x,
          });
        });
      }
      if (scrollEvent === "SCROOLL_ZOOM") {
        const scaleBy = 1.1;
        const stage = event.target.getStage() as Stage;
        const oldScale = stage.scaleX();
        const pointerPosition = stage.getPointerPosition() as Vector2d;

        const newScale =
          event.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

        const isValidScale = newScale < 6 && newScale > 0.04168314407042724;
        const mousePointTo = {
          x: pointerPosition.x / oldScale - stage.x() / oldScale,
          y: pointerPosition.y / oldScale - stage.y() / oldScale,
        };

        if (isValidScale) {
          setZoom((prev) => {
            return Object.assign({}, prev, {
              evt: event.evt,
              scale: isValidScale ? newScale : prev.scale,
              x: (pointerPosition.x / newScale - mousePointTo.x) * newScale,
              y: (pointerPosition.y / newScale - mousePointTo.y) * newScale,
            });
          });
        }
      }
    },
    [scrollEvent]
  );

  const handleResetXandY = useCallback(() => {
    setZoom((prevScrollPosition) => {
      return Object.assign({}, prevScrollPosition, {
        x: 0,
        y: 0,
        scale: 1,
      });
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const KEY = event.key?.toUpperCase();

      if (KEY === "SHIFT") {
        setScrollEvent("SCROOLL_HORIZONTAL");
      }
      if (KEY === "CONTROL") {
        setScrollEvent("SCROOLL_ZOOM");
      }
      if (KEY === "ALT") {
        setScrollEvent("SCROOLL_VERTICAL");
      }
    };

    const handleKeyUp = () => {
      setScrollEvent("SCROOLL_VERTICAL");
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return {
    onWheel: handlwRealWheel,
    zoom,
    handleResetXandY,
  };
};

export default useZoom;
