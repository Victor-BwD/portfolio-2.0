import { useContext } from "react";
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
  Flex,
} from "@chakra-ui/react";
import { LanguageContext } from "../context/LanguageContext";
import ComingSoonPhoto from "../assets/comingsoon.jpg";

const theme = extendTheme({
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
  },
});

export const projectsInfo = [
  {
    id: 1,
    name: "Projeto 1",
    image: "https://i.imgur.com/gyxa19Q.png",
    images: [
      "https://i.imgur.com/gyxa19Q.png",
      "https://imgur.com/1qanaID.png",
      "https://imgur.com/vOIFQFq.png",
    ],
    description: "Meu jogo ainda em desenvolvimento, Deathbound Castle. Fortemente inspirado em Castlevania e Dark Souls.",
    descriptionEnglish: "My game still in development, Deathbound Castle. Heavily inspired by Castlevania and Dark Souls.",
    descriptionForProjectView:
      "Comecei esse projeto por um curso de Unity que comprei, porém gostei tanto do resultado que decidi seguir com o jogo. O jogo se chama Deathbound Castle, se passando em um castelo abandonado cheio de inimigos e perigos diferentes. É todo feito em Unity com CSharp. O jogo é inspirado em Castlevania e Dark Souls, o jogo conta com sistema de almas para upgrade de itens e personagem, diversos inimigos e um chefe final. A versão final ainda vai ser lançada em Janeiro de 2025.",
    descriptionForProjectViewEnglish:
      "I started this project for a Unity course I bought, but I liked the result so much that I decided to continue with the game. The game is called Deathbound Castle, set in an abandoned castle full of different enemies and dangers. It is entirely made in Unity with CSharp. The game is inspired by Castlevania and Dark Souls, the game features a soul system for upgrading items and characters, various enemies, and a final boss. The final version will still be released in January 2025.",
    source: "/project/1",
    projectSite: "https://victor-bwd.itch.io/the-castle",
    repository: "https://github.com/Victor-BwD/Game-2D-Metroidvania",
  },
  {
    id: 2,
    name: "Projeto 2",
    image: "https://i.imgur.com/U6H7N4r.png",
    description: "API com lógica de categorização automática feita em Java com Spring Boot, com versionamento de banco de dados e autenticação JWT.",
    descriptionEnglish: "API with automatic categorization logic made in Java with Spring Boot, with database versioning and JWT authentication.",
    descriptionForProjectView:
      "Projeto feito para controlar melhor minhas finanças pessoais. A API foi feita em Java com Spring Boot, utilizando banco de dados relacional PostgreSQL e versionamento de banco com Flyway. A autenticação é feita com JWT para maior segurança. A lógica de categorização automática utiliza palavras-chaves, registradas pelo próprio usuário, para categorizar as transações financeiras automaticamente ao serem cadastradas. Infelizmente, a parte do front-end ainda está em desenvolvimento.",
    descriptionForProjectViewEnglish:
      "Project made to better control my personal finances. The API was made in Java with Spring Boot, using a relational PostgreSQL database and database versioning with Flyway. Authentication is done with JWT for greater security. The automatic categorization logic uses keywords, registered by the user, to automatically categorize financial transactions when they are registered. Unfortunately, the front-end part is still under development.",
    source: "/project/2",
    projectSite: "#",
    repository: "https://github.com/Victor-BwD/smart-expenses-api",
  },
  {
    id: 3,
    name: "Projeto 2",
    image: "https://i.imgur.com/GrHWDC1.png",
    description: "Projeto do desafio Otimização 1BRC. Onde o objetivo é otimizar a leitura de 1 bilhão de linhas e organiza-las.",
    descriptionEnglish: "Project of the 1BRC Optimization challenge. Where the objective is to optimize the reading of 1 billion lines and organize them.",
    descriptionForProjectView: "Projeto feito para o desafio Otimização 1BRC, onde o objetivo é otimizar a leitura de 1 bilhão de linhas e organiza-las. O projeto foi feito em Java, utilizando técnicas de manipulação de arquivos, estruturas de dados eficientes trabalhando na casa dos bytes e algoritmos otimizados para lidar com grandes volumes de dados. O foco principal foi reduzir o tempo de processamento e o uso de memória, garantindo que o sistema pudesse lidar com a enorme quantidade de informações de forma eficaz. O meu tempo atualmente gira em torno da casa dos 3 minutos, testado em um HD 7200RPM.",
    descriptionForProjectViewEnglish: "Project made for the 1BRC Optimization challenge, where the objective is to optimize the reading of 1 billion lines and organize them. The project was made in Java, using file manipulation techniques, efficient data structures working with bytes, and optimized algorithms to handle large volumes of data. The main focus was to reduce processing time and memory usage, ensuring that the system could effectively handle the enormous amount of information. My current time is around 3 minutes, tested on a 7200RPM HDD.",
    source: "/project/3",
    projectSite: "#",
    repository: "https://github.com/Victor-BwD/1BRC_otimization",
  },
];

export function Projects() {
  const { idioma } = useContext(LanguageContext);
  return (
    <ChakraProvider theme={theme}>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        id="projects"
        pt="4"
        w="100%"
        maxW="100vw"
        overflow="hidden"
      >
        {" "}
        <Text
          as="b"
          fontSize={{ base: "2xl", md: "4xl" }}
          color="#E4F2FF"
          mb="2"
          textAlign="center"
          px={{ base: "4", md: "0" }}
        >
          {idioma === "pt" ? "Meus projetos" : "My Projects"}
        </Text>
        <Text
          as="b"
          fontSize={{ base: "lg", md: "2xl" }}
          color="#E4F2FF"
          mb="2"
          p={{ base: "12px", md: "0" }}
          textAlign="center"
          maxW={{ base: "90%", md: "100%" }}
        >
          {idioma === "pt"
            ? "Alguns dos meus projetos que fiz no meu tempo livre"
            : "Some of the projects I did in my free time."}
        </Text>
      </Flex>{" "}
      <Box
        p={{ base: "16px", md: "12" }}
        w="100%"
        maxW="100vw"
        overflow="hidden"
      >
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 3, md: 4 }}
          alignItems="stretch"
          w="100%"
        >
          {" "}
          {projectsInfo.map((project) => (
            <Flex
              key={project.id}
              direction="column"
              p={{ base: 3, md: 4 }}
              borderWidth="1px"
              borderRadius="md"
              backgroundColor="white"
              height="100%"
              w="100%"
              maxW="100%"
              transition="all 0.3s ease"
              cursor="pointer"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                borderColor: "#4A90E2",
              }}
            >
              {" "}
              <Image
                src={project.image}
                alt={project.name}
                mb={4}
                objectFit="cover"
                height={{ base: "200px", md: "250px", lg: "280px" }}
                width="100%"
                borderRadius="md"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.02)",
                }}
              />{" "}
              <Text
                mb="4"
                flex="1"
                textAlign="left"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight={{ base: "1.4", md: "1.5" }}
              >
                {idioma === "pt"
                  ? project.description
                  : project.descriptionEnglish}
              </Text>
              <HStack
                spacing={{ base: "8px", md: "20px" }}
                justifyContent="center"
                mt="auto"
                w="100%"
                flexWrap={{ base: "wrap", md: "nowrap" }}
              >
                {" "}
                <Button
                  as={Link}
                  href={project.source}
                  colorScheme="blue"
                  fontSize={{ base: "xs", md: "md" }}
                  minW={{ base: "120px", md: "140px" }}
                  size={{ base: "sm", md: "md" }}
                  flex={{ base: "1", md: "none" }}
                  maxW={{ base: "none", md: "140px" }}
                  transition="all 0.2s ease"
                  _hover={{
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 12px rgba(66, 153, 225, 0.3)",
                  }}
                >
                  {idioma === "pt" ? "Ver detalhes" : "Details"}
                </Button>
                <Button
                  as={Link}
                  href={project.repository}
                  colorScheme="blue"
                  fontSize={{ base: "xs", md: "md" }}
                  minW={{ base: "120px", md: "140px" }}
                  size={{ base: "sm", md: "md" }}
                  isExternal
                  flex={{ base: "1", md: "none" }}
                  maxW={{ base: "none", md: "140px" }}
                  transition="all 0.2s ease"
                  _hover={{
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 12px rgba(66, 153, 225, 0.3)",
                  }}
                >
                  {idioma === "pt" ? "Ver Repositório" : "Repository"}
                </Button>
              </HStack>
            </Flex>
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
