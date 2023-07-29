import themeColors from "@/themes";
import { AtomWrapper } from "@whil/ui";
import { FC } from "react";
import ElementsList from "./elements";
import GroupsListComponent from "./groups/groups";
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
      <PagesComponent />
      <GroupsListComponent />
      <ElementsList />
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarLeft;
