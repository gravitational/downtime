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
  height: "auto",

  "@media": {
    "screen and (min-width: 1024px)": {
      height: "40px",
    },
  },
});

export const hideBanner = style({
  visibility: "hidden",
});

export const banner = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "8px",
  marginBottom: "8px",
  marginLeft: "8px",
  marginRight: "8px",
  alignItems: "center",

  "@media": {
    "screen and (min-width: 1024px)": {
      marginLeft: "20px",
      marginRight: "20px",
    },
  },
});

export const button = style({
  paddingLeft: "6px",
  paddingRight: "6px",
  paddingTop: "0",
  paddingBottom: "0",
  marginLeft: "20px",
  marginRight: "8px",
  border: "1px solid #07F901",
  background: "black",
  color: "white",
  fontFamily: "inherit",
  height: "auto",
  fontSize: "100%",

  "@media": {
    "screen and (min-width: 768px)": {
      marginLeft: "40px",
      width: "80px",
      height: "28px",
      whiteSpace: "nowrap",
      alignSelf: "center",
    },
  },
});
