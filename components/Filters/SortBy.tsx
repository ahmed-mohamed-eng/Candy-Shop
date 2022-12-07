import { HStack, Icon, Text } from "@chakra-ui/react";

import { BiSortAlt2 } from "react-icons/bi";

const SortBy = () => {
  return (
    <HStack>
      <Icon as={BiSortAlt2} />
      <Text as="button">Soft By</Text>
    </HStack>
  );
};

export default SortBy;
