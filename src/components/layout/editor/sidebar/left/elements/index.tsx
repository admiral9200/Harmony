import useElement from "@/hooks/useElement";
import useElements from "@/hooks/useStatement";
import { AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ElementsList: FC<Props> = (props) => {
  const { elements } = useElements();
  const { setElement, element } = useElement();
  return (
    <AtomWrapper
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
        gap: 10px;
      `}
    >
      {elements?.map((item, index) => (
        <AtomWrapper
          key={item.id}
          height="auto"
          customCSS={(css) => css`
            border: 1px solid white;
            width: 100%;
            padding: 5px;
            cursor: pointer;
            user-select: none !important;
            ${element.id === item?.id &&
            css`
              background-color: #8679ec;
            `}
          `}
          onClick={() => setElement(item)}
        >
          <AtomText
            color="white"
            cursor="pointer"
            customCSS={(css) => css`
              user-select: none;
            `}
          >
            {index} {item.tool} {item.id?.slice(0, 4)}
          </AtomText>
        </AtomWrapper>
      ))}
    </AtomWrapper>
  );
};

export default ElementsList;
