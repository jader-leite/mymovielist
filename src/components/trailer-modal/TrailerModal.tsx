import { EmptyState } from '..';
import { AspectRatio, CloseButton, Dialog, IconButton, Portal } from '@chakra-ui/react';

import { IoIosPlay } from 'react-icons/io';
import { TbMovieOff } from 'react-icons/tb';

interface TrailerModalProps {
  trailerURL: string | undefined;
}

const TrailerModal = ({ trailerURL }: TrailerModalProps) => {
  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>
        <IconButton
          rounded="full"
          p={4}
          bg="purple.700"
          color="white"
          aria-label="Watch movie trailer"
        >
          <IoIosPlay color="white" /> Watch trailer
        </IconButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body pt="4">
              <Dialog.Title mb={6}>Play trailer</Dialog.Title>

              {trailerURL !== undefined ? (
                <AspectRatio
                  ratio={4 / 3}
                  rounded="lg"
                  overflow="hidden"
                >
                  <iframe
                    title="movie trailer"
                    src={trailerURL}
                    allowFullScreen
                    aria-label="Movie trailer video player"
                  />
                </AspectRatio>
              ) : (
                <EmptyState
                  title="Trailer not found"
                  icon={<TbMovieOff />}
                />
              )}
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                size="sm"
                aria-label="Close trailer modal"
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
export default TrailerModal;
