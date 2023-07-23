import themeColors from "@/themes";
import { AtomText, AtomWrapper } from "@whil/ui";
import { FC } from "react";
import ElementsList from "./elements";
import PagesComponent from "./pages/pages";

const LayoutEditorSidebarLeft: FC = () => {
  return (
    <AtomWrapper
      backgroundColor={`${themeColors.dark}`}
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      height="inherit"
      display="flex"
      flexDirection="column"
      customCSS={(css) => css`
        border-right: 1px solid rgba(255, 255, 255, 0.25);
      `}
    >
      <AtomWrapper
        width="100%"
        padding="0.4em"
        customCSS={(css) => css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        `}
      >
        <AtomText
          color="white"
          fontWeight="bold"
          padding="0.5em 0.7em"
          fontSize="0.8em"
        >
          Layers
        </AtomText>
      </AtomWrapper>
      <PagesComponent />
      <ElementsList />
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarLeft;
