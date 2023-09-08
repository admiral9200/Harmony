import AtomModalControls, {
  controlsAtom,
} from "@/components/atoms/AtomModalControls";
import LayoutEditorSidebarLeft from "@/components/layout/editor/sidebar/left";
import LayoutEditorSidebarRight from "@/components/layout/editor/sidebar/right";
import themeColors from "@/themes";
import { AtomButton, AtomText, AtomWrapper } from "@whil/ui";
import { useSetAtom } from "jotai";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LayoutEditor: FC<Props> = ({ children }) => {
  const setControls = useSetAtom(controlsAtom);
  return (
    <AtomWrapper
      height="100%"
      flexDirection="row"
      width="100%"
      justifyContent="flex-start"
      customCSS={(css) => css`
        display: grid;
        grid-template-columns: 220px 1fr 220px;
        grid-template-rows: 1fr 1fr;
        height: 100vh;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
      `}
    >
      <AtomModalControls />
      <AtomWrapper
        customCSS={(css) => css`
          grid-column: 1 / 4;
          grid-row: 1;
          background-color: ${themeColors.dark};
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.6em;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        `}
        alignItems="center"
        justifyContent="center"
      >
        <AtomWrapper></AtomWrapper>
        <AtomWrapper alignItems="center" justifyContent="center">
          <AtomText color="white" fontWeight={"bold"}>
            Harmony
          </AtomText>
        </AtomWrapper>
        <AtomWrapper width="100%" justifyContent="flex-end">
          <AtomButton
            padding="0.7em"
            onClick={() => {
              // setMounted(true);
              setControls(true);
            }}
            customCSS={(css) => css`
              border-radius: 0em;
              border: 0px;
              border-radius: 0px;
              padding: 0;
              margin: 0;
              background-color: transparent;
              cursor: pointer;
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0001 7.88989L10.9301 9.74989C10.6901 10.1599 10.8901 10.4999 11.3601 10.4999H12.6301C13.1101 10.4999 13.3001 10.8399 13.0601 11.2499L12.0001 13.1099"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.30011 18.0399V16.8799C6.00011 15.4899 4.11011 12.7799 4.11011 9.89993C4.11011 4.94993 8.66011 1.06993 13.8001 2.18993C16.0601 2.68993 18.0401 4.18993 19.0701 6.25993C21.1601 10.4599 18.9601 14.9199 15.7301 16.8699V18.0299C15.7301 18.3199 15.8401 18.9899 14.7701 18.9899H9.26011C8.16011 18.9999 8.30011 18.5699 8.30011 18.0399Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
      <LayoutEditorSidebarLeft />
      {children}
      <LayoutEditorSidebarRight />
    </AtomWrapper>
  );
};

export default LayoutEditor;
