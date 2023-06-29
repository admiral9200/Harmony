/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { KonvaEventObject } from "konva/lib/Node";
import { Stage } from "konva/lib/Stage";
import { Vector2d } from "konva/lib/types";
import { useEffect, useMemo, useState } from "react";
import harmonyZoomAtom from "./jotai";
import { IScrollEvent } from "./types";

const useZoom = () => {
  const [zoom, setZoom] = useAtom(harmonyZoomAtom);

  const [scrollEvent, setScrollEvent] =
    useState<IScrollEvent>("SCROOLL_VERTICAL");

  const handlwRealWheel = useMemo(() => {
    return (event: KonvaEventObject<WheelEvent>) => {
      if (scrollEvent === "SCROOLL_VERTICAL") {
        setZoom((prevScrollPosition) => ({
          ...prevScrollPosition,
          y: -event.evt.deltaY + prevScrollPosition.y,
        }));
      }

      if (scrollEvent === "SCROOLL_HORIZONTAL") {
        setZoom((prevScrollPosition) => ({
          ...prevScrollPosition,
          x: -event.evt.deltaY + prevScrollPosition.x,
        }));
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
          setZoom((prev) => ({
            ...prev,
            scale: isValidScale ? newScale : prev.scale,
            x: (pointerPosition.x / newScale - mousePointTo.x) * newScale,
            y: (pointerPosition.y / newScale - mousePointTo.y) * newScale,
          }));
        }
      }
    };
  }, [scrollEvent]);

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
    };
  }, []);
  return {
    onWheel: handlwRealWheel,
    zoom,
  };
};

export default useZoom;
