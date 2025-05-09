import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import LogoIcon from '../../assets/Icons/LogoIcon';

const Header = () => {
  const navigate = useNavigate();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate('/');
    }
  };

  return (
    <Flex
      as="header"
      bg="purple.700"
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={100}
      justify="center"
      align="center"
      px={{ base: 3, sm: 4, md: 30, lg: 60, lgToXl: 50, xl: 180 }}
      maxH={100}
      role="banner"
    >
      <Flex
        flex={1}
        mx="auto"
        as="nav"
        aria-label="Main navigation"
      >
        <Flex
          align="center"
          flex={1}
          gap={5}
        >
          <Box
            onClick={() => navigate('/')}
            onKeyUp={handleKeyPress}
            cursor="pointer"
            tabIndex={0}
            role="button"
            aria-label="Navigate to homepage"
          >
            <LogoIcon
              width={150}
              height={75}
              aria-hidden="true"
            />
          </Box>

          <Link
            as={RouterLink}
            to="/"
            fontSize="md"
            color="white"
            _hover={{ textDecoration: 'underline' }}
            aria-current={window.location.pathname === '/' ? 'page' : undefined}
            aria-label="Navigate to homepage"
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/favorites"
            fontSize="md"
            color="white"
            _hover={{ textDecoration: 'underline' }}
            aria-current={window.location.pathname === '/favorites' ? 'page' : undefined}
            aria-label="Navigate to favorites page"
          >
            Favorites
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
