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
    description: "Meu jogo ainda em desenvolvimento, Deathbound Castle.",
    descriptionEnglish: "My game still in development, Deathbound Castle.",
    descriptionForProjectView:
      "Comecei esse projeto por um curso de Unity que comprei, porém gostei tanto do resultado que decidi seguir com o jogo. O jogo é inspirado em Castlevania e Dark Souls, ainda vou colocar pontos como souls para up, loja e um chefe final. O jogo se chama Deathbound Castle, se passando em um castelo abandonado e cheio de diversos perigos. É feito inteiramente na Unity com CSharp.",
    descriptionForProjectViewEnglish:
      "I started this project from a Unity course I bought, but I liked the result so much that I decided to continue with the game. The game is inspired by Castlevania and Dark Souls. I still plan to add features like soul points for leveling up, a shop, and a final boss. The game is called Deathbound Castle, taking place in an abandoned castle full of different enemies and dangers. It is done entirely in Unity with CSharp.",
    source: "/project/1",
    projectSite: "https://victor-bwd.itch.io/the-castle",
    repository: "https://github.com/Victor-BwD/Game-2D-Metroidvania",
  },
  {
    id: 2,
    name: "Projeto 2",
    image: "https://i.imgur.com/igcrBRx.png",
    description: "Site feito em React utilizando typescript.",
    descriptionEnglish: "Website built in React using TypeScript.",
    descriptionForProjectView:
      "Projeto feito para aprendizado de React. O site é responsivo para todos os dispositivos e estilizado com ChakraUI. Tive a ideia de fazer um site de um jogo que gosto muito, Baldurs Gate 3, misturando algumas referências e gosto pessoais. Embora seja um desenvolvedor voltado para back-end, gosto de aprender e fazer projetos front-end para melhorar minhas habilidades e conhecimentos.",
    descriptionForProjectViewEnglish:
      "Project made for learning React. The website is responsive for all devices and styled with ChakraUI. I had the idea of creating a website for a game I really like, Baldurs Gate 3, mixing some references and personal tastes. Although Im a backend-oriented developer, I enjoy learning and working on frontend projects to enhance my skills and knowledge.",
    source: "/project/2",
    projectSite: "https://baldurs-gate-site.vercel.app/",
    repository: "https://github.com/Victor-BwD/baldurs-gate-site",
  },
  {
    id: 3,
    name: "Projeto 2",
    image: ComingSoonPhoto,
    description: "Projeto em desenvolvimento.",
    descriptionEnglish: "Project in development",
    descriptionForProjectView: "",
    descriptionForProjectViewEnglish: "",
    source: "https://example.com/source2",
    projectSite: "https://example.com/repository2",
    repository: "https://example.com/repository2",
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
                <Button
                  as={Link}
                  href={project.source}
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
                  {idioma === "pt" ? "Ver Projeto" : "View"}
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
