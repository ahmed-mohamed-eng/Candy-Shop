import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Advanteges from './Advanteges'



function AdvantgesGrid() {
  return (
    <SimpleGrid spacing={'20px'} columns={{xl:[4] , lg:[4] , md:[3] ,sm:[2], base:[2]}}>
        <Advanteges/>
        <Advanteges/>
        <Advanteges/>
        <Advanteges/>
    </SimpleGrid>
  )
}

export default AdvantgesGrid