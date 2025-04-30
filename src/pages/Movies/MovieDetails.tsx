import { useMovieById } from '../../hooks/useMovieById';
import { useMyMovieListStore } from '../../stores';
import { Box, Flex, Image, Text, IconButton, VStack, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';
import { Tooltip } from '../../components';

import PosterNotFound from '../../assets/images/poster-not-found.png';

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { addFavorite, removeFavorite, favorites } = useMyMovieListStore();
  const { data: movie, loading, bgPosterUrl } = useMovieById(id || '');
  const isFavorite = favorites.some((favorite) => favorite.imdbID === id);

  if (!movie)
    return (
      <div>
        <h1>OIII</h1>
      </div>
    );

  return (
    <Box>
      {loading ? (
        <Flex
          justify="center"
          color="purple.950"
          flex={1}
        >
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Box
          position="relative"
          overflow="hidden"
          alignContent="center"
          justifyItems="center"
        >
          {bgPosterUrl && (
            <Image
              src={bgPosterUrl}
              alt="background"
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              objectFit="cover"
              zIndex={-2}
            />
          )}
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.85)"
            zIndex={-1}
          />
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="center"
            align="center"
          >
            <Image
              src={movie.Poster !== 'N/A' ? movie.Poster : PosterNotFound}
              alt={movie.Title}
              borderRadius="md"
              width="300px"
            />
            <VStack
              align="start"
              justify="center"
              height="100%"
              px={{ base: 4, md: 16 }}
              color="white"
            >
              <Text
                fontSize={{ base: '3xl', md: '5xl' }}
                fontWeight="bold"
              >
                {movie.Title} ({movie.Year})
              </Text>
              <Text mb={2}>Genre: {movie.Genre}</Text>
              <Text mb={2}>Director: {movie.Director}</Text>
              <Text mb={2}>Actors: {movie.Actors}</Text>
              <Text
                fontSize={{ base: 'md', md: 'xl' }}
                maxW="800px"
              >
                {movie.Plot}
              </Text>
              <Tooltip content={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
                <IconButton
                  rounded="full"
                  p={4}
                  bg="purple.400"
                  width={10}
                  height={10}
                  onClick={() => (isFavorite ? removeFavorite(movie.imdbID) : addFavorite(movie))}
                >
                  {isFavorite ? <MdOutlineStar color="white" /> : <MdOutlineStarBorder fill="white" />}
                </IconButton>
              </Tooltip>
            </VStack>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default MovieDetails;
