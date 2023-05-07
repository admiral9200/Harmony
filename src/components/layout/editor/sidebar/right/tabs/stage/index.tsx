import useStageConfig from "@/hooks/useStage";
import { css } from "@emotion/react";
import { AtomInput, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC } from "react";

const StageSidebarRight: FC = () => {
  const { setConfig, config } = useStageConfig();

  return (
    <AtomWrapper height="100%" justifyContent="flex-start">
      <AtomText color="white" fontWeight="bold" fontSize="17px">
        Stage Properties
      </AtomText>
      <AtomInput
        type="color"
        label="Background"
        customCSSLabel={(css) => css`
          color: white;
        `}
        customCSS={(css) => css`
          height: 100px;
        `}
        customWrapperCSS={(css) => css`
          height: auto;
        `}
        css={() => css`
          height: auto;
        `}
        value={config.backgroundColor}
        onChange={(event) =>
          setConfig((prev) => ({
            ...prev,
            backgroundColor: event.target.value,
          }))
        }
      />
      <AtomInput
        type="checkbox"
        label="Graphic map design"
        customCSSLabel={() => css`
          color: white;
        `}
        customCSS={() => css`
          /* height: 100px; */
          width: auto;
        `}
        customWrapperCSS={() => css`
          height: auto;
        `}
        css={() => css`
          height: auto;
        `}
        checked={config.Graphicmapdesign}
        onChange={() =>
          setConfig((prev) => ({
            ...prev,
            Graphicmapdesign: !prev.Graphicmapdesign,
          }))
        }
      />
    </AtomWrapper>
  );
};

export default StageSidebarRight;
