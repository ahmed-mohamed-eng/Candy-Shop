import { MinusIcon,AddIcon } from '@chakra-ui/icons'
import {  Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {GrFormClose} from 'react-icons/gr'

export type Drawer ={
  onClose:()=> void,
  isOpen:boolean
}

function SliderNav(props:Drawer) {
  return (
    <>
      <Drawer onClose={props.onClose} isOpen={props.isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <Flex alignItems={'center'} justifyContent='space-between'>
                <Text>Login</Text>
                <GrFormClose onClick={props.onClose}/>
            </Flex>
            </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'30px'} fontSize={'18px'} fontWeight={'600'} display='start'>
            <Text>Home</Text>
            <Accordion allowMultiple >
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                    <Text>
                        <AccordionButton p='10px 0'>
                            <Box fontWeight={'600'} fontSize={'18px'} flex='1' textAlign='left'>
                                Sweet Categories
                            </Box>
                        {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                        ) : (
                        <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                    </Text>
                <AccordionPanel pb={4}>
                  <VStack mt='10px' fontWeight={'500'} fontSize={'17px'} spacing={'30px'} display='start'>
                      <Text>Shop All</Text>
                      <Text>Christmas Gift Ideas $ Treats</Text>
                      <Text>Christmas Theme Sweets</Text>
                      <Text>Soft Chewy Sweets</Text>
                      <Text>Hard Sweets</Text>
                      </VStack>
                </AccordionPanel>
            </>
            )}
            </AccordionItem>
            </Accordion>
            <Text>New Sweets</Text>
            <Text>Sharing Bags</Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SliderNav