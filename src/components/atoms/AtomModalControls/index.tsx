import { css } from "@emotion/react";
import { AtomButton, AtomModal, AtomText, AtomWrapper } from "@whil/ui";
import { FC, useState } from "react";

const controls = [
  {
    label: "DELETE",
    value: "Delete a element selected",
  },
  {
    label: "ALT",
    value: "when you have an item selected, hold down alt and drag to copy it",
  },
  {
    label: "SHIFT",
    value: "Hold down for a scroll horizontal",
  },
  {
    label: "CONTROL",
    value: "Hold down for a scroll ZOOM",
  },
  {
    label: "SCROLL WHEEL",
    value: "Move the mouse wheel for vertical scrolling.",
  },
  {
    label: "F",
    value: "Shortcut for change tool to create a BOX",
  },
  {
    label: "O",
    value: "Shortcut for change tool to create a CIRCLE",
  },
  {
    label: "T",
    value: "Shortcut for change tool to create a TEXT",
  },
  {
    label: "V",
    value: "Shortcut for change tool to move ELEMENTS",
  },
  {
    label: "I",
    value: "Shortcut for change tool to create a IMAGE",
  },
  {
    label: "L",
    value: "Shortcut for change tool to create a LINE",
  },
];

const AtomModalControls: FC = () => {
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <AtomModal
        isShow={mounted}
        onCloseShow={() => {}}
        customCSS={() => css`
          background-color: #fff;
          height: auto;
          width: 460px;
          padding: 30px 20px;
          gap: 10px;
          z-index: 99999999999999999999999999999999999999999999999999999999 !important;
        `}
      >
        <AtomWrapper
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
          customCSS={(css) => css`
            flex: 1;
            width: -webkit-fill-available;
            gap: 10px;
          `}
        >
          <AtomText fontSize="16px" fontWeight="bold">
            Harmony Editor Controls
          </AtomText>
          <AtomWrapper
            flexDirection="column"
            customCSS={(css) => css`
              background-color: black;
              height: 1px;
            `}
          >
            {" "}
          </AtomWrapper>{" "}
          <AtomText>
            You can use the keyboard for an easier experience!
          </AtomText>
          <AtomWrapper flexDirection="column">
            {controls.map((item) => (
              <AtomWrapper key={item.label} gap="0.4em" flexDirection="row">
                <AtomText>
                  <strong>{item.label}</strong> {item.value}
                </AtomText>
              </AtomWrapper>
            ))}
          </AtomWrapper>
          <AtomWrapper
            flexDirection="row"
            height="auto"
            justifyContent="flex-end"
            gap="20px"
          >
            <AtomButton
              onClick={() => {
                setMounted(false);
              }}
              backgroundColor="#0496ff"
              padding="0.7em"
              customCSS={(css) => css`
                border-radius: 0em;
                border: 0px;
                border-radius: 5px;
                cursor: pointer;
              `}
            >
              Ok
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      </AtomModal>
      <AtomButton
        padding="0.7em"
        backgroundColor="#0496ff"
        onClick={() => {
          setMounted(true);
        }}
        customCSS={(css) => css`
          border-radius: 0em;
          border: 0px;
          border-radius: 0px;
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
    </>
  );
};

export default AtomModalControls;
