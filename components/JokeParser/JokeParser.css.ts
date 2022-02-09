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
  top: "-56px",
});

export const cardOuter = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "40px",
  marginLeft: "12px",
  marginRight: "12px",
  paddingLeft: "12px",
  paddingRight: "12px",
  maxWidth: "660px",
  boxShadow: "0px 0px 4px 1px #D1D1D1",

  "@media": {
    "screen and (min-width: 1024px)": {
      marginLeft: "28px",
      marginRight: "28px",
    },
    "screen and (min-width: 768px)": {
      paddingRight: "28px",
      paddingLeft: "28px",
    },
  },
});

export const headline = style({
  fontSize: "20px",
  lineHeight: "28px",
  marginTop: "12px",
  marginBottom: "12px",
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
  marginBottom: "12px",
  "@media": {
    "screen and (min-width: 1024px)": {
      marginBottom: "28px",
    },
  },
});

export const span2 = style({
  color: "#374151",
});

export const date = style({
  marginBottom: "12px",
  marginRight: "0.5rem",
  objectPosition: "right",
  width: "6rem",
  textAlign: "right",
  ":hover": {
    color: "black",
  },

  "@media": {
    "screen and (min-width: 1024px)": {
      marginBottom: "28px",
    },
  },
});
