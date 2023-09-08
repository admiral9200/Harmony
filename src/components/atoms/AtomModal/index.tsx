/* eslint-disable react/no-unescaped-entities */
import { AtomButton, AtomModal, AtomWrapper } from "lucy-nxtjs";
import { FC, useState } from "react";
import StepOneModal from "../steps/one/one";
import StepTwoModal from "../steps/two/two";

const stepd = {
  1: <StepOneModal />,
  2: <StepTwoModal />,
};

const Modal: FC = () => {
  const [mounted, setMounted] = useState(true);
  const [steps, setSteps] = useState(1);

  return (
    <>
      <AtomModal
        isShow={mounted}
        onCloseShow={() => {}}
        customCSS={(css) => css`
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
        {stepd[steps as keyof typeof stepd]}
        <AtomWrapper
          flexDirection="row"
          height="auto"
          justifyContent="center"
          gap="20px"
        >
          {steps !== 1 ? (
            <AtomButton
              onClick={() => {
                // setMounted(false);
                setSteps((prev) => (prev === 1 ? 1 : prev - 1));
              }}
              isFocus
              backgroundColor="#c0c0c0"
            >
              Back
            </AtomButton>
          ) : null}
          <AtomButton
            onClick={() => {
              // setMounted(false);
              if (steps === 2) {
                setMounted(false);
              } else {
                setSteps((prev) => prev + 1);
              }
            }}
            isFocus
            backgroundColor="#0496ff"
          >
            {steps === 2 ? "OK" : "Next"}
            {/* Next */}
          </AtomButton>
        </AtomWrapper>
      </AtomModal>
    </>
  );
};

export default Modal;
