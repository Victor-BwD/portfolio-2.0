import { useContext } from 'react';
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

export const projectsInfo = [
  {
    id: 1,
    name: 'Projeto 1',
    image: 'https://i.imgur.com/gyxa19Q.png',
    description: 'Meu jogo ainda em desenvolvimento, Deathbound Castle.',
    descriptionEnglish: 'My game still in development, Deathbound Castle.',
    descriptionForProjectView: 'Comecei esse projeto por um curso de Unity que comprei, porém gostei tanto do resultado que decidi seguir com o jogo. O jogo é inspirado em Castlevania e Dark Souls, ainda vou colocar pontos como souls para up, loja e um chefe final. O jogo se chama Deathbound Castle, se passando em um castelo abandonado e cheio de diversos inimigos e perigos. É feito inteiramente na Unity com CSharp.',
    descriptionForProjectViewEnglish: 'I started this project from a Unity course I bought, but I liked the result so much that I decided to continue with the game. The game is inspired by Castlevania and Dark Souls. I still plan to add features like soul points for leveling up, a shop, and a final boss. The game is called Deathbound Castle, taking place in an abandoned castle full of different enemies and dangers. It is done entirely in Unity with CSharp.',
    source: '/project/1',
    projectSite: 'https://victor-bwd.itch.io/the-castle',
    repository: 'https://github.com/Victor-BwD/Game-2D-Metroidvania',
  },
  {
    id: 2,
    name: 'Projeto 2',
    image: 'https://i.imgur.com/68UnNQb.png',
    description: 'Uma cópia da calculadora do windows em React.',
    descriptionEnglish: 'A copy of windows calculator in React.',
    descriptionForProjectView: 'Projeto realizado como um desafio do curso de React que eu estava fazendo, a calculadora não está 100% fiel e falta algumas equações, mas está funcionando para os cálculos mais simples.',
    descriptionForProjectViewEnglish: 'Project completed as a challenge for the React course I was taking. The calculator is not 100% accurate and lacks some equations, but it is functional for basic calculations.',
    source: '/project/2',
    projectSite: 'https://calculator-react-js-ten.vercel.app',
    repository: 'https://github.com/Victor-BwD/Calculator-ReactJS',
  },
  {
    id: 3,
    name: 'Projeto 2',
    image: ComingSoonPhoto,
    description: 'Projeto em desenvolvimento.',
    descriptionEnglish: 'Project in development',
    descriptionForProjectView: 'dsfsd',
    descriptionForProjectViewEnglish: 'dasdasdsadasd',
    source: 'https://example.com/source2',
    projectSite: 'https://example.com/repository2',
    repository: 'https://example.com/repository2',
  },
];

export function Projects() {
  const { idioma } = useContext(LanguageContext);

  return (
    <ChakraProvider theme={theme}>
      <Flex alignItems="center" justifyContent="center" flexDirection="column" id="projects" pt="4">
        <Text as="b" fontSize="4xl" color="#E4F2FF" mb="2">
          {idioma === "pt" ? "Meus projetos" : "My Projects"}
        </Text>
        <Text as="b" fontSize="2xl" color="#E4F2FF" mb="2" p={{base: "12px", md: "0"}} textAlign="center">
          {idioma === "pt" ? "Alguns dos meus projetos que fiz no meu tempo livre" : "Some of the projects I did in my free time."}
        </Text>
      </Flex>
      <Box p={{base: "4", md: "12"}}>
        <Grid
          templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={4}
        >
          {projectsInfo.map((project) => (
            <Box
              key={project.id}
              p={4}
              pb={{base: "20px", md: "56px", lg: "56px", xl: "10px"}}
              borderWidth="1px"
              borderRadius="md"
              backgroundColor="white"
            >
              <Image src={project.image} alt={project.name} mb={4} objectFit="cover" height={{base: "", md: "80%"}} width={{base: "", md: "100%"}}/>
              <Text mb="4">{idioma === "pt" ? project.description : project.descriptionEnglish}</Text>
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
