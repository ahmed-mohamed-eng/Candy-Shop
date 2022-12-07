import { HStack, Icon, Text, useDisclosure } from "@chakra-ui/react";

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

const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack>
      <Icon as={IoFilter} />
      <Text as="button" onClick={onOpen}>Filter</Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default Filter;
