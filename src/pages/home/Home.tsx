import { useMovies } from '../../hooks/useMovies';
import { MovieCard, EmptyState, SearchBar } from '../../components';

import { Flex, Heading, SimpleGrid, Spinner, Stack, Text } from '@chakra-ui/react';
import { TbMovieOff } from 'react-icons/tb';
import { useMyMovieListStore } from '../../stores';
import HomePagination from './components/HomePagination';

function Home() {
  const { searchQuery, currentPage } = useMyMovieListStore();
  const { loading, data: movies, totalResults, isEmpty } = useMovies(searchQuery, currentPage);

  const totalPages = Math.ceil(totalResults / 10);

  const renderHomeContent = () => {
    if (loading) {
      return (
        <Flex
          justify="center"
          color="purple.950"
        >
          <Spinner size="xl" />
        </Flex>
      );
    }

    if (isEmpty) {
      return (
        <EmptyState
          title="No movies found"
          description="Try adjusting your search"
          icon={<TbMovieOff />}
        />
      );
    }

    return (
      <Stack
        gap={5}
        align="center"
      >
        <Text
          mb={4}
          color="purple.700"
        >
          {totalResults} movies found
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              {...movie}
            />
          ))}
        </SimpleGrid>
        <HomePagination totalPages={totalPages} />
      </Stack>
    );
  };

  return (
    <Flex
      minHeight="100vh"
      direction="column"
      flex={1}
      py={10}
      px={{ base: 3, sm: 4, md: 30, lg: 60, lgToXl: 50, xl: 230 }}
      bgColor="#fcfcfc"
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
        Find your new favorite movie today!
      </Text>
      <SearchBar />
      {renderHomeContent()}
    </Flex>
  );
}

export default Home;
