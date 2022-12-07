import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Checkbox, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Text, useDisclosure, VStack } from "@chakra-ui/react";

import { IoFilter } from "react-icons/io5";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, PhoneIcon } from "@chakra-ui/icons";

const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack>
      <Icon as={IoFilter} />
      <Text as="button" onClick={onOpen}>
        Filter
      </Text>
      <Modal isOpen={isOpen} onClose={onClose} size='xs'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Accordion allowMultiple >
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                    <Text>
                        <AccordionButton p='10px 0'>
                            <Box letterSpacing={'.2px'} fontWeight={'600'} fontSize={'15px'} flex='1' textAlign='left'>
                               Availability
                            </Box>
                        {isExpanded ? (
                        <MinusIcon fontSize='10px' />
                        ) : (
                        <AddIcon fontSize='10px' />
                            )}
                        </AccordionButton>
                    </Text>
                <AccordionPanel pb={4}>
                  <Flex flexDir={'column'} fontWeight='600' >
                  <Checkbox colorScheme={'red'}  mb='5px' opacity={'.9'}>in stock</Checkbox>
                  <Checkbox colorScheme={'red'} opacity={'.9'}>out fot stock</Checkbox>
                  </Flex>
                </AccordionPanel>
            </>
            )}
            </AccordionItem>
            </Accordion>
            <Accordion allowMultiple >
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                    <Text>
                        <AccordionButton p='10px 0'>
                            <Box letterSpacing={'.2px'} fontWeight={'600'} fontSize={'15px'} flex='1' textAlign='left'>
                               Price
                            </Box>
                        {isExpanded ? (
                        <MinusIcon fontSize='10px' />
                        ) : (
                        <AddIcon fontSize='10px' />
                            )}
                        </AccordionButton>
                    </Text>
                <AccordionPanel pb={4}>
                  <Flex flexDir={'column'} fontWeight='600' >
                    <Text fontSize={'13px'} mb='10px' fontWeight={'600'} opacity='.7'>From</Text>
                  <InputGroup mb={'7px'}>
                  <InputLeftElement
                  pointerEvents='none'
                  color='gray.300'
                  fontSize='1.2em'
                  children='$'
                  />
                  <Input placeholder='Enter amount' />
                  </InputGroup>
                  <Text fontSize={'13px'} mb='10px' fontWeight={'600'} opacity='.7'>To</Text>
                  <InputGroup>
                  <InputLeftElement
                  pointerEvents='none'
                  color='gray.300'
                  fontSize='1.2em'
                  children='$'
                  />
                  <Input placeholder='Enter amount' />
                  </InputGroup>
                  </Flex>
                </AccordionPanel>
            </>
            )}
            </AccordionItem>
            </Accordion>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default Filter;
