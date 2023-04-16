import { AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const SidebarHomeLeft: FC<Props> = (props) => {
  return (
    <AtomWrapper
      customCSS={(css) => css`
        height: 100%;
        width: 320px;
        background-color: #2c2c2c;
      `}
    >
      <AtomText color="white">Harmony</AtomText>
    </AtomWrapper>
  );
};

export default SidebarHomeLeft;
