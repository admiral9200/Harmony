import { AtomText, AtomWrapper } from "@whil/ui";
import { FC, ReactNode } from "react";
import { controls } from "../../AtomModalControls";

type Props = {
  children?: ReactNode;
};

const StepTwoModal: FC<Props> = (props) => {
  return (
    <AtomWrapper
      height="100%"
      flexDirection="column"
      justifyContent="flex-start"
      customCSS={(css) => css`
        width: 100%;
        gap: 1em;
      `}
    >
      <AtomWrapper flexDirection="column">
        <AtomText fontSize="large" fontWeight="bold">
          Harmony Web Editor - Controls Keyboard
        </AtomText>
        <AtomText fontSize="medium">
          Here is the instruction manual to use harmony with your keyboard
        </AtomText>
      </AtomWrapper>
      <AtomWrapper flexDirection="column" gap="0.4em">
        {controls.map((item) => (
          <AtomWrapper key={item.label} flexDirection="column">
            <AtomText>
              <strong>{item.label}</strong>
            </AtomText>
            <AtomText>{item.value}</AtomText>
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default StepTwoModal;
