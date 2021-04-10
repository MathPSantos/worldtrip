import Head from "next/head";
import { Box, Divider, Flex, Img, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { TravelCategory } from "../components/TravelCategory";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Box as="main">
        <Box
          as="section"
          bgImage="url('/images/cover-background.png')"
          bgPosition="center center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <Flex
            pos="relative"
            maxW={1120}
            mx="auto"
            py="16"
            px="6"
            align="center"
            justify="start"
          >
            <Flex flexDir="column" align="start">
              <Text as="h1" color="gray.50" fontWeight="500" fontSize="4xl">
                5 Continentes,
                <br /> infinitas possibilidades.
              </Text>
              <Text
                as="span"
                color="gray.100"
                fontWeight="400"
                fontSize="xl"
                maxW={524}
                mt="4"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>

            <Img
              pos="absolute"
              right="0"
              bottom="-36px"
              src="/images/airplane.svg"
              alt="Airplane"
            />
          </Flex>
        </Box>

        <Box as="section">
          <Flex
            maxW={1120}
            flexDir="column"
            align="center"
            px="6"
            pb="14"
            pt="28"
            mx="auto"
          >
            <Flex
              w="100%"
              flexWrap="wrap"
              align="center"
              justify="space-between"
            >
              <TravelCategory label="vida noturna" icon="cocktail" />
              <TravelCategory label="praia" icon="surf" />
              <TravelCategory label="moderno" icon="building" />
              <TravelCategory label="clássico" icon="museum" />
              <TravelCategory label="e mais..." icon="earth" />
            </Flex>

            <Box
              mt="14"
              bg="black"
              w="100%"
              maxW="90px"
              h="1px"
              bgColor="black"
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
}
