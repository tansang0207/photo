// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rc9dG4oyD6LF2Fbvo9k9Nb

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, cmsCredentialsProviderProps, embedCssProps } = props;

  return (
    <CmsCredentialsProvider
      {...cmsCredentialsProviderProps}
      databaseId={
        cmsCredentialsProviderProps &&
        "databaseId" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseId!
          : undefined
      }
      databaseToken={
        cmsCredentialsProviderProps &&
        "databaseToken" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseToken!
          : undefined
      }
      host={
        cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.host!
          : "https://data.plasmic.app"
      }
      locale={
        cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.locale!
          : undefined
      }
    >
      <EmbedCss
        {...embedCssProps}
        css={
          embedCssProps && "css" in embedCssProps
            ? embedCssProps.css!
            : "html {\n    scroll-behavior: smooth;\n}"
        }
      >
        {children}
      </EmbedCss>
    </CmsCredentialsProvider>
  );
}
