import LogoHarmony from "@/components/icons/logo";
import { IElement } from "@/editor/core/elements/type";
import { keyToolAtom } from "@/editor/core/tools";
import { IKeyTool } from "@/editor/core/tools/types";
import useElement from "@/hooks/useElement";
import { getRandomsColors } from "@/utils/randomColor";
import { useAtom } from "jotai";
import { AtomButton, AtomImage, AtomWrapper } from "lucy-nxtjs";
import { FC } from "react";

type Methods = {
  icon: string;
  keyMethod: IKeyTool;
};

const METHODS: Methods[] = [
  {
    icon: "https://res.cloudinary.com/whil/image/upload/v1682553024/app/harmony/CURSOR_pyjccq.svg",
    keyMethod: "MOVE",
  },
  // {
  //   icon: "https://res.cloudinary.com/whil/image/upload/v1682651572/app/harmony/format-square_jidxxt.svg",
  //   keyMethod: "FRAME",
  // },
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
  {
    icon: "https://res.cloudinary.com/whil/image/upload/v1683268080/app/harmony/DRAW_hwcwpt.svg",
    keyMethod: "DRAW",
  },
];

const colors = getRandomsColors(METHODS.length);

const LayoutEditorTop: FC = () => {
  const [method, setMethod] = useAtom(keyToolAtom);
  const { setElement } = useElement();

  return (
    <AtomWrapper
      customCSS={(css) => css`
        grid-column: 1 / 4;
        grid-row: 1;
        background-color: #0d0e0e;
        height: auto;
        padding: 1rem;
        border-bottom: 1px solid white;
        display: flex;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1em;
        z-index: 999999999999999999999;
      `}
    >
      <LogoHarmony color="white" width="45px" height="45px" />
      <AtomWrapper
        flexDirection="row"
        width="auto"
        gap="1em"
        alignItems="center"
        justifyContent="center"
      >
        {METHODS?.map((item, index) => {
          const isSelect = item.keyMethod === method;
          return (
            <AtomButton
              key={item.icon}
              customCSS={(css) => css`
                padding: 5px;
                border-radius: 5px;
              `}
              backgroundColor={isSelect ? colors?.[index] : colors?.[index]}
              alignItems="center"
              justifyContent="center"
              isFocus={isSelect}
              onClick={() => {
                setMethod(item.keyMethod);
                setElement({} as IElement);
              }}
            >
              <AtomImage src={item.icon} width="22px" alt="" />
            </AtomButton>
          );
        })}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default LayoutEditorTop;
