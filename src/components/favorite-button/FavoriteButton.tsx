import { IconButton } from '@chakra-ui/react';
import { Tooltip } from '../../components';
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';
import { useMyMovieListStore } from '../../stores';
import { Movie } from '@/types';
import { toaster } from '../../components/ui/toaster';

interface FavoriteButtonProps {
  movie: Movie;
}

const FavoriteButton = ({ movie }: FavoriteButtonProps) => {
  const { addFavorite, removeFavorite, favorites } = useMyMovieListStore();

  const isFavorite = favorites.some((favorite) => favorite.imdbID === movie.imdbID);

  const handleClick = (movie: Movie) => {
    if (isFavorite) {
      removeFavorite(movie.imdbID);
      toaster.success({
        title: 'Removed from favorites',
      });
      return;
    }
    addFavorite(movie);
    toaster.success({
      title: 'Added to favorites',
    });
  };
  return (
    <Tooltip content={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
      <IconButton
        rounded="full"
        p={4}
        bg="purple.700"
        width={10}
        height={10}
        onClick={() => handleClick(movie)}
      >
        {isFavorite ? <MdOutlineStar color="white" /> : <MdOutlineStarBorder fill="white" />}
      </IconButton>
    </Tooltip>
  );
};

export default FavoriteButton;
