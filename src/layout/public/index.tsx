import SidebarHomeLeft from "@/components/layout/feed/sidebar/left";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LayoutPublicHarmony: FC<Props> = ({ children }) => {
  return (
    <AtomWrapper
      height="100%"
      flexDirection="row"
      width="100%"
      justifyContent="flex-start"
      customCSS={(css) => css`
        height: 100vh;
        overflow: none;
      `}
    >
      <SidebarHomeLeft />
      {children}
    </AtomWrapper>
  );
};

export default LayoutPublicHarmony;
