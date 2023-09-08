import { AtomText, AtomWrapper } from "@whil/ui";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const StepOneModal: FC<Props> = (props) => {
  return (
    <AtomWrapper
      height="100%"
      flexDirection="column"
      justifyContent="flex-start"
      customCSS={(css) => css`
        width: 100%;
        gap: 2em;
      `}
    >
      <AtomText fontSize="large" fontWeight="bold">
        Harmony Web Editor - Message
      </AtomText>

      <AtomText fontSize="medium">
        Hello, Thank you very much for your interest in this great project.
        <br />
        <br />
        This project takes a lot of inspiration from Figma. A tool which allows
        you to create web designs. My great motivation for this project has been
        to demonstrate my skills as a frontend developer.
        <br />
        <br />
        Harmony has been developed under the next.js framework with react.js and
        typescript.
        <br />
        <br />
        Currently the project is under development. But it is available for a
        demo
      </AtomText>
    </AtomWrapper>
  );
};

export default StepOneModal;
