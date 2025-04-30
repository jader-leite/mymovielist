import { Footer, Header } from '../components';
import { SimpleGrid } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <SimpleGrid minH="100vh">
    <Header />
    <Outlet />
    <Footer />
  </SimpleGrid>
);

export default Layout;
