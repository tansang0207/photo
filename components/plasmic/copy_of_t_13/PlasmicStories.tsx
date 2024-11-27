// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rc9dG4oyD6LF2Fbvo9k9Nb
// Component: swKEwB9_5KD_

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

import Header from "../../Header"; // plasmic-import: Vo31A0bke2Ou/component
import Button from "../../Button"; // plasmic-import: DKNGkbi1dRLs/component
import ContactSection from "../../ContactSection"; // plasmic-import: tS83hgDkkS01/component
import Footer from "../../Footer"; // plasmic-import: u-N4ODhujw0a/component

import { useScreenVariants as useScreenVariantsh6X2SX2WHOd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: h6X2sX2wH_Od/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: rc9dG4oyD6LF2Fbvo9k9Nb/projectcss
import sty from "./PlasmicStories.module.css"; // plasmic-import: swKEwB9_5KD_/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: JiS9O7XXxJTY/icon

createPlasmicElementProxy;

export type PlasmicStories__VariantMembers = {};
export type PlasmicStories__VariantsArgs = {};
type VariantPropType = keyof PlasmicStories__VariantsArgs;
export const PlasmicStories__VariantProps = new Array<VariantPropType>();

export type PlasmicStories__ArgsType = {};
type ArgPropType = keyof PlasmicStories__ArgsType;
export const PlasmicStories__ArgProps = new Array<ArgPropType>();

export type PlasmicStories__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  hero?: Flex__<"div">;
  container7?: Flex__<"div">;
  row3?: Flex__<"div">;
  info?: Flex__<"div">;
  h1?: Flex__<"h1">;
  fig?: Flex__<"div">;
  pageBanerSection?: Flex__<"div">;
  pageBanerSection6?: Flex__<"div">;
  pageBanerSection5?: Flex__<"div">;
  pageBanerSection2?: Flex__<"div">;
  contactSection?: Flex__<typeof ContactSection>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultStoriesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicStories__RenderFunc(props: {
  variants: PlasmicStories__VariantsArgs;
  args: PlasmicStories__ArgsType;
  overrides: PlasmicStories__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsh6X2SX2WHOd()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <div
              data-plasmic-name={"container7"}
              data-plasmic-override={overrides.container7}
              className={classNames(projectcss.all, sty.container7)}
            >
              <div
                data-plasmic-name={"row3"}
                data-plasmic-override={overrides.row3}
                className={classNames(projectcss.all, sty.row3)}
              >
                <div
                  data-plasmic-name={"info"}
                  data-plasmic-override={overrides.info}
                  className={classNames(projectcss.all, sty.info)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__kBvXe)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"USECASES"}
                    </h1>
                  </Stack__>
                </div>
                <div
                  data-plasmic-name={"fig"}
                  data-plasmic-override={overrides.fig}
                  className={classNames(projectcss.all, sty.fig)}
                />
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"pageBanerSection"}
            data-plasmic-override={overrides.pageBanerSection}
            className={classNames(projectcss.all, sty.pageBanerSection)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___8LC5)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__nSouS
                )}
              >
                {"CASE STUDY LOREM"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hooMi
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button__rpNbE)}
                color={"yellow"}
                link={
                  hasVariant(globalVariants, "screen", "desktop")
                    ? `/story`
                    : `/story`
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ePqTc
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Get In touch"
                    : "GET IN TOUCH"}
                </div>
              </Button>
            </Stack__>
          </div>
          <div
            data-plasmic-name={"pageBanerSection6"}
            data-plasmic-override={overrides.pageBanerSection6}
            className={classNames(projectcss.all, sty.pageBanerSection6)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__u4Kaf)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__tZdL6
                )}
              >
                {"CASE STUDY LOREM"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__e3Vm7
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button__zmTc)}
                color={"yellow"}
                link={
                  hasVariant(globalVariants, "screen", "desktop")
                    ? `/story`
                    : `/story`
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__waomv
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Get In touch"
                    : "GET IN TOUCH"}
                </div>
              </Button>
            </Stack__>
          </div>
          <div
            data-plasmic-name={"pageBanerSection5"}
            data-plasmic-override={overrides.pageBanerSection5}
            className={classNames(projectcss.all, sty.pageBanerSection5)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pGlO1)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__aeBwA
                )}
              >
                {"CASE STUDY LOREM"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cHyk1
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button__yvs5M)}
                color={"yellow"}
                link={`/story`}
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6DLrS
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Get In touch"
                    : "GET IN TOUCH"}
                </div>
              </Button>
            </Stack__>
          </div>
          <div
            data-plasmic-name={"pageBanerSection2"}
            data-plasmic-override={overrides.pageBanerSection2}
            className={classNames(projectcss.all, sty.pageBanerSection2)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__keWx4)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__pw7Jv
                )}
              >
                {"CASE STUDY LOREM"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__c6De9
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button___21Qd3)}
                color={"yellow"}
                link={`/story`}
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ag0C2
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Get In touch"
                    : "GET IN TOUCH"}
                </div>
              </Button>
            </Stack__>
          </div>
          <ContactSection
            data-plasmic-name={"contactSection"}
            data-plasmic-override={overrides.contactSection}
            className={classNames("__wab_instance", sty.contactSection)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "hero",
    "container7",
    "row3",
    "info",
    "h1",
    "fig",
    "pageBanerSection",
    "pageBanerSection6",
    "pageBanerSection5",
    "pageBanerSection2",
    "contactSection",
    "footer"
  ],
  header: ["header"],
  hero: ["hero", "container7", "row3", "info", "h1", "fig"],
  container7: ["container7", "row3", "info", "h1", "fig"],
  row3: ["row3", "info", "h1", "fig"],
  info: ["info", "h1"],
  h1: ["h1"],
  fig: ["fig"],
  pageBanerSection: ["pageBanerSection"],
  pageBanerSection6: ["pageBanerSection6"],
  pageBanerSection5: ["pageBanerSection5"],
  pageBanerSection2: ["pageBanerSection2"],
  contactSection: ["contactSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  hero: "div";
  container7: "div";
  row3: "div";
  info: "div";
  h1: "h1";
  fig: "div";
  pageBanerSection: "div";
  pageBanerSection6: "div";
  pageBanerSection5: "div";
  pageBanerSection2: "div";
  contactSection: typeof ContactSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStories__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStories__VariantsArgs;
    args?: PlasmicStories__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStories__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStories__ArgsType,
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
          internalArgPropNames: PlasmicStories__ArgProps,
          internalVariantPropNames: PlasmicStories__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicStories__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStories";
  } else {
    func.displayName = `PlasmicStories.${nodeName}`;
  }
  return func;
}

export const PlasmicStories = Object.assign(
  // Top-level PlasmicStories renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    hero: makeNodeComponent("hero"),
    container7: makeNodeComponent("container7"),
    row3: makeNodeComponent("row3"),
    info: makeNodeComponent("info"),
    h1: makeNodeComponent("h1"),
    fig: makeNodeComponent("fig"),
    pageBanerSection: makeNodeComponent("pageBanerSection"),
    pageBanerSection6: makeNodeComponent("pageBanerSection6"),
    pageBanerSection5: makeNodeComponent("pageBanerSection5"),
    pageBanerSection2: makeNodeComponent("pageBanerSection2"),
    contactSection: makeNodeComponent("contactSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicStories
    internalVariantProps: PlasmicStories__VariantProps,
    internalArgProps: PlasmicStories__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicStories;
/* prettier-ignore-end */
