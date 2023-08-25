import icons from "@/assets";
import { useElement } from "@/editor/core/hooks";
import usePages from "@/editor/core/hooks/pages/hook";
import themeColors from "@/themes";
import { AtomButton, AtomIcon, AtomText, AtomWrapper } from "@whil/ui";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PagesComponent: FC<Props> = () => {
  const { pages, hnadleSelectPage, page, handleAddPage } = usePages();
  const { handleEmptyElement } = useElement();

  return (
    <AtomWrapper
      width="100%"
      display="flex"
      flexDirection="column"
      customCSS={(css) => css`
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      `}
    >
      <AtomWrapper padding="0.5em 0.7em" justifyContent="space-between">
        <AtomText color="white" fontWeight="bold" fontSize="16px">
          Pages
        </AtomText>

        <AtomButton
          padding="0em"
          alignItems="center"
          justifyContent="center"
          backgroundColor="transparent"
          border="0px"
          onClick={() => {
            handleAddPage();
            handleEmptyElement();
          }}
        >
          <AtomIcon src={icons.add} color="white" width="20px" height="20px" />
        </AtomButton>
      </AtomWrapper>
      <AtomWrapper
        customCSS={(css) => css`
          height: 9rem;
          overflow: hidden;
          overflow-x: hidden;

          &:hover {
            overflow-y: scroll;

            ::-webkit-scrollbar {
              width: 6px;
            }
            ::-webkit-scrollbar-thumb {
              background: #ffffff67;
              border-radius: 99px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: ${themeColors.white};
              box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
            }
          }

          display: flex;
          justify-content: flex-start;
        `}
        width="100%"
        flexDirection="column"
      >
        {pages.map((item, index) => (
          <AtomWrapper
            key={item?.id}
            height="auto"
            padding="0.35em 0.7em"
            className="CursorPointer"
            customCSS={(css) => css`
              width: 100%;
              border: 1px solid ${themeColors.dark};

              user-select: none !important;

              &:hover {
                border: 1px solid ${themeColors.primary};
              }
            `}
            flexDirection="row"
            alignItems="center"
            gap="6px"
            onClick={() => {
              hnadleSelectPage(item?.id);
              handleEmptyElement();
            }}
          >
            <AtomWrapper height="20px" width="20px">
              {item?.id === page && (
                <AtomIcon
                  src={icons.check}
                  height="1em"
                  width="1em"
                  color="default"
                  customCSS={(css) => css`
                    svg {
                      path {
                        stroke: #ffffff;
                      }
                      line {
                        stroke: #ffffff;
                      }
                    }
                  `}
                />
              )}
            </AtomWrapper>
            <AtomText
              color={themeColors.white}
              customCSS={(css) => css`
                font-size: small;
                user-select: none;
                &::first-letter {
                  text-transform: uppercase;
                }
                text-transform: lowercase;
              `}
            >
              Page {index + 1}
            </AtomText>
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default PagesComponent;
