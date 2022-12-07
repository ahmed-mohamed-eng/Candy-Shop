import { HStack } from "@chakra-ui/react";
import Filter from "./Filter";
import SortBy from "./SortBy";

const Filters = () => {
  return (
    <HStack>
      <Filter />
      <SortBy />
    </HStack>
  );
};

export default Filters;
