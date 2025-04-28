import { Box, Text, Flex, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="purple.700"
      p={6}
      mt="auto"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        gap={4}
      >
        <Text fontSize="sm" color="gray.400" textAlign="center">
          © {new Date().getFullYear()} My movie list. All rights reserved.
        </Text>

        <Flex gap={4}>
          <Link
            href="#"
            fontSize="sm"
            color="gray.300"
            _hover={{ color: 'teal.300' }}
          >
            Terms of use
          </Link>
          <Link
            href="#"
            fontSize="sm"
            color="gray.300"
            _hover={{ color: 'teal.300' }}
          >
            Privacy
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
