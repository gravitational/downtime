import { style } from "@vanilla-extract/css";

export const outer = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const inner = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "1240px",
});

export const anchorOuter = style({
  position: "relative",
  top: "-3.5rem",
});

export const cardOuter = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "2.5rem",
  marginLeft: "0.75rem",
  marginRight: "0.75rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  maxWidth: "660px",
  boxShadow: "0px 0px 4px 1px #D1D1D1",

  "@media": {
    "screen and (min-width: 1024px)": {
      marginLeft: "1.75rem",
      marginRight: "1.75rem",
    },
    "screen and (min-width: 768px)": {
      paddingRight: "1.75rem",
      paddingLeft: "1.75rem",
    },
  },
});

export const headline = style({
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  marginTop: "0.75rem",
  marginBottom: "0.75rem",
  width: "100%",

  "@media": {
    "screen and (min-width: 1024px)": {
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      marginTop: "2rem",
    },
    "screen and (min-width: 768px)": {
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      marginTop: "2rem",
      marginBottom: "1.25rem",
    },
  },
});

export const span1 = style({
  fontWeight: "bold",
});

export const imageContainer = style({
  width: "100%",
  marginBottom: "0.5rem",
  "@media": {
    "screen and (min-width: 1024px)": {
      marginBottom: "1.25rem",
    },
  },
});

export const shareOuter = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  color: "#6b7280",
  position: "relative",
});

export const shareInner = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
});

export const shareString = style({
  marginBottom: "0.75rem",
  "@media": {
    "screen and (min-width: 1024px)": {
      marginBottom: "1.75rem",
    },
  },
});

export const span2 = style({
  color: "#374151",
});

export const date = style({
  marginBottom: "0.75rem",
  marginRight: "0.5rem",
  objectPosition: "right",
  width: "6rem",
  textAlign: "right",
  ":hover": {
    color: "black",
  },

  "@media": {
    "screen and (min-width: 1024px)": {
      marginBottom: "1.75rem",
    },
  },
});
