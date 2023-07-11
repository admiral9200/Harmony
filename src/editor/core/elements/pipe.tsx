/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { memo, useCallback } from "react";
import { Layer } from "react-konva";
import { Portal } from "react-konva-utils";
import { useTool } from "../hooks";
import useElements from "../hooks/elements/hook";
import usePipe from "../hooks/pipe/hook";
import { IKeyTool } from "../hooks/tool/types";
import { MapEls } from "./mp_el";
import { FCE } from "./type";

const AtomPipeComponent = memo(() => {
  const { pipeline } = usePipe();
  const { draggable } = useElements();
  const { isMoving } = useTool();
  const onChange = useCallback(() => {}, []);

  return (
    <>
      {Object?.values?.(pipeline)?.length > 0 && (
        <Layer>
          <Portal selector=".top-layer" enabled={true}>
            {[pipeline]?.map((item) => {
              const Component = MapEls?.[`${item?.tool}` as IKeyTool] as FCE;
              return (
                <Component
                  {...item}
                  key={item?.id}
                  draggable={draggable}
                  isMoving={isMoving}
                  isSelected={item?.id === pipeline?.id}
                  onChange={onChange}
                  onSelect={onChange}
                />
              );
            })}
          </Portal>
        </Layer>
      )}
    </>
  );
});
export default AtomPipeComponent;
