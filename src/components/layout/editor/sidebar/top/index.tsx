import LogoHarmony from "@/components/icons/logo";
import { getRandomColor } from "@/utils/randomColor";
import { AtomButton, AtomImage, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

type Methods = {
  icon: string;
  keyMethod: "MOVE" | "BOX" | "CIRCLE" | "LINE" | "IMAGE" | "TEXT" | "FRAME";
};

const METHODS: Methods[] = [
  {
    icon: "https://res.cloudinary.com/whil/image/upload/v1682553024/app/harmony/CURSOR_pyjccq.svg",
    keyMethod: "MOVE",
  },
  {
    icon: "https://res.cloudinary.com/whil/image/upload/v1682651572/app/harmony/format-square_jidxxt.svg",
    keyMethod: "FRAME",
  },
  {
    icon: "https://res.cloudinary.com/whil/image/upload/v1682557163/app/harmony/BOX2_zeiaof.svg",
    keyMethod: "BOX",
  },
  {
    icon: "https://res.cloudinary.com/whil/image/upload/v1682555039/app/harmony/CIRCLE_cldn7a.svg",
    keyMethod: "CIRCLE",
  },
  {
    icon: "https://res.cloudinary.com/whil/image/upload/v1682648930/app/harmony/arrow-right_si9i3q.svg",
    keyMethod: "LINE",
  },
  {
    icon: "https://res.cloudinary.com/whil/image/upload/v1682650955/app/harmony/gallery_tzrhyx.svg",
    keyMethod: "IMAGE",
  },
  {
    icon: "https://res.cloudinary.com/whil/image/upload/v1682651016/app/harmony/text_xeiovb.svg",
    keyMethod: "TEXT",
  },
];

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
        display: flex;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1em;
      `}
    >
      <LogoHarmony color="white" width="40px" height="40px" />
      <AtomWrapper flexDirection="row" width="auto" gap="1em">
        {METHODS?.map((item) => (
          <AtomButton
            key={item.icon}
            customCSS={(css) => css`
              padding: 8px;
            `}
            backgroundColor={getRandomColor()}
            isFocus
          >
            <AtomImage src={item.icon} width="25px" alt="" />
          </AtomButton>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default LayoutEditorTop;
