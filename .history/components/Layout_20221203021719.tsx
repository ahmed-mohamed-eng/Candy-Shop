import { Container, useColorMode, VStack } from "@chakra-ui/react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

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
      <Breadcrumb>
        {props.urlPaths
          ? props.urlPaths.map((path) => {
              return (
                <BreadcrumbItem>
                  <BreadcrumbLink href={path.toLocaleLowerCase()}>
                    {path}
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
