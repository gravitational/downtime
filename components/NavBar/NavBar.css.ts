import { style } from "@vanilla-extract/css";

export const nav = style({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  height: "48px",
  position: "fixed",
  top: "0px",
  background: "black",
  zIndex: "50",
});

export const bar = style({
  display: "flex",
  justifyContent: "center",
  width: "50%",
  alignItems: "center",
});

export const a = style({
  fontSize: "20px",
  lineHeight: "28px",
  display: "flex",
  justifyContent: "center",
  color: "#07F901",
  fontWeight: "bold",
  marginLeft: "8px",
});

export const outerStack = style({
  display: "flex",
  width: "16px",
  flexDirection: "column",
  justifyContent: "center",
});

export const innerStack = style({
  width: "100%",
  height: "4px",
  background: "#07F901",
  borderTop: "1px solid black",
});
