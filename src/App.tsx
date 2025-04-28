import { RouterProvider } from 'react-router/dom'
import router from './routes'
import Header from './components/Header'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Footer from './components/Footer'

function App() {
  return (
    <SimpleGrid display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box bgColor="#dcdcdc" px={{ base: 0, md: 350 }} flex="1">
        <RouterProvider router={router} />
      </Box>
      <Footer/>
    </SimpleGrid>
  )
}
export default App
