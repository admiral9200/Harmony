/* eslint-disable jsx-a11y/alt-text */
import { Image as KonvaImg } from "react-konva";
import { IFCElement } from "../type";

const AtomElementImage = (item: IFCElement) => {
  const { x, y } = item;
  const image = new Image();
  image.src = item.src as string;
  return <KonvaImg x={x} y={y} image={image} />;
};

export default AtomElementImage;
