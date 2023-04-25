import { PropsLayout } from "@/layout";
import { NextComponentType, NextPageContext } from "next";
import { AppInitialProps } from "next/app";
import { Router } from "next/router";

declare module "next" {
  import { NextPage } from "next";
  import { ReactNode } from "react";
  export declare type Layout = (page: ReactNode) => ReactNode;
  export declare type NextPageWithProps<p> = NextPage<p> & PropsLayout;
  export declare type NextOnlyPage = NextPage & PropsLayout;
}

declare module "next/app" {
  export declare type AppPropsWithLayout<P = any> = AppInitialProps & {
    Component: NextComponentType<NextPageContext, any, P> & PropsLayout;
    router: Router;
    __N_SSG?: boolean | undefined;
    __N_SSP?: boolean | undefined;
  };
}
