import { VStack } from '@chakra-ui/react';

export interface LayoutProps {
    children: JSX.Element | JSX.Element[];
    pageTitle?: string;
}

const Layout = (props: LayoutProps) => {
  return (
    <VStack>
      {props.children}
      </VStack>
  )
}

export default Layout;