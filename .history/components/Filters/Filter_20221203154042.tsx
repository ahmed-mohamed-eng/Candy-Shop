import { HStack, Icon, Text } from "@chakra-ui/react";

import { IoFilter } from "react-icons/io5";

const Filter = () => {
  return (
    <HStack>
      <Icon as={IoFilter} />
      <Text>Filter</Text>
    </HStack>
  );
};

export default Filter;
