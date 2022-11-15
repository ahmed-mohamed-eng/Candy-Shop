import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {GiRoundStar} from 'react-icons/gi'

function ProductCard() {
  return (
    <VStack boxShadow={'0 0 7px rgba(0,0,0,0.5)'} borderRadius='10px' p='3' _hover={{transform:'translateY(-5px)'}} transition={'ease-out all .3s'}>
      <Box w='100%' fontSize={'30px'}>
      <AiOutlineHeart  style={{color:'gray'}} />
      </Box>
      <Image alt='product' maxW={{sm:'150px' , base:'70px'}}  src={'https://cdn.shopify.com/s/files/1/0334/4036/6725/products/CadburyLargeStockingChocolateSelectionBox179g_512x512.png?v=1666968575'}/>
      <Text opacity={'.8'} fontSize={'17px'} fontWeight={'semibold'}>it is good bag have more colors like yellow</Text>
      <Box display={'flex'} justifyContent={'space-between'} w='100%'>
        <Flex fontWeight={'bold'} alignItems={'center'} color={'yellow.400'}>4.3<GiRoundStar/></Flex>
        <Text fontWeight={'bold'}>40$</Text>
      </Box>
    </VStack>
  )
}

export default ProductCard