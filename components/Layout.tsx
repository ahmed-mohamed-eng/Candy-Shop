import React from 'react'
import {VStack,Container} from '@chakra-ui/react'
import NavBar from './Utils/NavBar';

export interface LayoutProps {
    children: JSX.Element | JSX.Element[];
  }

const Layout = (props:LayoutProps) => {
  return (
    <VStack>
        <NavBar/>
        <Container>
            {props.children}
        </Container>
    </VStack>
  )
}

export default Layout