import { Container, useColorMode, VStack } from "@chakra-ui/react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import Head from "next/head";
import NavBar from "./Utils/NavBar";
import Offers from "./Utils/Offers";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  urlPaths?: string[];
  // pageTitle?: string;
}

const Layout = (props: LayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <VStack spacing={"20px"}>
      <Head>
        <title>EgyCandy &#127841;</title>
      </Head>
      <Offers />
      <NavBar />
      <Breadcrumb w="full" px="5">
        {props.urlPaths
          ? props.urlPaths.map((path, idx) => {
              return (
                <BreadcrumbItem key={idx + "323AAA323"}>
                  <BreadcrumbLink
                    href={idx === 0 ? "/" : "/" + path.toLocaleLowerCase()}
                  >
                    {idx === 0 ? "Home" : path}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              );
            })
          : null}
      </Breadcrumb>
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
