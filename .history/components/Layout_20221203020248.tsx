import { Container, useColorMode, VStack } from "@chakra-ui/react";

import Head from "next/head";
import NavBar from "./Utils/NavBar";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  pageTitle?: string;
}

const Layout = (props: LayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <VStack spacing={"20px"}>
      <Head>
        <title>{props.pageTitle}</title>
      </Head>
      <Offers />

      <NavBar />
      <Container
        maxW={{
          xl: "container.xl",
          lg: "container.lg",
          md: "container.md",
          sm: "container.sm",
          base: "400px",
        }}
      >
        {props.children}
      </Container>
    </VStack>
  );
};

export default Layout;
