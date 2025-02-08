import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

interface ProjectDisplayProps {
  project: {
    id: number;
    name: string;
    image: string;
    description: string;
    descriptionEnglish: string;
    descriptionForProjectView: string;
    descriptionForProjectViewEnglish: string;
    source: string;
    projectSite: string;
    repository: string;
  };
}

export function ProjectDisplay({ project }: ProjectDisplayProps) {
  const { idioma } = useContext(LanguageContext);

  return (
    <Box
      p={{ base: 6, md: 10 }}
      textAlign="center"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        as="b"
        fontSize={{ base: "2xl", md: "4xl" }}
        mb={{ base: 6, md: 8 }}
        color="#E4F2FF"
      >
        {idioma === "pt" ? "Detalhes do Projeto" : "Project Details"}
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{ base: 6, md: 12 }}
        maxW="1200px"
        w="full"
        px={{ base: 4, md: 8 }}
      >
        <Text
          color="#E4F2FF"
          fontSize={{ base: "md", md: "lg" }}
          maxW="600px"
          textAlign="justify"
          lineHeight="taller"
        >
          {idioma === "pt"
            ? project.descriptionForProjectView
            : project.descriptionForProjectViewEnglish}
        </Text>

        <Image
          src={project.image}
          alt="Imagem do projeto"
          w={{ base: "100%", md: "600px" }}
          borderRadius="lg"
          shadow="2xl"
        />
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        gap={4}
        mt={10}
      >
        <Button
          as={Link}
          href={project.projectSite}
          colorScheme="blue"
          size="lg"
          px={8}
          isExternal
        >
          {idioma === "pt" ? "Rodar Projeto" : "Run Project"}
        </Button>
        <Button
          as={Link}
          href={project.repository}
          colorScheme="teal"
          size="lg"
          px={8}
          isExternal
        >
          {idioma === "pt" ? "Código" : "Code"}
        </Button>
      </Flex>
    </Box>
  );
}
