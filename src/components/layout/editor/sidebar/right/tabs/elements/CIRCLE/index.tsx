import useElement from "@/hooks/useElement";
import { css } from "@emotion/react";
import { AtomButton, AtomInput, AtomText, AtomWrapper } from "lucy-nxtjs";

const LayoutSidebarRightStageTabElementCircle = () => {
  const { element, allUpdate } = useElement();

  return (
    <AtomWrapper
      height="100%"
      justifyContent="flex-start"
      customCSS={(css) => css`
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: scroll;
        height: 90%;
        padding-right: 8px;
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 99px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #8679ec;

          box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
        }
        display: flex;
        justify-content: flex-start;
      `}
    >
      <AtomText color="white" fontWeight="bold" fontSize="17px">
        Circle Properties
      </AtomText>
      <AtomInput
        type="number"
        label="X"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customCSS={(css) => css`
          height: 50px;
        `}
        customWrapperCSS={(css) => css`
          height: auto;
        `}
        css={() => css`
          height: auto;
          color: white;
        `}
        value={element?.x}
        onChange={(event) => {
          allUpdate({
            ...element,
            x: Number(event.target.value),
          });
        }}
      />
      <AtomInput
        type="number"
        label="Y"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customCSS={(css) => css`
          height: 50px;
        `}
        customWrapperCSS={(css) => css`
          height: auto;
        `}
        css={() => css`
          height: auto;
          color: white;
        `}
        value={element?.y}
        onChange={(event) => {
          allUpdate({
            ...element,
            y: Number(event.target.value),
          });
        }}
      />

      <AtomInput
        type="number"
        label="Width And Height"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customCSS={(css) => css`
          height: 50px;
        `}
        customWrapperCSS={(css) => css`
          height: auto;
        `}
        css={() => css`
          height: auto;
          color: white;
        `}
        value={element?.width}
        onChange={(event) => {
          const isZero = event.target.value < 0 ? 1 : event.target.value;
          allUpdate({
            ...element,
            width: Number(isZero),
          });
        }}
      />
      <AtomInput
        type="color"
        label="Background Color"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customCSS={(css) => css`
          height: 50px;
        `}
        customWrapperCSS={(css) => css`
          height: auto;
        `}
        css={() => css`
          height: auto;
        `}
        value={element?.style?.backgroundColor}
        onChange={(event) => {
          allUpdate({
            ...element,
            style: {
              ...element?.style,
              backgroundColor: event.target.value as string,
            },
          });
        }}
      />
      <AtomInput
        type="color"
        label="Stroke Color"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customCSS={(css) => css`
          height: 50px;
        `}
        customWrapperCSS={(css) => css`
          height: auto;
        `}
        css={() => css`
          height: auto;
        `}
        value={element?.style?.stroke}
        onChange={(event) => {
          allUpdate({
            ...element,
            style: {
              ...element?.style,
              stroke: event.target.value as string,
            },
          });
        }}
      />
      <AtomInput
        type="number"
        label="Stroke Width"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customWrapperCSS={(css) => css`
          width: fit-content;
          height: auto;
        `}
        css={() => css`
          height: auto;
          width: 100%;
          color: white;
        `}
        value={element?.style?.strokeWidth ?? "#000000"}
        onChange={(event) => {
          allUpdate({
            ...element,
            style: {
              ...element.style,
              strokeWidth: Number(event.target.value),
            },
          });
        }}
      />
      <AtomInput
        type="number"
        label="shadowBlur"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customWrapperCSS={(css) => css`
          width: fit-content;
          height: auto;
        `}
        css={() => css`
          height: auto;
          width: 100%;
          color: white;
        `}
        value={element?.style?.shadowBlur ?? 0}
        onChange={(event) => {
          allUpdate({
            ...element,
            style: {
              ...element.style,
              shadowBlur: Number(event.target.value),
            },
          });
        }}
      />

      <AtomText color="white" fontWeight="bold" fontSize="12px">
        Shape Element
      </AtomText>
      <AtomWrapper height="auto" flexDirection="row" gap="10px">
        <AtomButton
          width="100%"
          onClick={() => {
            allUpdate({
              ...element,
              zIndex: element.zIndex + 1,
            });
          }}
          backgroundColor="#79ecd7"
        >
          UP
        </AtomButton>
        <AtomButton
          width="100%"
          backgroundColor="#8679ec"
          onClick={() => {
            allUpdate({
              ...element,
              zIndex: element.zIndex - 1,
            });
          }}
        >
          DOWN
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default LayoutSidebarRightStageTabElementCircle;
