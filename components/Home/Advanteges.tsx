import {Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {CiDeliveryTruck} from 'react-icons/ci'
function Advanteges() {
  return (
    <VStack p='15px' h={{base:'150px'}} boxShadow={'0 0 5px rgba(0,0,0,0.2)'} borderRadius={'5px'}>
        <Icon opacity={'.6'} w='40px' h='40px' as={CiDeliveryTruck} />
        <Text fontWeight={'700'} opacity={'.9'}>Free Delivery</Text>
        <Text textAlign={'center'}fontSize='12px' fontWeight={'500'}>When you spend $30+</Text>
    </VStack>
  )
}

export default Advanteges