import LogoHarmony from "@/components/icons/logo";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const LayoutEditorTop: FC<Props> = (props) => {
  return (
    <AtomWrapper
      customCSS={(css) => css`
        grid-column: 1 / 4;
        grid-row: 1;
        background-color: #292929;
        height: auto;
        padding: 1rem;
        border-bottom: 1px solid white;
      `}
    >
      <LogoHarmony color="white" width="40px" height="40px" />
    </AtomWrapper>
  );
};

export default LayoutEditorTop;
