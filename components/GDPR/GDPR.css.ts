import { style } from "@vanilla-extract/css";

export const bannerContainer = style({
  position: "fixed",
  bottom: "0px",
  background: "black",
  zIndex: "50",
  width: "100%",
  color: "white",
  fontWeight: "bold",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "2.5rem",
});

export const banner = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  alignItems: "center",

  "@media": {
    "screen and (min-width: 1024px)": {
      marginLeft: "1.25rem",
      marginRight: "1.25rem",
    },
  },
});

export const button = style({
  paddingLeft: "0.375rem",
  paddingRight: "0.375rem",
  paddingTop: "0",
  paddingBottom: "0",
  marginLeft: "1.25rem",
  marginRight: "0.5rem",
  border: "1px solid #07F901",
  background: "black",
  color: "white",
  fontFamily: "inherit",
  height: "28px",
  fontSize: "100%",

  "@media": {
    "screen and (min-width: 768px)": {
      marginLeft: "2.5rem",
      width: "80px",
      height: "28px",
      whiteSpace: "nowrap",
      alignSelf: "center",
    },
  },
});
