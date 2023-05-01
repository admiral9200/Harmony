import useElement from "@/hooks/useElement";
import useScreen from "@/hooks/useScreen";
import useElements from "@/hooks/useStatement";
import useZoom from "@/hooks/useZoom";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { Stage } from "react-konva";

type Props = {
  children: ReactNode;
};

const AtomEditorScreen: FC<Props> = ({ children }) => {
  const {
    ref,
    dimensions: { width, height },
  } = useScreen({
    deps: [],
  });

  const { onWheel, stage } = useZoom();

  const { handleStageClick } = useElements();

  const { setElement } = useElement();

  return (
    <AtomWrapper
      ref={ref}
      customCSS={(css) => css`
        overflow: none;
        border: 2px solid red;
      `}
    >
      <Stage
        width={width}
        height={height}
        onWheel={onWheel}
        scaleX={stage.scale}
        scaleY={stage.scale}
        onClick={(event) => {
          handleStageClick(event);
        }}
        onDblClick={() => {
          setElement({});
        }}
        x={stage.x}
        y={stage.y}
      >
        {children}
      </Stage>
    </AtomWrapper>
  );
};

export default AtomEditorScreen;
