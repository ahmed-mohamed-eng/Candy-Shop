import { Avatar, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Category() {
  return (
    <VStack>
        <Avatar boxShadow={'0 0 7px rgba(0,0,0,0.5)'} w={{base:'100px' , sm:'140px',lg:'160px'}} h={{base:'100px' , sm:'140px' , lg:'160px'}} src='https://cdn.shopify.com/s/files/1/0334/4036/6725/collections/image_50ebcbec-8097-42e1-bb14-915f9eb654e0_1350x823.jpg?v=1621669013'/>
        <Text opacity={'.8'} fontSize={{base:'15px' , sm:'20px'}} fontWeight='700'>Lolies</Text>
    </VStack>
  )
}

export default Category