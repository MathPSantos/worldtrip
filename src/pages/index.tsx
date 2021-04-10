import Head from "next/head";
import { Box, Flex, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Box as="main" bg="blue.700" w="100%">
        <Flex
          maxW={1120}
          mx="auto"
          py="16"
          px="4"
          align="center"
          justify="space-between"
        >
          <Flex flexDir="column" align="start">
            <Text color="gray.50" fontWeight="bold">
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
