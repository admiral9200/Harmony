import AtomEditorScreen from "@/editor/Stage";
import AtomEditorMapper from "@/editor/core/elements/mapper";
import { NextOnlyPage } from "next";

const PageEditor: NextOnlyPage = () => {
  return (
    <AtomEditorScreen>
      <AtomEditorMapper />
    </AtomEditorScreen>
  );
};

PageEditor.Layout = "editor";

export default PageEditor;
