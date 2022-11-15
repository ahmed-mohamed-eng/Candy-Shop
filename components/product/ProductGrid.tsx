import { SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import TitleBar from '../Utils/TitleBar'
import ProductCard from './ProductCard'
import {Name_Path} from '../Utils/TitleBar'
function ProductGrid(props:Name_Path) {
  return (
    <VStack display={'start'} mb='60px'>
    <TitleBar name={props.name} buttonTitle={props.buttonTitle} path={props.path}/>
    <SimpleGrid columns={{xl:[4] , lg:[4] , md :[3] , sm:[2] , base:[2]}} spacing={{sm:'36px' , base:'20px'} }w='100%'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </SimpleGrid>
    </VStack>
  )
}

export default ProductGrid