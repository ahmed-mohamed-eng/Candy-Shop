import { Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export interface Name_Path {
    path?:string,
    name:string,
    buttonTitle?:string,
}

function TitleBar(props:Name_Path) {
  return (
    <Flex alignItems={'center'} justifyContent='space-between' my='50px'>
        <Text opacity={'.8'} fontWeight={'700'} fontSize={{md:'30px' , base:'25px'}}>{props.name}</Text>
        <Link href={`${props.path}`}>
            {props.buttonTitle &&<Button colorScheme={'red'}>{props.buttonTitle}</Button>}
        
        </Link>
    </Flex>
  )
}

export default TitleBar