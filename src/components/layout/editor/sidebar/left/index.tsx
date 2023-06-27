import icons from "@/assets";
import themeColors from "@/themes";
import { AtomIcon, AtomText, AtomWrapper } from "@whil/ui";
import { FC } from "react";
import ElementsList from "./elements";

const LayoutEditorSidebarLeft: FC = () => {
  return (
    <AtomWrapper
      backgroundColor={`${themeColors.dark}`}
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      height="inherit"
      display="flex"
      flexDirection="column"
      customCSS={(css) => css`
        border-right: 1px solid rgba(255, 255, 255, 0.25);
      `}
    >
      <AtomWrapper
        width="100%"
        padding="0.4em"
        customCSS={(css) => css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        `}
      >
        <AtomText
          color="white"
          fontWeight="bold"
          padding="0.5em 0.7em"
          fontSize="0.8em"
        >
          Layers
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        width="100%"
        display="flex"
        flexDirection="column"
        customCSS={(css) => css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          padding-bottom: 1em;
        `}
      >
        <AtomText
          color="white"
          fontWeight="bold"
          fontSize="16px"
          padding="0.5em 0.7em"
        >
          Pages
        </AtomText>
        <AtomWrapper
          customCSS={(css) => css`
            height: 15rem;
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
            <AtomWrapper
              key={item}
              height="auto"
              padding="0.35em 0.7em"
              customCSS={(css) => css`
                width: 100%;
                border: 1px solid ${themeColors.dark};
                cursor: pointer;
                user-select: none !important;

                &:hover {
                  border: 1px solid ${themeColors.primary};
                }
              `}
              flexDirection="row"
              alignItems="center"
              gap="5px"
              // onClick={() => setElement(item)}
            >
              <AtomIcon
                src={icons.check}
                color="default"
                height="20px"
                width="20px"
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
              <AtomText
                color={themeColors.white}
                cursor="pointer"
                customCSS={(css) => css`
                  user-select: none;
                  &::first-letter {
                    text-transform: uppercase;
                  }
                  text-transform: lowercase;
                `}
              >
                Page {item}
              </AtomText>
            </AtomWrapper>
          ))}
        </AtomWrapper>
      </AtomWrapper>
      <ElementsList />
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarLeft;
