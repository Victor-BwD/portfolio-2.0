import React from 'react';
import {
  Box,
  Grid,
  Image,
  Button,
  Link,
  ChakraProvider,
  extendTheme,
  HStack,
} from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
  },
});

const projects = [
  {
    id: 1,
    name: 'Projeto 1',
    image: 'https://sciencenotes.org/wp-content/uploads/2021/03/Examples-of-Liquids.png',
    source: 'https://example.com/source1',
    repository: 'https://example.com/repository1',
  },
  {
    id: 2,
    name: 'Projeto 2',
    image: 'https://sciencenotes.org/wp-content/uploads/2021/03/Examples-of-Liquids.png',
    source: 'https://example.com/source2',
    repository: 'https://example.com/repository2',
  },
  {
    id: 3,
    name: 'Projeto 2',
    image: 'https://sciencenotes.org/wp-content/uploads/2021/03/Examples-of-Liquids.png',
    source: 'https://example.com/source2',
    repository: 'https://example.com/repository2',
  },
  // Adicione mais projetos aqui...
];

export function Projects() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={4}>
        <Grid
          templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={4}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              backgroundColor="white"
            >
              <Image src={project.image} alt={project.name} mb={4} objectFit="cover" />
              <HStack
                spacing={{ base: '15px', md: '20px' }}
                justifyContent="center"
                mt="auto"
              >
                <Button
                  as={Link}
                  href={project.source}
                  colorScheme="blue"
                  fontSize={{ base: 'sm', md: 'md' }}
                  minW="140px"
                >
                  Ver Source
                </Button>
                <Button
                  as={Link}
                  href={project.repository}
                  colorScheme="blue"
                  fontSize={{ base: 'sm', md: 'md' }}
                  minW="140px"
                >
                  Ver Repositório
                </Button>
              </HStack>
            </Box>
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
