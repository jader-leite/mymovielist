import { Image, Text, Stack } from '@chakra-ui/react';
import { Movie as MovieCardProps } from '@/types';
import { useNavigate } from 'react-router-dom';

import PosterNotFound from '../../assets/images/poster-not-found.png';
import { useState } from 'react';

const MovieCard = (props: MovieCardProps) => {
  const navigate = useNavigate();
  const [posterImg, setPosterImg] = useState(props.Poster);

  return (
    <Stack
      bg="purple.900"
      borderRadius="md"
      _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
      m={2}
      p={2}
      onClick={() => navigate(`/movies/${props.imdbID}`)}
      cursor="button"
    >
      <Image
        src={posterImg}
        alt={props.Title}
        borderRadius="md"
        w={'100%'}
        h={'100%'}
        onError={() => setPosterImg(PosterNotFound)}
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
    </Stack>
  );
};

export default MovieCard;
