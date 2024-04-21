import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box as="nav" bg="gray.100" py={4}>
      <HStack spacing={8} justifyContent="center">
        <Link as={RouterLink} to="/">Home</Link>
        <Link as={RouterLink} to="/work">Work</Link>
      </HStack>  
    </Box>
  );
};

export default Navigation;