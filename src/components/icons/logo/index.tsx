import { AtomIcon } from "lucy-nxtjs";
import { FC } from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

const LogoHarmony: FC<Props> = ({ color, height, width }) => (
  <AtomIcon
    height={height ?? "100px"}
    width={width ?? "100px"}
    color={color ?? "black"}
    customCSS={(css) => css`
      svg {
        stroke-width: 1;
        path {
          stroke-width: 1;
        }
      }
    `}
    src="https://res.cloudinary.com/whil/image/upload/v1681690426/app/harmony/SVGNORMALIZE_xjjlpj.svg"
  />
);

export default LogoHarmony;
