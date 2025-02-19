import React from "react";
import { Container, Box, Text, Heading, Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      m="auto"
      w="97%"
      zIndex={10}
      mt="10"
      mb="10"
      bottom="0"
      border="1px"
      borderColor="gray.200"
      borderRadius="10px"
      overflow={"hidden"}
      marginTop="50"
      boxShadow={
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }
    >
      <Container maxW="container.xl">
        <Flex direction="row" flexWrap="wrap" align="center" justify="center">
          <Box p="5">
            <Heading size="sm" mb="3">
              College
            </Heading>
            <Text cursor="pointer">
              Bharati Vidyapeeth's Jawaharlal Nehru Insitute Of Technology,
              Dhankawadi
            </Text>
          </Box>
          <Box p="5">
            <Heading size="sm" mb="3">
              Guide
            </Heading>
            <Text cursor="pointer">Prof. Mrs. R. S. Anami</Text>
          </Box>
          <Box p="4" align="left">
            <Flex direction="column" spacing={8} p="1">
              <Heading size="sm" mb="3">
                Group members
              </Heading>
              <Text cursor="pointer">1.Tanuja Abhang</Text>
              <Text cursor="pointer">2.Tanishka Shevate</Text>
              <Text cursor="pointer">3.Trushant Jadhav</Text>
              <Text cursor="pointer">4.Riya Kadole</Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
