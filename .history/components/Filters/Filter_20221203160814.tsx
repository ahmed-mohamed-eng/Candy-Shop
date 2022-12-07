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
      <Text as="button">Filter</Text>
    </HStack>
  );
};

export default Filter;
