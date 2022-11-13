import React from 'react'
import {VStack,Container} from '@chakra-ui/react'
import NavBar from './Utils/NavBar';
import Offers from './Utils/Offers';

export interface LayoutProps {
    children: JSX.Element | JSX.Element[];
  }

const Layout = (props:LayoutProps) => {
  return (
    <VStack w='100%'>
        <Offers/>
        <NavBar/>
        <Container maxW={{ xl: 'container.xl' , lg:'container.lg' , md:'container.md' , sm:'container.sm' , base:'400px'}}>
            {props.children}
        </Container>
    </VStack>
  )
}

export default Layout