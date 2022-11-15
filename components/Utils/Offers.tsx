import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Offers = () => {
  return (
    <Flex h={{md:'80px'}} justifyContent={'center'} mb='10px' borderBottomRadius={'5px'}  fontWeight={'400'} fontSize={{base:'17px' , md:'20px'}} w='100%' alignItems={'center'} p='7px' flexDir={{md:'row' , base:'column'}} boxShadow={'0  2px 7px rgba(0,0,0,0.3)'}>
        <Text>FREE UK DELIVERY ON ORDERS OVER</Text>
        <Text>$35.00</Text>
    </Flex>
  )
}

export default Offers