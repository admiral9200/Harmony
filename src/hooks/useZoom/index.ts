import { useState } from "react";

import Konva from "konva";

const useZoom = () => {
  const [stage, setStage] = useState({
    scale: 1,
    x: 0,
    y: 0,
  });

  const handleWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    const scaleBy = 1.13;
    const stage = e.target?.getStage() as Konva.Stage;
    const oldScale = stage?.scaleX?.();

    const mousePointTo = {
      x:
        (stage?.getPointerPosition?.()?.x as number) / oldScale -
        stage.x() / oldScale,
      y:
        (stage?.getPointerPosition?.()?.y as number) / oldScale -
        stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setStage({
      scale: newScale,
      x:
        ((stage?.getPointerPosition?.()?.x as number) / newScale -
          mousePointTo.x) *
        newScale,
      y:
        ((stage?.getPointerPosition?.()?.y as number) / newScale -
          mousePointTo.y) *
        newScale,
    });
  };
  return {
    onWheel: handleWheel,
    stage,
  };
};

export default useZoom;
