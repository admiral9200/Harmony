import { AtomButton, AtomModal, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, useLayoutEffect, useState } from "react";

const Modal: FC = () => {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(
      JSON.parse(localStorage.getItem("harmony_modal") as string) ?? true
    );
  }, []);

  return (
    <>
      <AtomModal
        isShow={mounted}
        onCloseShow={() => {}}
        customCSS={(css) => css`
          background-color: #fff;
          height: 217px;
          width: 420px;
          padding: 30px 20px;
          gap: 10px;
          z-index: 99999999999999999999999999999999999999999999999999999999 !important;
        `}
      >
        <AtomWrapper
          height="100%"
          justifyContent="space-between"
          customCSS={(css) => css`
            flex: 1;
            width: -webkit-fill-available;
            gap: 10px;
          `}
        >
          <AtomText fontSize="16px" fontWeight="bold">
            Harmony Editor
          </AtomText>
          <AtomWrapper
            customCSS={(css) => css`
              background-color: black;
              height: 1px;
            `}
          >
            {" "}
          </AtomWrapper>{" "}
          <AtomText fontSize="12px">
            Hello!, I remember you that this is only a beta project. If you find
            a error tell me in my social media please.
          </AtomText>
          <AtomWrapper
            flexDirection="row"
            height="auto"
            justifyContent="flex-end"
            gap="20px"
          >
            <AtomButton
              onClick={() => {
                localStorage.setItem("harmony_modal", "false");
                setMounted(false);
              }}
              isFocus
              backgroundColor="#0072FF"
            >
              Ok I understoond
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      </AtomModal>
    </>
  );
};

export default Modal;
