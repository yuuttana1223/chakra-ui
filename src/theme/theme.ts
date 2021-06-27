import { extendTheme } from "@chakra-ui/react";

// グローバルなスタイリング
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backroundColor: "gray.100",
        color: "gray.800",
      },
    },
  },
});
export default theme;
