import { EmptyState, MovieItemList, SearchBar } from '../../components';
import { Flex, Heading, Stack, StackSeparator, VStack } from '@chakra-ui/react';
import { TbMovieOff } from 'react-icons/tb';
import { useMyMovieListStore } from '../../stores';

function Favorites() {
  const { favorites } = useMyMovieListStore();

  const renderFavoriteContent = () => {
    if (favorites.length === 0) {
      return (
        <VStack>
          <EmptyState
            title="You don't have favorites yet"
            description="Why don't you try to search one to be it?"
            icon={<TbMovieOff />}
          />
          <SearchBar navigationPath={'/'} />
        </VStack>
      );
    }

    return (
      <Stack
        separator={<StackSeparator />}
        align="center"
      >
        {favorites.map((movie) => (
          <MovieItemList
            key={movie.imdbID}
            {...movie}
          />
        ))}
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
      gap={20}
    >
      <Heading
        size={{ base: '4xl', md: '6xl' }}
        color="purple.900"
      >
        My favorites
      </Heading>

      {renderFavoriteContent()}
    </Flex>
  );
}

export default Favorites;
