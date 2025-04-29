import { searchMovies } from '../../services/omdbApi';
import { Movie } from '@/types';
import { Box, Flex, Heading, IconButton, Input, SimpleGrid, Spinner, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

function Home() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async (searchQuery: string) => {
    setLoading(true);
    try {
      const data = await searchMovies(searchQuery);
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      minHeight="100vh"
      direction="column"
      flex={1}
      py={8}
    >
      <Heading
        size={{ base: '4xl', md: '6xl' }}
        color="purple.900"
      >
        Welcome to My Movie List
      </Heading>
      <Text
        fontSize="xl"
        mb={12}
        color="purple.700"
      >
        Find your new favorite movie today! 🎥
      </Text>

      <Flex
        align="center"
        justify="space-between"
        w="full"
        gap={5}
        position="relative"
        mb={8}
      >
        <Input
          placeholder="Search by movie title"
          size="md"
          bg="white"
          borderColor="gray.300"
          borderRadius="2xl"
          pr="40px"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          color="purple.800"
        />
        <IconButton
          size="sm"
          aria-label="Search"
          borderRadius="2xl"
          position="absolute"
          right={0}
          onClick={() => fetchMovies(query)}
        >
          <CiSearch />
        </IconButton>
      </Flex>
      {loading ? (
        <Flex
          justify="center"
          color="purple.950"
        >
          <Spinner size="xl" />
        </Flex>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
          {movies.map((movie) => (
            <Box
              key={movie.imdbID}
              bg="purple.900"
              p={4}
              borderRadius="md"
              _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
              m={2}
            >
              <Image
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                alt={movie.Title}
                borderRadius="md"
                mb={4}
              />
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="white"
              >
                {movie.Title}
              </Text>

              <Text
                fontSize="sm"
                color="gray.400"
              >
                {movie.Year}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
}

export default Home;
