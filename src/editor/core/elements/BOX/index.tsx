import { Rect } from "react-konva";
import { IFCElement } from "../type";

const AtomEditorElementBox = ({ x, y, draggable }: IFCElement) => {
  return (
    <Rect
      x={x}
      y={y}
      width={50}
      height={50}
      fill="red"
      draggable={draggable}
      onClick={() => {
        console.log("Box");
      }}
    />
  );
};

export default AtomEditorElementBox;
