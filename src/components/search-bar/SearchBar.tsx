import { useState } from 'react';
import { useMyMovieListStore } from '../../stores';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import { To, useNavigate } from 'react-router-dom';

interface SearchBarProps {
  navigationPath?: To;
}

const SearchBar = (props: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const { setSearchQuery, setCurrentPage } = useMyMovieListStore();
  const navigate = useNavigate();

  const handleSearch = () => {
    setCurrentPage(1);
    setSearchQuery(query);
    {
      props.navigationPath && navigate(props.navigationPath);
    }
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      w="full"
      gap={5}
      position="relative"
      mb={8}
    >
      <Input
        placeholder="Search by movie title"
        size="md"
        bg="white"
        borderColor="gray.300"
        borderRadius="2xl"
        pr="40px"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        color="purple.800"
        onKeyUp={(e) => {
          e.key === 'Enter' && handleSearch();
        }}
      />
      <IconButton
        size="sm"
        aria-label="Search"
        borderRadius="2xl"
        position="absolute"
        right={2}
        onClick={() => handleSearch()}
      >
        <CiSearch />
      </IconButton>
    </Flex>
  );
};

export default SearchBar;
