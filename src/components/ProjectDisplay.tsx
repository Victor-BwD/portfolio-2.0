import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

interface ProjectDisplayProps {
  project: {
    id: number;
    name: string;
    image: string;
    description: string;
    descriptionEnglish: string,
    descriptionForProjectView: string;
    descriptionForProjectViewEnglish: string;
    source: string;
    projectSite: string;
    repository: string;
  };
}

export function ProjectDisplay({project } : ProjectDisplayProps) {
  const { idioma } = useContext(LanguageContext);
  

  return (
    <Box
  display="flex"
  justifyContent="center"
  flexDirection="column"
  alignItems="center"
  height="100vh"
  p="8"
>
  <Text as="b" textAlign="center" fontSize="5xl" mb="20px" color="#E4F2FF">
    {idioma === "pt" ? "Detalhes do Projeto" : "Project Details"}
  </Text>

  <Flex
    flexDirection={{ base: "column", md: "row" }}
    alignItems="center"
    justifyContent="center"
    mt="8"
    width={{ base: "100%", md: "800px", lg: "965px", xl: "1080px" }}
    maxWidth="100%"
  >
    <Text
      color="#E4F2FF"
      fontSize="lg"
      textAlign={{ base: "center", md: "left" }}
      order={{ base: "2", md: "1" }}
      mb={{ base: "8", md: "0" }}
      width={{ base: "100%", md: "auto" }}
      mr={{ base: "0", md: "12" }}
      mt={{base: "8", md: "0"}}
    >
      {idioma === "pt"
        ? project.descriptionForProjectView
        : project.descriptionForProjectViewEnglish}
    </Text>

    <Image
      src={project.image}
      alt="Imagem do projeto"
      width="100%"
      maxWidth="720px"
      order={{ base: "1", md: "2" }}
    />
  </Flex>

  <Flex flexDirection="row" justifyContent="center" mt="8">
    <Button as={Link} colorScheme="gray" mr="4" href={project.projectSite}>
      {idioma === "pt" ? <p>Rodar Projeto</p> : <p>Run Project</p>}
    </Button>
    <Button as={Link} colorScheme="gray" href={project.repository}>
    {idioma === "pt" ? <p>Código</p> : <p>Code</p>}
    </Button>
  </Flex>
</Box>
  )
}