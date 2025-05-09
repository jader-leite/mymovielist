import { useMyMovieListStore } from '../../../stores';
import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface HomePaginationProps {
  totalPages: number;
}

const HomePagination = (props: HomePaginationProps) => {
  const { currentPage, setCurrentPage } = useMyMovieListStore();
  return (
    <Pagination.Root
      count={props.totalPages}
      pageSize={1}
      page={currentPage}
      onPageChange={(e) => setCurrentPage(e.page)}
    >
      <ButtonGroup
        variant="ghost"
        size="sm"
      >
        <Pagination.PrevTrigger
          bg={{ base: 'transparent', _hover: 'purple.600' }}
          asChild
        >
          <IconButton color={{ base: 'purple.950', _hover: 'white' }}>
            <HiChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton
              color={{ base: 'purple.950', _hover: 'white' }}
              bg={{ base: 'transparent', _hover: 'purple.600' }}
              variant={{ base: 'ghost', _selected: 'outline' }}
            >
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger
          bg={{ base: 'transparent', _hover: 'purple.600' }}
          asChild
        >
          <IconButton color={{ base: 'purple.950', _hover: 'white' }}>
            <HiChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
};
export default HomePagination;
