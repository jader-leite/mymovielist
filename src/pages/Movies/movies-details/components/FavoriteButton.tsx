import { IconButton } from '@chakra-ui/react';
import { Tooltip } from '../../../../components';
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';
import { useMyMovieListStore } from '../../../../stores';
import { Movie } from '@/types';

interface FavoriteButtonProps {
  id: string | undefined;
  movie: Movie;
}

const FavoriteButton = ({ id, movie }: FavoriteButtonProps) => {
  const { addFavorite, removeFavorite, favorites } = useMyMovieListStore();
  const isFavorite = favorites.some((favorite) => favorite.imdbID === id);
  return (
    <Tooltip content={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
      <IconButton
        rounded="full"
        p={4}
        bg="purple.700"
        width={10}
        height={10}
        onClick={() => (isFavorite ? removeFavorite(movie.imdbID) : addFavorite(movie))}
      >
        {isFavorite ? <MdOutlineStar color="white" /> : <MdOutlineStarBorder fill="white" />}
      </IconButton>
    </Tooltip>
  );
};

export default FavoriteButton;
