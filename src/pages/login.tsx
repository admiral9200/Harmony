import {
  AtomButton,
  AtomIcon,
  AtomInput,
  AtomText,
  AtomWrapper,
} from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const LoginPage: FC<Props> = (props) => {
  return (
    <AtomWrapper
      customCSS={(css) => css`
        display: grid;
        height: 100%;
        grid-template-columns: 1fr 1fr;
      `}
    >
      <AtomWrapper
        customCSS={(css) => css`
          padding: 40px;
          align-items: center;
          justify-content: center;
        `}
      >
        <AtomWrapper
          customCSS={(css) => css`
            width: 55%;
            gap: 10px;
          `}
        >
          <AtomIcon
            height="100px"
            width="100px"
            src="https://res.cloudinary.com/whil/image/upload/v1681690426/app/harmony/SVGNORMALIZE_xjjlpj.svg"
          />
          <AtomText fontSize="29px" fontWeight="bold">
            Harmony
          </AtomText>
          <AtomText fontSize="17px">
            Design your dream website with ease.
          </AtomText>
          <AtomInput
            label="Email"
            type="email"
            customWrapperCSS={(css) => css`
              height: auto;
            `}
            placeholder="Enter your email"
            customCSS={(css) =>
              css`
                div {
                  background: #ffffff;
                  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
                }
                height: auto;
              `
            }
          />
          <AtomInput
            label="Password"
            type="password"
            customWrapperCSS={(css) => css`
              height: auto;
            `}
            placeholder="Enter your password"
            customCSS={(css) =>
              css`
                height: auto;
                div {
                  background: #ffffff;
                  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
                }
              `
            }
          />
          <AtomButton
            backgroundColor="#8679ec"
            width="100%"
            fontSize="18px"
            customCSS={(css) => css`
              margin-top: 40px;
              border-radius: 10px;
              background: linear-gradient(45deg, #79ecd7 10%, #8679ec 70%);
            `}
          >
            Login
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        customCSS={(css) => css`
          padding: 60px;
          justify-content: flex-end;
          @import url(https://fonts.googleapis.com/css?family=Exo:100);
          /* Background data (Original source: https://subtlepatterns.com/grid-me/) */
          /* Animations */
          @-webkit-keyframes bg-scrolling-reverse {
            100% {
              background-position: 50px 50px;
            }
          }
          @-moz-keyframes bg-scrolling-reverse {
            100% {
              background-position: 50px 50px;
            }
          }
          @-o-keyframes bg-scrolling-reverse {
            100% {
              background-position: 50px 50px;
            }
          }
          @keyframes bg-scrolling-reverse {
            100% {
              background-position: 50px 50px;
            }
          }
          @-webkit-keyframes bg-scrolling {
            0% {
              background-position: 50px 50px;
            }
          }
          @-moz-keyframes bg-scrolling {
            0% {
              background-position: 50px 50px;
            }
          }
          @-o-keyframes bg-scrolling {
            0% {
              background-position: 50px 50px;
            }
          }
          @keyframes bg-scrolling {
            0% {
              background-position: 50px 50px;
            }
          }
          color: #999;
          font: 400 16px/1.5 exo, ubuntu, "segoe ui", helvetica, arial,
            sans-serif;
          text-align: center;
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC")
            repeat 0 0;
          -webkit-animation: bg-scrolling-reverse 0.92s infinite;
          -moz-animation: bg-scrolling-reverse 0.92s infinite;
          -o-animation: bg-scrolling-reverse 0.92s infinite;
          animation: bg-scrolling-reverse 0.92s infinite;
          -webkit-animation-timing-function: linear;
          -moz-animation-timing-function: linear;
          -o-animation-timing-function: linear;
          animation-timing-function: linear;
          ::before {
            font-size: 8rem;
            font-weight: 100;
            font-style: normal;
          }
        `}
      >
        <AtomWrapper
          customCSS={(css) => css`
            background: linear-gradient(45deg, #79ecd7 10%, transparent 50%);
            border-radius: 10px;
            padding: 40px;
            justify-content: flex-end;
            height: auto;
            z-index: 2;
          `}
        >
          <AtomText
            fontWeight="bold"
            fontSize="42px"
            customCSS={(css) => css`
              display: flex;
              align-items: center;
              flex-direction: row;
              white-space: nowrap;
              gap: 10px;
            `}
          >
            <AtomWrapper
              customCSS={(css) => css`
                width: 0;
                height: 0;
                border-left: 20px solid transparent;
                transform: rotate(90deg);
                border-right: 20px solid transparent;
                border-bottom: 35px solid #000;
              `}
            />{" "}
            Digital
          </AtomText>
          <AtomText fontWeight="bold" fontSize="42px">
            plataform <br />
            for design
          </AtomText>
          <AtomText fontSize="22px">
            Design your website like a pro with our user-friendly tool.
          </AtomText>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default LoginPage;
