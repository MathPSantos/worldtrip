import { Box, Flex, Img } from "@chakra-ui/react";

export function Header() {
  return (
    <Box w="100%" bg="gray.50">
      <Flex maxW={1120} mx="auto" py="7" px="4" justify="center" align="center">
        <Img src="/images/logo.svg" alt="Worldtrip Logo" />
      </Flex>
    </Box>
  );
}
