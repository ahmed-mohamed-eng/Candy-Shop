import {
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import SliderNav from "../SliderNav";
import { FiLogIn } from "react-icons/fi";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack w="100%" alignItems={"center"}>
      <Container
        alignItems={"center"}
        maxW={{
          xl: "container.xl",
          lg: "container.lg",
          md: "container.md",
          sm: "container.sm",
          base: "400px",
        }}
        display="flex"
      >
        <Image
          minW="130px"
          maxW="170px"
          alt="Logo"
          src={
            "https://cdn.shopify.com/s/files/1/0334/4036/6725/files/NEW_LOGO_TRADEMARK_SEP_2019_SMALLISH_2038f901-e716-4974-8f53-81e51a9ecfaf_394x226.png?v=1630542650"
          }
        />
        <Input
          borderRadius={"5px"}
          type="search"
          placeholder="Search..."
          mx="5px"
        />
        <Button w="120px" ml="15px" variant={"unstyled"}>
          <Flex alignItems={"center"} fontSize={{ base: "25px", md: "20px" }}>
            <Text mr="4px" display={{ md: "block", base: "none" }}>
              Cart
            </Text>
            <BsCart4 fontSize="25px" />
          </Flex>
        </Button>
        <Button
          ml="10px"
          colorScheme={"red"}
          px="25px"
          display={{ md: "block", base: "none" }}
        >
          <Flex alignItems={"center"}>
            <Text mr="4px">Login</Text>
            <FiLogIn />
          </Flex>
        </Button>
        <IconButton
          onClick={onOpen}
          opacity={".7"}
          fontSize="25px"
          display={{ base: "block", md: "none" }}
          aria-label="Go To Cart"
          icon={<GiHamburgerMenu />}
          variant={"unstyled"}
        />
      </Container>
      <SliderNav onClose={onClose} isOpen={isOpen} />
    </HStack>
  );
};

export default NavBar;
