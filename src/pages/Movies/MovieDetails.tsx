import { useMovieById } from '../../hooks/useMovieById';
import { Box, Flex, Image, Text, VStack, Spinner, Center, Grid, GridItem, For, Badge } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import PosterNotFound from '../../../assets/images/poster-not-found.png';

import TrailerModal from './movies-details/components/TrailerModal';
import { FavoriteButton } from '../../components';

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  const { data: movie, loading, bgPosterUrl, genreList, trailerUrl } = useMovieById(id || '');

  if (!movie)
    return (
      <Flex
        justify="center"
        color="purple.950"
      >
        <Spinner size="xl" />
      </Flex>
    );

  return (
    <Box minH="100vh">
      {loading ? (
        <Flex
          justify="center"
          color="purple.950"
          flex={1}
        >
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Center
          position="relative"
          overflow="auto"
          height="100%"
          py={10}
        >
          <Image
            src={bgPosterUrl || ''}
            alt="background"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            objectFit="cover"
            zIndex={-2}
          />

          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="rgba(68, 61, 61, 0.85)"
            zIndex={-1}
          />

          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            px={{ base: 3, sm: 4, md: 30, lg: 60, lgToXl: 50, xl: 170 }}
          >
            <GridItem
              alignContent="center"
              justifyItems={{ base: 'center', md: 'end' }}
            >
              <Image
                src={movie.Poster !== 'N/A' ? movie.Poster : PosterNotFound}
                alt={movie.Title}
                borderRadius="md"
                w={300}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <VStack
                align="start"
                justify="start"
                height="100%"
                px={{ base: 4, md: 50 }}
                color="white"
                justifyContent="space-between"
              >
                <Flex
                  direction="column"
                  gap={5}
                >
                  <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    mt={{ base: 5, md: 0 }}
                  >
                    {movie.Title} ({movie.Year})
                  </Text>
                  <Flex
                    direction="row"
                    align="center"
                    wrap="wrap"
                    gap={2}
                  >
                    <For each={genreList}>
                      {(item, index) => (
                        <Badge
                          backgroundColor="purple.600"
                          key={index}
                        >
                          {item}
                        </Badge>
                      )}
                    </For>
                    <Text fontWeight="bold"> {movie.Runtime}</Text>
                  </Flex>
                </Flex>

                <Flex
                  direction="row"
                  align="center"
                  wrap="wrap"
                  gap={2}
                  mt={{ base: 5, lg: 0 }}
                >
                  <FavoriteButton movie={movie} />
                  <TrailerModal trailerURL={trailerUrl || undefined} />
                </Flex>

                <Text
                  fontStyle="italic"
                  fontSize={{ base: 'md', md: 'lg' }}
                  maxW="800px"
                  mt={{ base: 5, lg: 0 }}
                >
                  {movie.Plot}
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Center>
      )}
    </Box>
  );
}
