import { CREATE_USER } from "@/apollo/mutate/user";
import { IMutationFilter } from "@/types";
import insertAlert from "@/utils/Alert";
import { useMutation } from "@apollo/client";
import { css } from "@emotion/react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AtomForm,
  AtomIcon,
  AtomInput,
  AtomText,
  AtomWrapper,
} from "lucy-nxtjs";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type ValuesForm = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

const LoginPage: FC = () => {
  const [EXECUTE_CREATE_USER] = useMutation<IMutationFilter<"createUser">>(
    CREATE_USER,
    {
      onError: () => {
        insertAlert({
          status: "error",
          message: "Error",
        });
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValuesForm>({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver<any>(schema),
  });

  const onSubmit = (data: ValuesForm) => console.log(data);

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
            Harmony - Register
          </AtomText>
          <AtomText fontSize="17px">
            Design your dream website with ease.
          </AtomText>
          <AtomForm
            customCSS={(css) => css`
              height: auto;
            `}
            onSubmit={handleSubmit(onSubmit)}
          >
            <AtomInput
              label="Name"
              type="text"
              customWrapperCSS={(css) => css`
                height: auto;
              `}
              placeholder="Enter your name"
              customCSS={(css) =>
                css`
                  div {
                    background: #ffffff;
                    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
                  }
                  height: auto;
                `
              }
              onExecute={() => register("name")}
              onError={() => errors.name?.message}
            />
            <AtomInput
              label="Last name"
              type="text"
              customWrapperCSS={(css) => css`
                height: auto;
              `}
              placeholder="Enter your last name"
              customCSS={(css) =>
                css`
                  div {
                    background: #ffffff;
                    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
                  }
                  height: auto;
                `
              }
              onExecute={() => register("lastName")}
              onError={() => errors.lastName?.message}
            />
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
              onExecute={() => register("email")}
              onError={() => errors.email?.message}
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
              onExecute={() => register("password")}
              onError={() => errors.password?.message}
            />
            <AtomInput
              type="submit"
              value="Register"
              css={() => css`
                color: white;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
              `}
              customCSS={(css) => css`
                margin-top: 40px;
                border-radius: 10px;
                background: linear-gradient(45deg, #79ecd7 10%, #8679ec 70%);
                cursor: pointer;
              `}
            />
          </AtomForm>
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
            background: linear-gradient(45deg, #8679ec 10%, transparent 50%);
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
