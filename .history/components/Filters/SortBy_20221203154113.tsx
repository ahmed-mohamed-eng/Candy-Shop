import { HStack, Icon, Text } from "@chakra-ui/react";

import { IoFilter } from "react-icons/io5";

const SortBy = () => {
  return (
    <HStack>
      <Icon as={IoFilter} />
      <Text>Filter</Text>
    </HStack>
  );
};

export default SortBy;
