/* eslint-disable react-hooks/exhaustive-deps */
import { IParamsElement } from "@/editor/core/elements/type";
import { useElement, useTool } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import useSelect from "@/editor/core/hooks/select";
import useCallStkcTime from "@/hooks/useCallTime";
import themeColors from "@/themes";
import { AtomInput, AtomText, AtomWrapper } from "@whil/ui";
import { FC, useCallback } from "react";

const fonts = {
  Roboto: {
    label: "Roboto",
    styles: ["normal", "italic"],
    weight: [100, 300, 400, 500, 700, 900],
  },
};

const SidebarText: FC = () => {
  const { SelectedChangeElement, handleSelectedChangeElement } = useSelect();
  const { handleSetElement } = useElement();
  const { handleSetElements } = useElements();
  const { setTool } = useTool();
  const { text } = SelectedChangeElement;

  const { setTimer } = useCallStkcTime({
    callback: () => {
      handleSetElement(SelectedChangeElement);
      handleSetElements(SelectedChangeElement);
    },
    ms: 250,
  });

  const handle = useCallback((params?: IParamsElement) => {
    setTimer(0);
    handleSelectedChangeElement({
      ...params,
    });
  }, []);
  return (
    <AtomWrapper display="flex" flexDirection="column" width="100%">
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          align-items: center;
          justify-content: flex-start;
        `}
      >
        <AtomText color="white" fontWeight={"bold"}>
          Text
        </AtomText>
      </AtomWrapper>
      <AtomWrapper padding="0.5em 0.7em" gap="0.4em">
        <AtomWrapper
          as={"select"}
          gap="0.4em"
          value={SelectedChangeElement?.style?.fontFamily}
          onChange={(event: any) => {
            handle({
              style: {
                ...SelectedChangeElement.style,
                fontFamily: event.target.value,
              },
            });
          }}
          customCSS={(css) => css`
            width: 100%;
            background-color: ${themeColors?.dark};
            color: ${themeColors?.white};
          `}
        >
          {Object.keys(fonts)?.map((item) => (
            <AtomText as={"option"} key={item}>
              {item}
            </AtomText>
          ))}
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        padding="0.5em 0.7em"
        gap="0.4em"
        customCSS={(css) => css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        `}
      >
        <AtomWrapper
          as={"select"}
          gap="0.4em"
          value={SelectedChangeElement?.style?.fontWeight}
          onChange={(event: any) => {
            handle({
              style: {
                ...SelectedChangeElement.style,
                fontWeight: Number(event.target.value),
              },
            });
          }}
          customCSS={(css) => css`
            background-color: ${themeColors?.dark};
            color: ${themeColors?.white};
          `}
        >
          {fonts?.[
            `${SelectedChangeElement?.style?.fontFamily}` as keyof typeof fonts
          ]?.weight?.map((item) => (
            <AtomText as={"option"} key={item}>
              {item}
            </AtomText>
          ))}
        </AtomWrapper>
        <AtomInput
          readonly
          type="number"
          value={SelectedChangeElement.style?.fontSize}
          onChange={(event) => {
            handle({
              style: {
                ...SelectedChangeElement.style,
                fontSize: Number(event.target.value),
              },
            });
          }}
          customCSS={(css) => css`
            padding: 0.2em;
            color: white;
            width: 100%;
            border: 1px solid ${themeColors.dark};
            &:hover {
              border: 1px solid ${themeColors.white};
            }
            background-color: ${themeColors.dark};
          `}
        />
      </AtomWrapper>

      <AtomWrapper
        margin="0em 0.7em"
        padding="0.5em"
        as={"textarea"}
        value={`${text}`}
        onClick={() => {
          setTool("WRITING");
        }}
        onChange={(event: any) => {
          setTool("WRITING");
          handle({
            text: `${event.target.value}`,
          });
        }}
        customCSS={(css) => css`
          color: white;
          background-color: black;
          min-height: 220px;

          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-thumb {
            background: ${themeColors.dark};
            border-radius: 99px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: ${themeColors.white};
            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
          }
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
      ></AtomWrapper>
    </AtomWrapper>
  );
};

export default SidebarText;
