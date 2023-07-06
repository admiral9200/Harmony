import { IElement } from "@/editor/core/elements/type";
import { IKeyTool } from "@/editor/core/hooks/tool/types";
import { Image } from "konva/lib/shapes/Image";
import { Rect } from "konva/lib/shapes/Rect";
import ThreadBox from "./threads-box";
import ThreadCircle from "./threads-circle";
import ThreadImg from "./threads.image";

export type Threads = Rect | Image;

type IThreads = {
  [key in IKeyTool]?: (element: IElement | Partial<IElement>) => Threads;
};

const threads: IThreads = {
  BOX: ThreadBox,
  IMAGE: ThreadImg,
  CIRCLE: ThreadCircle,
};

export default threads;
