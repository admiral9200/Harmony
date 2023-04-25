import { Circle, Layer, Rect, Stage, Text } from "react-konva";

import useScreen from "@/hooks/useScreen";
import { AtomWrapper } from "lucy-nxtjs";
import { NextOnlyPage } from "next";

const PageEditor: NextOnlyPage = (props) => {
  const screen = useScreen({
    deps: [],
  });

  return (
    <AtomWrapper
      ref={screen.ref}
      customCSS={(css) => css`
        overflow: none;
      `}
    >
      <Stage
        width={screen?.dimensions.width}
        height={screen?.dimensions.height}
      >
        <Layer>
          <Rect
            width={50}
            height={50}
            fill="red"
            draggable
            onClick={() => {
              console.log("SDF");
            }}
          />
          <Circle
            x={200}
            y={200}
            stroke="black"
            radius={50}
            draggable
            fill="red"
          />
          <Text
            fontSize={24}
            // fontStyle="bold"
            text="Heyt "
            wrap="char"
            draggable
            align="center"
          />
        </Layer>
      </Stage>
    </AtomWrapper>
  );
};

PageEditor.Layout = "editor";

export default PageEditor;
