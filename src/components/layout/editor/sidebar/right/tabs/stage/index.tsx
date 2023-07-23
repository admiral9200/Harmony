import { useStage } from "@/editor/core/hooks";
import useElements from "@/editor/core/hooks/elements/hook";
import usePages from "@/editor/core/hooks/pages/hook";
import { AtomButton, AtomInput, AtomText, AtomWrapper } from "@whil/ui";
import { FC } from "react";

const StageSidebarRight: FC = () => {
  const { config, handleConfig } = useStage();
  const { page, handleDeletePage, pages } = usePages();

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
      <AtomWrapper
        padding="0.5em 0.7em"
        customCSS={(css) => css`
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-columns: 2rem 1fr;
          gap: 1em;
        `}
      >
        <AtomWrapper>
          <AtomInput
            type="color"
            id="backgroundStage"
            customCSS={(css) => css`
              background-color: blue;
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
              background-color: ${config.backgroundColor};
              border: 1px solid white;
              height: 2rem;
              border-radius: 0.4rem;
              width: 2rem;
            `}
          ></AtomText>
        </AtomWrapper>
        <AtomText as={"label"} htmlFor="backgroundStage" color="white">
          {config.backgroundColor}
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        width="100%"
        height="auto"
        customCSS={(css) => css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        `}
      ></AtomWrapper>
      <AtomText color="white" fontWeight="bold" padding="0.5em 0.7em">
        Config
      </AtomText>
      <AtomWrapper flexDirection="column" padding="0.5em 0.7em">
        <AtomText color="white" fontWeight="bold">
          Do you want to delete the page?
        </AtomText>
        <AtomWrapper
          customCSS={(css) => css`
            align-items: center;
            justify-content: center;
            gap: 1em;
          `}
        >
          <AtomText color="white" fontWeight="bold">
            {page?.slice(0, 8)}
          </AtomText>
          {pages?.length > 1 ? (
            <AtomButton
              onClick={() => {
                handleDeletePage(page);
                handleDeleteElementsByPage(page);
              }}
              customCSS={(css) => css`
                background-color: transparent;
                border: 0px;
                color: red;
                padding: 1em;
                cursor: pointer;
                border: 1px solid red;
              `}
            >
              Delete
            </AtomButton>
          ) : null}
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

// function convertPxToPt(px: number) {
//   const pt = px * 0.75;
//   return pt;
// }

export default StageSidebarRight;
