import { css } from "@emotion/react";
import { AtomModal, AtomWrapper } from "@whil/ui";
import { atom, useAtom } from "jotai";
import { AtomButton } from "lucy-nxtjs";
import { FC } from "react";
import StepTwoModal from "../steps/two/two";

export const controls = [
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

export const controlsAtom = atom(false);

const AtomModalControls: FC = () => {
  const [mounted, setMounted] = useAtom(controlsAtom);

  return (
    <>
      <AtomModal
        isShow={mounted}
        onCloseShow={() => {}}
        customCSS={() => css`
          background-color: #fff;
          height: auto;
          max-height: 695px;
          max-width: 620px;
          padding: 2em;
          gap: 1em;
          /* gap: 10px; */
          z-index: 99999999999999999999999999999999999999999999999999999999 !important;
        `}
      >
        <StepTwoModal />
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
            isFocus
            backgroundColor="#0496ff"
          >
            Ok
          </AtomButton>
        </AtomWrapper>
      </AtomModal>
    </>
  );
};

export default AtomModalControls;
