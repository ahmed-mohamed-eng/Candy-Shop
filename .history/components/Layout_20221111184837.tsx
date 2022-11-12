import { VStack } from '@chakra-ui/react';

export interface LayoutProps {
    children: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  return (
    <VStack>{props.children}</VStack>
  )
}

export default Layout;