import useStageConfig from "@/hooks/useStage";
import useElements from "@/hooks/useStatement";
import { css } from "@emotion/react";
import jsPDF from "jspdf";
import {
  AtomButton,
  AtomInput,
  AtomText,
  AtomWrapper,
  convertHexToRGB,
} from "lucy-nxtjs";
import { FC } from "react";

const StageSidebarRight: FC = () => {
  const { setConfig, config } = useStageConfig();

  const { elements } = useElements();
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
      <AtomInput
        type="select"
        label="FORMAT"
        customWrapperCSS={() => css`
          height: auto;
          label {
            color: white;
          }
        `}
        customCSS={(css) => css`
          color: white;
          height: auto;
          option {
            color: black;
          }
        `}
        css={() => css`
          color: white;
        `}
        options={() => [
          {
            id: "1",
            label: "WEB DESIGN",
            value: "WEB_DESIGN",
          },
          {
            id: "1",
            label: "PDF DESIGN",
            value: "PDF_DESIGN",
          },
        ]}
      />

      <AtomButton
        backgroundColor="#0496ff"
        onClick={() => {
          var doc = new jsPDF({
            orientation: "portrait",
            unit: "pt",
            format: [1122, 793],
          });

          for (const iterator of elements) {
            const x = convertPxToPt(iterator.x);
            const y = convertPxToPt(iterator.y);
            const rgb =
              convertHexToRGB?.(
                iterator.style?.colorText ??
                  iterator.style?.backgroundColor ??
                  iterator?.style?.stroke ??
                  ("#000000" as string)
              ) ?? "#000000";

            const r = rgb?.r || 0;
            const g = rgb?.g || 0;
            const b = rgb?.b || 0;

            const width = convertPxToPt(Number(iterator.width));
            const height = convertPxToPt(Number(iterator.height));
            if (iterator.tool === "LINE") {
              doc.setDrawColor(0);

              doc.setFillColor?.(r, g, b);
              doc.rect(
                x,
                y,
                width,
                convertPxToPt(Number(iterator.style?.strokeWidth)),
                "F"
              );
            }

            if (iterator.tool === "BOX") {
              doc.setDrawColor(0);
              doc.setFillColor?.(r, g, b);
              doc.rect(x, y, width, height, "F");
            }
            if (iterator.tool === "TEXT") {
              doc.setFontSize(
                convertPxToPt(iterator.style?.fontSize as number)
              );
              doc.setTextColor?.(r, g, b);
              doc.setFont("helvetica", iterator.style?.fontStyle);
              doc.text(iterator.text as string, x, y, {
                maxWidth: width,
              });
            }

            if (iterator.tool === "CIRCLE") {
              doc.setFillColor?.(r, g, b);

              doc.roundedRect(x, y, width, height, width / 2, height / 2, "F");
            }
            if (iterator.tool === "IMAGE") {
              doc.addImage(iterator.src as string, "JPEG", x, y, width, height);
            }
          }

          doc.save("harmony");
        }}
      >
        EXPORT PDF
      </AtomButton>
    </AtomWrapper>
  );
};

function convertPxToPt(px: number) {
  const pt = px * 0.75;
  return pt;
}

export default StageSidebarRight;
