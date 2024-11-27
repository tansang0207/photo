// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rc9dG4oyD6LF2Fbvo9k9Nb
// Component: 6HIQRr6nkTq8

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: DKNGkbi1dRLs/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: rc9dG4oyD6LF2Fbvo9k9Nb/projectcss
import sty from "./PlasmicCtaBottom.module.css"; // plasmic-import: 6HIQRr6nkTq8/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: JiS9O7XXxJTY/icon

createPlasmicElementProxy;

export type PlasmicCtaBottom__VariantMembers = {};
export type PlasmicCtaBottom__VariantsArgs = {};
type VariantPropType = keyof PlasmicCtaBottom__VariantsArgs;
export const PlasmicCtaBottom__VariantProps = new Array<VariantPropType>();

export type PlasmicCtaBottom__ArgsType = {};
type ArgPropType = keyof PlasmicCtaBottom__ArgsType;
export const PlasmicCtaBottom__ArgProps = new Array<ArgPropType>();

export type PlasmicCtaBottom__OverridesType = {
  root?: Flex__<"div">;
  container?: Flex__<"div">;
  h2?: Flex__<"h2">;
  button?: Flex__<typeof Button>;
};

export interface DefaultCtaBottomProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCtaBottom__RenderFunc(props: {
  variants: PlasmicCtaBottom__VariantsArgs;
  args: PlasmicCtaBottom__ArgsType;
  overrides: PlasmicCtaBottom__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        hasGap={true}
        className={classNames(projectcss.all, sty.container)}
      >
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.h2
          )}
        >
          {"Make a call to action."}
        </h2>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          color={"blackCoffee"}
          submitsForm={true}
        >
          {"Get In Touch"}
        </Button>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "container", "h2", "button"],
  container: ["container", "h2", "button"],
  h2: ["h2"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  container: "div";
  h2: "h2";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCtaBottom__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCtaBottom__VariantsArgs;
    args?: PlasmicCtaBottom__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCtaBottom__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCtaBottom__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCtaBottom__ArgProps,
          internalVariantPropNames: PlasmicCtaBottom__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCtaBottom__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCtaBottom";
  } else {
    func.displayName = `PlasmicCtaBottom.${nodeName}`;
  }
  return func;
}

export const PlasmicCtaBottom = Object.assign(
  // Top-level PlasmicCtaBottom renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),
    h2: makeNodeComponent("h2"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicCtaBottom
    internalVariantProps: PlasmicCtaBottom__VariantProps,
    internalArgProps: PlasmicCtaBottom__ArgProps
  }
);

export default PlasmicCtaBottom;
/* prettier-ignore-end */
