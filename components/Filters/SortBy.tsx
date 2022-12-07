import { Button, HStack, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";

import { BiSortAlt2 } from "react-icons/bi";

const SortBy = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack>
      <Icon as={BiSortAlt2} />
      <Text as="button" onClick={onOpen}>Soft By</Text>
      <Modal size={'xs'}  isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sort By</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
             <VStack spacing={'15px'}>
             <Button w='100%' colorScheme={'red'}>Featured</Button>
             <Button w='100%' colorScheme={'red'}>Best Selling</Button>
             <Button w='100%' colorScheme={'red'}>Price, Low To Heigh</Button>
             <Button w='100%' colorScheme={'red'}>Price, Heigh To Low</Button>
             <Button w='100%' colorScheme={'red'}>Date , Old To New</Button>
             <Button w='100%' colorScheme={'red'}>Date, New To Old</Button>
             </VStack>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default SortBy;
