import React, { useContext } from 'react';
import {
  Box,
  Grid,
  Image,
  Button,
  Link,
  ChakraProvider,
  extendTheme,
  HStack,
  Text,
  Flex
} from '@chakra-ui/react';
import { LanguageContext } from '../context/LanguageContext';
import ComingSoonPhoto from '../assets/comingsoon.jpg'



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
    image: 'https://i.imgur.com/gyxa19Q.png',
    description: 'A game made in Unity for studying animation, code and lighting.',
    source: 'https://victor-bwd.itch.io/the-castle',
    repository: 'https://github.com/Victor-BwD/Game-2D-Metroidvania',
  },
  {
    id: 2,
    name: 'Projeto 2',
    image: 'https://i.imgur.com/68UnNQb.png',
    description: 'A copy of the windows calculator made in React.',
    source: 'https://calculator-react-js-ten.vercel.app',
    repository: 'https://github.com/Victor-BwD/Calculator-ReactJS',
  },
  {
    id: 3,
    name: 'Projeto 2',
    image: ComingSoonPhoto,
    description: 'Project in development.',
    source: 'https://example.com/source2',
    repository: 'https://example.com/repository2',
  },
];

export function Projects() {
  const { idioma } = useContext(LanguageContext);

  return (
    <ChakraProvider theme={theme}>
      <Flex alignItems="center" justifyContent="center" flexDirection="column" id="projects">
        <Text as="b" fontSize="4xl" color="white" mb="2">
          {idioma === "pt" ? "Meus projetos" : "My Projects"}
        </Text>
        <Text as="b" fontSize="2xl" color="white" mb="2" p={{base: "12px", md: "0"}}>
          {idioma === "pt" ? "Alguns dos meus projetos que fiz no meu tempo livre" : "Some of the projects I did in my free time."}
        </Text>
      </Flex>
      <Box p={4}>
        <Grid
          templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={4}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              p={4}
              pb={{base: "20px", md: "32px", lg: "42px"}}
              borderWidth="1px"
              borderRadius="md"
              backgroundColor="white"
            >
              <Image src={project.image} alt={project.name} mb={4} objectFit="cover" height={{base: "", md: "80%"}} width={{base: "", md: "100%"}}/>
              <Text mb="4">{project.description}</Text>
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
                  isExternal
                >
                  {idioma === "pt" ? "Ver Projeto" : "View"}
                </Button>
                <Button
                  as={Link}
                  href={project.repository}
                  colorScheme="blue"
                  fontSize={{ base: 'sm', md: 'md' }}
                  minW="140px"
                  isExternal
                >
                  {idioma === "pt" ? "Ver Repositório" : "Repository"}
                </Button>
              </HStack>
            </Box>
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
