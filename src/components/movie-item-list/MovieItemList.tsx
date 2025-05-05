import { Image, Link, HStack } from '@chakra-ui/react';
import { Movie as MovieCardProps } from '@/types';
import { useNavigate } from 'react-router-dom';
import { IoMdRemoveCircle } from 'react-icons/io';

import PosterNotFound from '../../assets/images/poster-not-found.png';
import { useState } from 'react';
import { useMyMovieListStore } from '../../stores';

const MovieItemList = (props: MovieCardProps) => {
  const navigate = useNavigate();
  const [posterImg, setPosterImg] = useState(props.Poster);
  const { removeFavorite } = useMyMovieListStore();

  return (
    <HStack
      bg="purple.900"
      borderRadius="md"
      p={2}
      w="100%"
      justifyContent="space-between"
    >
      <HStack gap={5}>
        <Image
          src={posterImg}
          alt={props.Title}
          borderRadius="md"
          w={50}
          h={50}
          onError={() => setPosterImg(PosterNotFound)}
        />

        <Link
          fontSize="lg"
          fontWeight="bold"
          color="white"
          onClick={() => navigate(`/movies/${props.imdbID}`)}
        >
          {props.Title}
        </Link>
      </HStack>

      <Link
        fontSize="lg"
        fontWeight="bold"
        color="white"
        onClick={() => removeFavorite(props.imdbID)}
        mr={3}
      >
        <IoMdRemoveCircle />
      </Link>
    </HStack>
  );
};

export default MovieItemList;
