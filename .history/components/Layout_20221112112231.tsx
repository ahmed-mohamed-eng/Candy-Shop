import { VStack } from '@chakra-ui/react';
import Head from 'next/head'

export interface LayoutProps {
    children: JSX.Element | JSX.Element[];
    pageTitle?: string;

}

const Layout = (props: LayoutProps) => {
  return (
    <VStack>
            <Head>
        <title>EgyCandy &#127841;</title>
      </Head>

      {props.children}
      </VStack>
  )
}

export default Layout;