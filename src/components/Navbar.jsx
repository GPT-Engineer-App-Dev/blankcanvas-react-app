import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between">
      <Text fontSize="xl" fontWeight="bold">MyApp</Text>
      <Box>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
        <Link to="/events" style={{ margin: '0 10px', color: 'white' }}>Events</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;