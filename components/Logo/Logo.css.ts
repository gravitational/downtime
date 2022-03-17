import { style } from "@vanilla-extract/css";

export const imageContainer = style({
  width: "50%",
  maxWidth: "600px",
  marginTop: "56px",
  "@media": {
    "screen and (min-width: 1024px)": {
      marginTop: "64px",
    },
  },
});
