import { Circle, Layer, Rect, Text } from "react-konva";

import AtomEditorScreen from "@/editor/Stage";
import { NextOnlyPage } from "next";

const PageEditor: NextOnlyPage = () => {
  return (
    <AtomEditorScreen>
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
    </AtomEditorScreen>
  );
};

PageEditor.Layout = "editor";

export default PageEditor;
