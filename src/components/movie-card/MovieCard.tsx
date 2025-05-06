import { Image, Text, Stack, HStack } from '@chakra-ui/react';
import { Movie as MovieCardProps } from '@/types';
import { useNavigate } from 'react-router-dom';

import PosterNotFound from '../../assets/images/poster-not-found.png';
import { useState } from 'react';
import FavoriteButton from '../favorite-button/FavoriteButton';

const MovieCard = (props: MovieCardProps) => {
  const navigate = useNavigate();
  const [posterImg, setPosterImg] = useState(props.Poster);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/movies/${props.imdbID}`);
    }
  };

  return (
    <Stack
      bg="purple.900"
      borderRadius="md"
      _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
      m={2}
      p={2}
      cursor="button"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${props.Title}`}
    >
      <Image
        src={posterImg}
        alt={`Poster for ${props.Title}`}
        borderRadius="md"
        w={'100%'}
        h={'100%'}
        onError={() => setPosterImg(PosterNotFound)}
        onClick={() => navigate(`/movies/${props.imdbID}`)}
        onKeyUp={handleKeyPress}
      />

      <HStack
        justify="space-between"
        px={1}
      >
        <Stack
          onClick={() => navigate(`/movies/${props.imdbID}`)}
          onKeyUp={handleKeyPress}
        >
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
        </Stack>
        <FavoriteButton movie={props} />
      </HStack>
    </Stack>
  );
};

export default MovieCard;
