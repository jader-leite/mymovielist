import { Box, Image, Text } from '@chakra-ui/react';
import { Movie as MovieCardProps } from '@/types';

const MovieCard = (props: MovieCardProps) => {
  return (
    <Box
      key={props.imdbID}
      bg="purple.900"
      p={4}
      borderRadius="md"
      _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
      m={2}
    >
      <Image
        src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
        alt={props.Title}
        borderRadius="md"
        mb={4}
      />
      <Text
        fontSize="lg"
        fontWeight="bold"
        color="white"
      >
        {props.Title}
      </Text>

      <Text
        fontSize="sm"
        color="gray.400"
      >
        {props.Year}
      </Text>
    </Box>
  );
};

export default MovieCard;
