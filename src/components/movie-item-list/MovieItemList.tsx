import { Image, Link, HStack, Dialog, Portal, Button, CloseButton, Text } from '@chakra-ui/react';
import { Movie as MovieCardProps } from '@/types';
import { useNavigate } from 'react-router-dom';

import PosterNotFound from '../../assets/images/poster-not-found.png';
import { useState } from 'react';
import { useMyMovieListStore } from '../../stores';
import { MdOutlinePlaylistRemove } from 'react-icons/md';
import { Tooltip } from '../ui/tooltip';

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

      <Dialog.Root placement="center">
        <Tooltip content="Remove from favorites">
          <Dialog.Trigger asChild>
            <Link
              fontSize="lg"
              fontWeight="bold"
              color="white"
              tabIndex={0}
              role="button"
              aria-label={`Remove ${props.Title} from favorites`}
              mr={3}
            >
              <MdOutlinePlaylistRemove />
            </Link>
          </Dialog.Trigger>
        </Tooltip>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Remove from favorites</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text>Are you sure you want to remove {props.Title} from your favorites? </Text>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button
                  onClick={() => removeFavorite(props.imdbID)}
                  onKeyUp={(e) => handleKeyPress(e, 'remove')}
                >
                  Yes
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </HStack>
  );
};

export default MovieItemList;
