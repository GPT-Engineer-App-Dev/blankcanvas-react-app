import { Box, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Text fontSize="2xl">About Us</Text>
      <Text>This is the about page.</Text>
    </VStack>
  </Box>
);

export default About;