import React from 'react'
import {VStack,Container} from '@chakra-ui/react'
import NavBar from './Utils/NavBar';

export interface LayoutProps {
    children: JSX.Element | JSX.Element[];
  }

const Layout = ({children:LayoutProps}) => {
  return (
    <VStack>
        <NavBar/>
        <Container maxW={ xl:'container.xl' , }>
            {children}
        </Container>
    </VStack>
  )
}

export default Layout