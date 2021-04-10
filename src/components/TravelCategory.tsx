import { Flex, Img, Text } from "@chakra-ui/react";

interface TravelCategoryProps {
  label: string;
  icon: string;
}

export function TravelCategory({ label, icon }: TravelCategoryProps) {
  return (
    <Flex flexDir="column" align="center">
      <Img src={`/images/icons/${icon}.svg`} alt="icon" />
      <Text mt="6" fontWeight="600" fontSize="2xl">
        {label}
      </Text>
    </Flex>
  );
}
