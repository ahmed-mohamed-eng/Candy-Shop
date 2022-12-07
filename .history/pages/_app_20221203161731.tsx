import "../styles/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import type { AppProps } from "next/app";

import { ChakraProvider ,ColorModeScript} from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode='light'/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
