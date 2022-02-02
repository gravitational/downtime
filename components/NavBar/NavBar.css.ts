import { style } from "@vanilla-extract/css";

export const nav = style({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  height: "3rem",
  position: "fixed",
  top: "0px",
  background: "black",
  zIndex: "50"
});

export const bar = style({
  display: "flex",
  justifyContent: "center",
  width: "50%",
  alignItems: "center"
})

export const a = style({
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  display: "flex",
  justifyContent: "center",
  color: "#07F901",
  fontWeight: "bold",
  marginLeft: "0.5rem"
})

export const outerStack = style({
  display: "flex",
  width: "1rem",
  flexDirection: "column",
  justifyContent: "center"
})

export const innerStack = style({
  width: "100%",
  height: "0.25rem",
  background: "#07F901",
  borderTop: "1px solid black"
})