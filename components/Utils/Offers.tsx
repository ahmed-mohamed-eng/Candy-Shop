import {  Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Offers() {
  return (
    <Flex 
    w='100%' 
    flexDir={'column'} 
    alignItems={'center'}
    lineHeight='.1px'
    boxShadow='0 1px 5px rgba(0,0,0,.2)'  
    fontSize={'20px'}  
    fontWeight={'600'}
    p='5px 15px'
    borderBottomLeftRadius={'10px'}
    borderBottomRightRadius={'10px'}
    >
        <Text >
            FREE UK DELIVERY ON ORDERS OVER
        </Text>
        <Text>
            $35.00
        </Text>
    </Flex>
  )
}

export default Offers