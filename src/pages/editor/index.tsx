import AtomEditorScreen from "@/editor/Stage";
import AtomEditorMapper from "@/editor/core/elements/mapper";
import { NextOnlyPage } from "next";

const PageEditor: NextOnlyPage = () => {
  return (
    <AtomEditorScreen>
      <AtomEditorMapper />
      {/* <Rect
          x={242}
          y={80}
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
        /> */}
    </AtomEditorScreen>
  );
};

PageEditor.Layout = "editor";

export default PageEditor;
