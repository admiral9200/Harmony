import useElement from "@/hooks/useElement";
import { css } from "@emotion/react";
import {
  AtomButton,
  AtomImage,
  AtomInput,
  AtomText,
  AtomWrapper,
} from "lucy-nxtjs";

const LayoutSidebarRightStageTabElementImage = () => {
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
        Image Properties
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
        label="Background"
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

      <AtomImage
        src={element?.src as string}
        alt=""
        customCSS={() => css`
          img {
            border-radius: 5px;
          }
          padding: 0px 5px;
        `}
      />
      <AtomInput
        type="file"
        label="URL Image"
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
        // value={element?.style?.stroke}
        onChange={(event) => {
          const reader = new FileReader();

          reader.onload = function (data) {
            const image = new Image();

            image.src = data?.target?.result as string;
            image.onload = () => {
              allUpdate({
                ...element,
                height: image.naturalHeight,
                width: image.naturalWidth,
                src: data?.target?.result as string,
              });
            };
          };
          reader.readAsDataURL(event.target.files[0]);
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
      <AtomWrapper height="auto" flexDirection="row" alignItems="flex-end">
        <AtomInput
          type="number"
          label="Border radius"
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
          value={element?.style?.borderRadius}
          onChange={(event) => {
            allUpdate({
              ...element,
              style: {
                ...element.style,
                borderRadius: Number(event.target.value),
              },
            });
          }}
        />
        <AtomButton
          padding="9px"
          backgroundColor={
            element?.style?.isAllBorderRadius ? "#8679ec" : "transparent"
          }
          margin="0px 0px 5px 0px"
          borderRadius="5px"
          onClick={() => {
            allUpdate({
              ...element,
              style: {
                ...element.style,
                isAllBorderRadius: !element?.style?.isAllBorderRadius,
                borderRadius: 0,
                borderRadiusBottomLeft: 0,
                borderRadiusBottomRight: 0,
                borderRadiusTopLeft: 0,
                borderRadiusTopRight: 0,
              },
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              d="M17.1538 1H20.3846C20.813 1 21.2239 1.17019 21.5269 1.47314C21.8298 1.77608 22 2.18696 22 2.61538V5.84615M1 5.84615V2.61538C1 2.18696 1.17019 1.77608 1.47314 1.47314C1.77608 1.17019 2.18696 1 2.61538 1H5.84615M17.1538 22H20.3846C20.813 22 21.2239 21.8298 21.5269 21.5269C21.8298 21.2239 22 20.813 22 20.3846V17.1538M1 17.1538V20.3846C1 20.813 1.17019 21.2239 1.47314 21.5269C1.77608 21.8298 2.18696 22 2.61538 22H5.84615"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </AtomButton>
      </AtomWrapper>

      {element?.style?.isAllBorderRadius && (
        <AtomWrapper height="auto">
          <AtomInput
            type="number"
            label="Border Radius left top"
            customCSSLabel={(css) => css`
              color: white;
            `}
            customWrapperCSS={(css) => css`
              height: auto;
            `}
            css={() => css`
              height: auto;
              width: 100%;
              color: white;
            `}
            value={element?.style?.borderRadiusTopLeft}
            onChange={(event) => {
              allUpdate({
                ...element,
                style: {
                  ...element.style,
                  borderRadius: 0,
                  borderRadiusTopLeft: Number(event.target.value),
                },
              });
            }}
          />
          <AtomInput
            type="number"
            customCSSLabel={(css) => css`
              color: white;
            `}
            customWrapperCSS={(css) => css`
              height: auto;
            `}
            css={() => css`
              height: auto;
              width: 100%;
              color: white;
            `}
            label="Border Radius right top"
            value={element?.style?.borderRadiusTopRight}
            onChange={(event) => {
              allUpdate({
                ...element,
                style: {
                  ...element.style,
                  borderRadius: 0,
                  borderRadiusTopRight: Number(event.target.value),
                },
              });
            }}
          />
          <AtomInput
            type="number"
            customCSSLabel={(css) => css`
              color: white;
            `}
            customWrapperCSS={(css) => css`
              height: auto;
            `}
            label="Border Radius right bottom"
            css={() => css`
              height: auto;
              width: 100%;
              color: white;
            `}
            value={element?.style?.borderRadiusBottomRight}
            onChange={(event) => {
              allUpdate({
                ...element,
                style: {
                  ...element.style,
                  borderRadius: 0,
                  borderRadiusBottomRight: Number(event.target.value),
                },
              });
            }}
          />
          <AtomInput
            type="number"
            label="Border Radius left bottom"
            customCSSLabel={(css) => css`
              color: white;
            `}
            customWrapperCSS={(css) => css`
              height: auto;
            `}
            css={() => css`
              height: auto;
              width: 100%;
              color: white;
            `}
            value={element?.style?.borderRadiusBottomLeft}
            onChange={(event) => {
              allUpdate({
                ...element,
                style: {
                  ...element.style,
                  borderRadius: 0,
                  borderRadiusBottomLeft: Number(event.target.value),
                },
              });
            }}
          />
        </AtomWrapper>
      )}
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

export default LayoutSidebarRightStageTabElementImage;
