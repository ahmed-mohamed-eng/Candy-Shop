import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Category from './Category'

function CategoryGrid() {
  return (
    <SimpleGrid spacing={{md:'80px' , sm:'50px' , base:'25px'}}columns={{xl:[6] , lg:[5] , md:[4], base:[3]}}>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
    </SimpleGrid>

  )
}

export default CategoryGrid