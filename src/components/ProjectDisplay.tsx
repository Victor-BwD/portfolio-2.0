import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  Badge,
  Icon,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ProjectDisplayProps {
  project: {
    id: number;
    name: string;
    image: string;
    images?: string[];
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    if (projectImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === projectImages.length - 1 ? 0 : prev + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentImageIndex, projectImages.length]);

  const getTechnologies = () => {
    const desc = project.descriptionForProjectView.toLowerCase();
    const techs = [];

    if (desc.includes("react")) techs.push("React");
    if (desc.includes("unity")) techs.push("Unity");
    if (desc.includes("csharp") || desc.includes("c#")) techs.push("C#");
    if (desc.includes("typescript")) techs.push("TypeScript");
    if (desc.includes("chakra")) techs.push("Chakra UI");
    if (desc.includes("javascript")) techs.push("JavaScript");
    if (desc.includes("node")) techs.push("Node.js");
    if (desc.includes("nest")) techs.push("NestJS");
    if (desc.includes("java")) techs.push("Java");
    if (desc.includes("postgresql")) techs.push("PostgreSQL");
    if (desc.includes("mongodb")) techs.push("MongoDB");
    if (desc.includes("docker")) techs.push("Docker");
    if (desc.includes("git")) techs.push("Git");
    if (desc.includes("springboot")) techs.push("Springboot");

    return techs.length > 0 ? techs : ["Web Development"];
  };

  const technologies = getTechnologies();

  return (
    <Box minH="100vh" bg="#0B214D" position="relative">
      <Button
        leftIcon={<Icon as={ArrowLeft} />}
        position="absolute"
        top={{ base: 4, md: 8 }}
        left={{ base: 4, md: 8 }}
        variant="ghost"
        color="#E4F2FF"
        size={{ base: "sm", md: "md" }}
        _hover={{
          bg: "rgba(255,255,255,0.1)",
          transform: "translateX(-2px)",
        }}
        transition="all 0.3s ease"
        onClick={() => window.history.back()}
        zIndex={10}
      >
        {idioma === "pt" ? "Voltar" : "Back"}
      </Button>

      <Box
        p={{ base: 6, md: 10 }}
        pt={{ base: 16, md: 20 }}
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
        <Flex wrap="wrap" gap={3} mb={8} justify="center">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              colorScheme="blue"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
              transition="all 0.2s ease"
              _hover={{ transform: "scale(1.05)" }}
            >
              {tech}
            </Badge>
          ))}
        </Flex>
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
            color="#BFDEFF"
            fontSize={{ base: "md", md: "lg" }}
            maxW="600px"
            textAlign="justify"
            lineHeight="taller"
            transition="all 0.3s ease"
            _hover={{ color: "#E4F2FF" }}
          >
            {idioma === "pt"
              ? project.descriptionForProjectView
              : project.descriptionForProjectViewEnglish}
          </Text>{" "}
          <Box position="relative" w={{ base: "100%", md: "600px" }}>
            {/* Imagem principal */}
            <Image
              src={projectImages[currentImageIndex]}
              alt={`Imagem do projeto ${currentImageIndex + 1}`}
              w="100%"
              h={{ base: "200px", md: "320px" }}
              objectFit="cover"
              borderRadius="lg"
              shadow="2xl"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.02)",
                shadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            />

            {projectImages.length > 1 && (
              <>
                <IconButton
                  aria-label="Imagem anterior"
                  icon={<Icon as={ChevronLeft} />}
                  position="absolute"
                  left={2}
                  top="50%"
                  transform="translateY(-50%)"
                  bg="rgba(0,0,0,0.6)"
                  color="white"
                  size="md"
                  borderRadius="full"
                  _hover={{
                    bg: "rgba(0,0,0,0.8)",
                    transform: "translateY(-50%) scale(1.1)",
                  }}
                  onClick={prevImage}
                  zIndex={2}
                />

                <IconButton
                  aria-label="Próxima imagem"
                  icon={<Icon as={ChevronRight} />}
                  position="absolute"
                  right={2}
                  top="50%"
                  transform="translateY(-50%)"
                  bg="rgba(0,0,0,0.6)"
                  color="white"
                  size="md"
                  borderRadius="full"
                  _hover={{
                    bg: "rgba(0,0,0,0.8)",
                    transform: "translateY(-50%) scale(1.1)",
                  }}
                  onClick={nextImage}
                  zIndex={2}
                />
              </>
            )}

            {projectImages.length > 1 && (
              <HStack
                position="absolute"
                bottom={3}
                left="50%"
                transform="translateX(-50%)"
                spacing={2}
                zIndex={2}
              >
                {projectImages.map((_, index) => (
                  <Box
                    key={index}
                    w={3}
                    h={3}
                    borderRadius="full"
                    bg={
                      index === currentImageIndex
                        ? "#4A90E2"
                        : "rgba(255,255,255,0.5)"
                    }
                    cursor="pointer"
                    transition="all 0.2s ease"
                    _hover={{
                      bg:
                        index === currentImageIndex
                          ? "#357ABD"
                          : "rgba(255,255,255,0.8)",
                      transform: "scale(1.2)",
                    }}
                    onClick={() => goToImage(index)}
                  />
                ))}
              </HStack>
            )}

            {projectImages.length > 1 && (
              <Box
                position="absolute"
                top={3}
                right={3}
                bg="rgba(0,0,0,0.6)"
                color="white"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                zIndex={2}
              >
                {currentImageIndex + 1} / {projectImages.length}
              </Box>
            )}
          </Box>
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
            leftIcon={<Icon as={ExternalLink} />}
            bg="linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)"
            color="white"
            size="lg"
            px={8}
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(74, 144, 226, 0.4)",
              bg: "linear-gradient(135deg, #357ABD 0%, #2C5AA0 100%)",
            }}
            _active={{
              transform: "translateY(0px)",
            }}
          >
            {idioma === "pt" ? "Ver Demo" : "View Demo"}
          </Button>
          <Button
            as={Link}
            href={project.repository}
            leftIcon={<Icon as={Github} />}
            variant="outline"
            borderColor="#4A90E2"
            color="#E4F2FF"
            size="lg"
            px={8}
            isExternal
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-2px)",
              bg: "rgba(74, 144, 226, 0.1)",
              borderColor: "#357ABD",
              boxShadow: "0 8px 25px rgba(74, 144, 226, 0.3)",
            }}
            _active={{
              transform: "translateY(0px)",
            }}
          >
            {idioma === "pt" ? "Código" : "Code"}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
