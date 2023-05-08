import useElement from "@/hooks/useElement";
import { css } from "@emotion/react";
import { AtomButton, AtomInput, AtomText, AtomWrapper } from "lucy-nxtjs";

const LayoutSidebarRightStageTabElementText = () => {
  const { element, allUpdate } = useElement();
  // console.log({ element });

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
        Text Properties
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
        label="Rotate"
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
        value={element?.rotate}
        onChange={(event) => {
          allUpdate({
            ...element,
            rotate: Number(event.target.value),
          });
        }}
      />
      <AtomInput
        type="number"
        label="Width"
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
        type="number"
        label="Height"
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
        value={element?.height}
        onChange={(event) => {
          const isZero = event.target.value < 0 ? 1 : event.target.value;
          allUpdate({
            ...element,
            height: Number(isZero),
          });
        }}
      />
      <AtomInput
        type="color"
        label="Color Text"
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
              colorText: event.target.value as string,
            },
          });
        }}
      />
      <AtomInput
        type="number"
        label="Font Size"
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
        value={element?.style?.fontSize ?? 12}
        onChange={(event) => {
          allUpdate({
            ...element,
            style: {
              ...element.style,
              fontSize: Number(event.target.value),
            },
          });
        }}
      />

      <AtomInput
        type="select"
        label="Font Weight"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customWrapperCSS={(css) => css`
          width: fit-content;
          height: auto;
          select {
            color-scheme: var(--input-date-color, dark);
          }
        `}
        customCSS={() => css``}
        css={() => css`
          color: white;
          option {
            color: black;
          }
        `}
        value={element?.style?.fontStyle ?? 12}
        options={() => [
          {
            id: "1",
            label: "Normal",
            value: "normal",
          },
          {
            id: "2",
            label: "Bold",
            value: "bold",
          },
        ]}
        onChange={(event) => {
          allUpdate({
            ...element,
            style: {
              ...element.style,
              fontStyle: event.target.value,
            },
          });
        }}
      />
      <AtomInput
        type="select"
        label="Text Decoration"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customWrapperCSS={(css) => css`
          width: fit-content;
          height: auto;
          select {
            color-scheme: var(--input-date-color, dark);
          }
        `}
        customCSS={() => css``}
        css={() => css`
          color: white;
          option {
            color: black;
          }
        `}
        value={element?.style?.textDecoration ?? 12}
        options={() => [
          {
            id: "1",
            label: "none",
            value: "none",
          },
          {
            id: "2",
            label: "underline",
            value: "underline",
          },
        ]}
        onChange={(event) => {
          allUpdate({
            ...element,
            style: {
              ...element.style,
              textDecoration: event.target.value,
            },
          });
        }}
      />
      <AtomInput
        type="text"
        label="Text"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customWrapperCSS={(css) => css`
          width: fit-content;
          height: auto;
          select {
            color-scheme: var(--input-date-color, dark);
          }
        `}
        customCSS={() => css``}
        css={() => css`
          color: white;
          option {
            color: black;
          }
        `}
        value={element?.text ?? element?.id?.slice?.(0, 4)}
        onChange={(event) => {
          allUpdate({
            ...element,
            text: event.target.value,
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
            if (element.zIndex) {
              allUpdate({
                ...element,
                zIndex: element.zIndex + 1,
              });
            }
          }}
          backgroundColor="#79ecd7"
        >
          UP
        </AtomButton>
        <AtomButton
          width="100%"
          backgroundColor="#8679ec"
          onClick={() => {
            if (element.zIndex) {
              allUpdate({
                ...element,
                zIndex: element.zIndex === 1 ? 1 : element.zIndex - 1,
              });
            }
          }}
        >
          DOWN
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default LayoutSidebarRightStageTabElementText;
