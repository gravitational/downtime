import { style } from "@vanilla-extract/css";

export const outer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const imageContainer = style({
  width: "50%",
  maxWidth: "600px",
  marginTop: "3.5rem",
  "@media": {
    "screen and (min-width: 1024px)": {
      marginTop: "4rem",
    },
  },
});
