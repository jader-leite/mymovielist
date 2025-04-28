
import { Flex, Heading, Link } from '@chakra-ui/react';


const Header = () => {
  return (
    <Flex
      as="header"
      bg="purple.700"
      p={4}
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={100}
      justify="center"
      align="center"
      > 
      <Flex flex={1}  maxW="1200px" mx="auto">
        <Flex
          align="center"
          flex={1}
          gap={5}>
          <Heading as="h1" size="lg" color="white">
            My Movie List
          </Heading>
          <Link
            href='/Movies/MovieList'
            fontSize="md"
          >
            Movies
          </Link>
          <Link
            href='/Movies/Favorites'
            fontSize="md"
          >
            Favorites
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
