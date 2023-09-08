import { useStage, useTool } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import usePages from "@/editor/core/hooks/pages/hook";
import { pageIdDefault } from "@/editor/core/hooks/pages/jotai";
import themeColors from "@/themes";
import { AtomButton, AtomInput, AtomText, AtomWrapper } from "@whil/ui";
import { FC } from "react";

const StageSidebarRight: FC = () => {
  const { config, handleConfig } = useStage();
  const { page, handleDeletePage, pages } = usePages();
  const { setTool } = useTool();
  const { handleDeleteElementsByPage } = useElements();

  return (
    <AtomWrapper
      height="100%"
      justifyContent="flex-start"
      flexDirection="column"
      width="100%"
    >
      <AtomText color="white" fontWeight="bold" padding="0.5em 0.7em">
        Page
      </AtomText>
      <AtomText
        color="white"
        fontSize="medium"
        fontWeight={"bold"}
        padding="0.5em 0.7em"
      >
        Styles
      </AtomText>
      <AtomText color="white" padding="0.5em 0.7em" fontSize="small">
        Backgorund Color
      </AtomText>
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-columns: 2rem 1fr;
        `}
      >
        <AtomWrapper>
          <AtomInput
            type="color"
            id="backgroundStage"
            customCSS={(css) => css`
              margin: 0%;
              outline: none;
              padding: 0%;
              border: none;
              opacity: 0;
              height: 0;
              width: 0;
              outline: none;
            `}
            value={config.backgroundColor}
            onChange={(event) =>
              handleConfig({
                backgroundColor: event.target.value,
              })
            }
          />
          <AtomText
            as={"label"}
            htmlFor="backgroundStage"
            customCSS={(css) => css`
              background-color: ${config?.backgroundColor ?? "#ffffff"};
              height: 1.3rem;
              border-radius: 0.2rem;
              border: 1px solid white;
              width: 1.3rem;
            `}
          ></AtomText>
        </AtomWrapper>
        <AtomInput
          readonly
          type="text"
          value={`#${config?.backgroundColor?.replace(/#/, "") ?? "ffffff"}`}
          onClick={() => {
            setTool("WRITING");
          }}
          onChange={(event) => {
            setTool("WRITING");
            handleConfig({
              backgroundColor: event.target.value,
            });
          }}
          customCSS={(css) => css`
            font-size: small;
            color: white;
            width: 100%;
            border: 1px solid ${themeColors.dark};
            background-color: ${themeColors.dark};
          `}
        />
      </AtomWrapper>

      {page !== pageIdDefault ? (
        <AtomWrapper flexDirection="column" padding="0.5em 0.7em" gap="1em">
          <AtomText color="white" fontSize="medium" fontWeight={"bold"}>
            {pages?.length > 1 ? "Settings" : "The current page"}
          </AtomText>
          <AtomWrapper
            customCSS={(css) => css`
              align-items: center;
              justify-content: flex-start;
              gap: 1em;
            `}
          >
            {pages?.length > 1 ? (
              <AtomButton
                onClick={() => {
                  if (page === pageIdDefault) return;
                  handleDeletePage(page);
                  handleDeleteElementsByPage(page);
                }}
                customCSS={(css) => css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: red;
                  border: 0px;
                  /* padding: 0.4em 1em; */
                  cursor: pointer;
                  width: 100%;
                  height: 40px;
                  border-radius: 0.3em;
                  color: white;
                `}
              >
                Delete page
              </AtomButton>
            ) : null}
          </AtomWrapper>
        </AtomWrapper>
      ) : null}
    </AtomWrapper>
  );
};

// function convertPxToPt(px: number) {
//   const pt = px * 0.75;
//   return pt;
// }

export default StageSidebarRight;
