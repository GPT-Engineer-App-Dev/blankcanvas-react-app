import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Box>
          <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
          <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
        </Box>
      </Flex>
      <Box as="main" flex="1" p={4}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is your blank canvas. Start adding your content here.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;