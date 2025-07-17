import { fonts } from "./fonts.ts";

export const typography = {
  h1: {
    fontFamily: fonts.fontFamily,
    fontSize: fonts.fontSizes.xl,
    fontWeights: fonts.fontWeights.semibold,
    lineHeight: 1.25,
  },
  h2: {
    fontFamily: fonts.fontFamily,
    fontSize: fonts.fontSizes.lg,
    fontWeights: fonts.fontWeights.semibold,
    lineHeight: 1.25,
  },
  h3: {
    fontFamily: fonts.fontFamily,
    fontSize: fonts.fontSizes.md,
    fontWeights: fonts.fontWeights.medium,
    lineHeight: 1.4,
  },
  h4: {
    fontFamily: fonts.fontFamily,
    fontSize: fonts.fontSizes.base,
    fontWeights: fonts.fontWeights.medium,
    lineHeight: 1.4,
  },
  subtitle: {
    fontFamily: fonts.fontFamily,
    fontSize: fonts.fontSizes.sm,
    fontWeights: fonts.fontWeights.medium,
    lineHeight: 1.5,
  },
  body: {
    fontFamily: fonts.fontFamily,
    fontSize: fonts.fontSizes.base,
    fontWeights: fonts.fontWeights.regular,
    lineHeight: 1.5,
  },
  caption: {
    fontFamily: fonts.fontFamily,
    fontSize: fonts.fontSizes.sm,
    fontWeights: fonts.fontWeights.regular,
    lineHeight: 1.5,
  },
  button: {
    fontFamily: fonts.fontFamily,
    fontSize: fonts.fontSizes.base,
    fontWeight: fonts.fontWeights.medium,
    lineHeight: "100%",
  },
};
