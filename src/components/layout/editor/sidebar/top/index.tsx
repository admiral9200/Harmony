import AtomModalControls from "@/components/atoms/AtomModalControls";
import LogoHarmony from "@/components/icons/logo";
import { IElement } from "@/editor/core/elements/type";
import { keyToolAtom } from "@/editor/core/tools";
import { IKeyTool } from "@/editor/core/tools/types";
import useElement from "@/hooks/useElement";
import { useAtom } from "jotai";
import { AtomButton, AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
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
      <LogoHarmony color="white" width="50px" height="50px" />
      <AtomText fontSize="17px" fontWeight="bold" color="white">
        Harmony Editor
      </AtomText>
      <AtomWrapper
        flexDirection="row"
        width="auto"
        gap="1em"
        alignItems="center"
        justifyContent="center"
      >
        {METHODS?.map((item) => {
          const isSelect = item.keyMethod === method;
          return (
            <AtomButton
              key={item.icon}
              customCSS={(css) => css`
                padding: 5px;
                border-radius: 5px;
              `}
              backgroundColor={isSelect ? "#0496ff" : "none"}
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
      <AtomWrapper
        width="100%"
        alignItems="center"
        flexDirection="row"
        justifyContent="flex-end"
        gap="10px"
      >
        <AtomModalControls />
        <AtomButton
          isFocus
          backgroundColor="#0e0e0e"
          onClick={() => {
            window.open("https://github.com/Whil117/Harmony", "_blank");
          }}
          customCSS={(css) => css`
            padding: 5px;
            border-radius: 5px;
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 115 112"
            fill="none"
          >
            <path
              d="M57.4998 0.416748C50.0035 0.416748 42.5807 1.89325 35.655 4.76196C28.7293 7.63066 22.4365 11.8354 17.1358 17.1361C6.43062 27.8413 0.416504 42.3606 0.416504 57.5001C0.416504 82.7309 16.7994 104.137 39.4615 111.729C42.3157 112.186 43.229 110.416 43.229 108.875V99.228C27.4169 102.653 24.049 91.5788 24.049 91.5788C21.4232 84.9572 17.7128 83.1876 17.7128 83.1876C12.5182 79.6484 18.1123 79.7626 18.1123 79.7626C23.8207 80.1622 26.8461 85.6422 26.8461 85.6422C31.8123 94.3188 40.2036 91.7501 43.4573 90.3801C43.9711 86.6697 45.4553 84.158 47.0536 82.7309C34.3811 81.3038 21.0807 76.3947 21.0807 54.6459C21.0807 48.3097 23.2498 43.2292 26.9603 39.1763C26.3894 37.7492 24.3915 31.8126 27.5311 24.1063C27.5311 24.1063 32.3261 22.5651 43.229 29.9288C47.7386 28.673 52.6478 28.0451 57.4998 28.0451C62.3519 28.0451 67.2611 28.673 71.7707 29.9288C82.6736 22.5651 87.4686 24.1063 87.4686 24.1063C90.6082 31.8126 88.6103 37.7492 88.0394 39.1763C91.7498 43.2292 93.919 48.3097 93.919 54.6459C93.919 76.4517 80.5615 81.2467 67.8319 82.6738C69.8869 84.4434 71.7707 87.9255 71.7707 93.2342V108.875C71.7707 110.416 72.684 112.243 75.5953 111.729C98.2573 104.08 114.583 82.7309 114.583 57.5001C114.583 50.0038 113.107 42.5809 110.238 35.6552C107.369 28.7296 103.165 22.4367 97.8638 17.1361C92.5632 11.8354 86.2703 7.63066 79.3447 4.76196C72.419 1.89325 64.9961 0.416748 57.4998 0.416748Z"
              fill="white"
            />
          </svg>
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default LayoutEditorTop;
