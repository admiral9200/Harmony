import { Line } from "react-konva";
import { IFCElement } from "../type";

const AtomElementDraw = (item: IFCElement) => {
  return (
    <Line
      key={item.id}
      points={item?.points}
      stroke="#2c26df"
      strokeWidth={5}
      tension={0.4}
      lineCap="round"
      lineJoin="round"
      //   globalCompositeOperation={
      //     line.tool === "eraser" ? "destination-out" : "source-over"
      //   }
    />
  );
};

export default AtomElementDraw;
