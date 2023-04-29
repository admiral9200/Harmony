import useScreen from "@/hooks/useScreen";
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

  return (
    <AtomWrapper
      ref={ref}
      customCSS={(css) => css`
        overflow: none;
      `}
    >
      <Stage
        width={width}
        height={height}
        onWheel={onWheel}
        scaleX={stage.scale}
        scaleY={stage.scale}
        x={stage.x}
        y={stage.y}
      >
        {children}
      </Stage>
    </AtomWrapper>
  );
};

export default AtomEditorScreen;
