import { globalCss } from "@stitches/react"

export const global = globalCss({
  "*": {
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
      background: "#0005" 
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#9699b0",
      borderRadius: "4px",
    }
  }
})