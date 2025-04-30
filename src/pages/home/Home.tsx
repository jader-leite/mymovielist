import { useMovies } from '../../hooks/useMovies';
import { MovieCard, EmptyState } from '../../components';

import {
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Input,
  Pagination,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { TbMovieOff } from 'react-icons/tb';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useMyMovieListStore } from '../../stores';

function Home() {
  const [query, setQuery] = useState('');
  const { searchQuery, setSearchQuery, currentPage, setCurrentPage } = useMyMovieListStore();
  const { loading, data: movies, totalResults, isEmpty } = useMovies(searchQuery, currentPage);

  const handleSearch = () => {
    setCurrentPage(1);
    setSearchQuery(query);
  };
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
        <Pagination.Root
          count={totalPages}
          pageSize={1}
          page={currentPage}
          onPageChange={(e) => setCurrentPage(e.page)}
        >
          <ButtonGroup
            variant="ghost"
            size="sm"
          >
            <Pagination.PrevTrigger
              bg={{ base: 'transparent', _hover: 'purple.600' }}
              asChild
            >
              <IconButton color={{ base: 'purple.950', _hover: 'white' }}>
                <HiChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              color={{ base: 'purple.950', _hover: 'white' }}
              bg={{ base: 'transparent', _hover: 'purple.600' }}
              render={(page) => <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>{page.value}</IconButton>}
            />

            <Pagination.NextTrigger
              bg={{ base: 'transparent', _hover: 'purple.600' }}
              asChild
            >
              <IconButton color={{ base: 'purple.950', _hover: 'white' }}>
                <HiChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </Stack>
    );
  };

  return (
    <Flex
      minHeight="100vh"
      direction="column"
      flex={1}
      py={10}
      px={{ base: 3, sm: 4, md: 30, lg: 60, lgToXl: 50, xl: 150 }}
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
          onKeyUp={(e) => {
            e.key === 'Enter' && handleSearch();
          }}
        />
        <IconButton
          size="sm"
          aria-label="Search"
          borderRadius="2xl"
          position="absolute"
          right={0}
          onClick={() => handleSearch()}
        >
          <CiSearch />
        </IconButton>
      </Flex>
      {renderHomeContent()}
    </Flex>
  );
}

export default Home;
