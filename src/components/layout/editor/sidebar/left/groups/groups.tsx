import icons from "@/assets";
import { useElement } from "@/editor/core/hooks";
import useGroups from "@/editor/core/hooks/groups/hook";
import themeColors from "@/themes";
import { AtomIcon, AtomText, AtomWrapper } from "@whil/ui";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PagesComponent: FC<Props> = () => {
  const { listGroups, groupSelectId, setGroupSelectId } = useGroups();
  const { handleEmptyElement, handleSetElement, element } = useElement();
  return (
    <AtomWrapper
      width="100%"
      display="flex"
      flexDirection="column"
      customCSS={(css) => css`
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        padding-bottom: 1em;
      `}
    >
      <AtomWrapper padding="0.5em 0.7em" justifyContent="space-between">
        <AtomText color="white" fontWeight="bold" fontSize="16px">
          Groups
        </AtomText>
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
        {listGroups.map((item, index) => (
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
              setGroupSelectId(item?.id);
              handleSetElement(item);
            }}
          >
            <AtomWrapper height="20px" width="20px">
              {item?.groupId === groupSelectId && (
                <AtomIcon
                  src={icons.check}
                  height="20px"
                  width="20px"
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
                user-select: none;
                &::first-letter {
                  text-transform: uppercase;
                }
                text-transform: lowercase;
              `}
            >
              Group {index + 1}
            </AtomText>
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default PagesComponent;
