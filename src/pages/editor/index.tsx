import { Circle, Layer, Rect, Stage } from "react-konva";

import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PageEditor: FC<Props> = (props) => {
  const screenwindow = screen();
  return (
    <AtomWrapper
      customCSS={(css) => css`
        overflow: none;
        canvas {
          border: 1px solid red !important;
        }
      `}
    >
      <Stage width={screenwindow?.width} height={screenwindow?.height}>
        <Layer>
          <Rect width={50} height={50} fill="red" draggable />
          <Circle
            x={200}
            y={200}
            stroke="black"
            radius={50}
            draggable
            fill="red"
          />
        </Layer>
      </Stage>
    </AtomWrapper>
  );
};

const screen = () => {
  if (typeof window !== "undefined") {
    const { height, width } = window.screen;
    return {
      height,
      width,
    };
  }
};

export default PageEditor;
