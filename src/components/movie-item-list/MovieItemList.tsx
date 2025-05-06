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

  const handleKeyPress = (e: React.KeyboardEvent, action: 'view details' | 'remove') => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (action === 'view details') {
        navigate(`/movies/${props.imdbID}`);
      } else {
        removeFavorite(props.imdbID);
      }
    }
  };

  return (
    <HStack
      bg="purple.900"
      borderRadius="md"
      p={2}
      w="100%"
      justifyContent="space-between"
      role="listitem"
    >
      <HStack gap={5}>
        <Image
          src={posterImg}
          alt={`Poster for ${props.Title}`}
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
          onKeyUp={(e) => handleKeyPress(e, 'view details')}
          tabIndex={0}
          role="link"
          aria-label={`View details for ${props.Title}`}
        >
          {props.Title}
        </Link>
      </HStack>

      <Link
        fontSize="lg"
        fontWeight="bold"
        color="white"
        onClick={() => removeFavorite(props.imdbID)}
        onKeyUp={(e) => handleKeyPress(e, 'remove')}
        tabIndex={0}
        role="button"
        aria-label={`Remove ${props.Title} from favorites`}
        mr={3}
      >
        <IoMdRemoveCircle />
      </Link>
    </HStack>
  );
};

export default MovieItemList;
