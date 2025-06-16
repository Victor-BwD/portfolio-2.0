import {
  Box,
  Button,
  VStack,
  Text,
  Flex,
  Image,
  Container,
  Heading,
  SimpleGrid,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { CopyCheck, Mail, Coffee, Code, Heart } from "lucide-react";

const technologies = [
  {
    id: 1,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },

  {
    id: 2,
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    id: 3,
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    id: 4,
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    color: "#E0234E",
  },
  {
    id: 5,
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "#ED8B00",
  },
  {
    id: 6,
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#336791",
  },
  {
    id: 7,
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    id: 8,
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  {
    id: 9,
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    color: "#239120",
  },
  {
    id: 10,
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    color: "#6DB33F",
  },
];

export function About() {
  const { idioma } = useContext(LanguageContext);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("victor.bogdanowdornelles@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  return (
    <Box id="About" py={{ base: 16, md: 20 }}>
      <Container maxW="1200px">
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">
          {" "}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            p={{ base: 8, md: 12 }}
          >
            <VStack
              align={{ base: "center", md: "start" }}
              spacing={4}
              flex={1}
            >
              {" "}
              <Heading
                fontSize={{ base: "4xl", md: "5xl" }}
                color="#E4F2FF"
                fontWeight="bold"
                textAlign={{ base: "center", md: "left" }}
              >
                {idioma === "pt"
                  ? "Criando soluções digitais que fazem a diferença"
                  : "Building digital solutions that make a difference"}
              </Heading>{" "}
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="#BFDEFF"
                textAlign={{ base: "center", md: "left" }}
                maxW="500px"
              >
                {idioma === "pt"
                  ? "Com 3 anos de experiência em desenvolvimento web. Atualmente fullstack na Lighthouse, sempre em busca de novos desafios e projetos complexos."
                  : "With 3 years of experience web development. Currently fullstack at Lighthouse, always seeking new challenges and complex projects."}
              </Text>
              <HStack spacing={4} mt={4}>
                {" "}
                <Box
                  bg="rgba(74, 144, 226, 0.1)"
                  px={4}
                  py={2}
                  borderRadius="full"
                  border="1px solid rgba(74, 144, 226, 0.3)"
                >
                  <HStack spacing={2}>
                    <Code size={20} color="#4A90E2" />{" "}
                    <Text color="#E4F2FF" fontSize="sm" fontWeight="medium">
                      {idioma === "pt" ? "Fullstack" : "Fullstack"}
                    </Text>
                  </HStack>
                </Box>
                <Box
                  bg="rgba(74, 144, 226, 0.1)"
                  px={4}
                  py={2}
                  borderRadius="full"
                  border="1px solid rgba(74, 144, 226, 0.3)"
                >
                  <HStack spacing={2}>
                    <Heart size={20} color="#4A90E2" />
                    <Text color="#E4F2FF" fontSize="sm" fontWeight="medium">
                      {idioma === "pt" ? "Backend" : "Backend"}
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            </VStack>

            <Avatar
              size="2xl"
              src="https://github.com/Victor-BwD.png"
              border="4px solid rgba(255, 255, 255, 0.3)"
              ml={{ base: 0, md: 8 }}
              mt={{ base: 8, md: 0 }}
            />
          </Flex>
          <Box>
            {" "}
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              color="#E4F2FF"
              textAlign="center"
              mb={8}
              fontWeight="bold"
            >
              {idioma === "pt"
                ? "Tecnologias que domino"
                : "Technologies I’m skilled in"}
            </Heading>
            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
              spacing={6}
              maxW="900px"
              mx="auto"
            >
              {technologies.map((tech) => (
                <Flex
                  key={tech.id}
                  direction="column"
                  align="center"
                  bg="rgba(255, 255, 255, 0.1)"
                  borderRadius="xl"
                  p={6}
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-8px)",
                    bg: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  }}
                  cursor="pointer"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    boxSize="48px"
                    mb={3}
                    filter={
                      tech.name === "Next.js" || tech.name === "Unity"
                        ? "invert(1)"
                        : "none"
                    }
                  />{" "}
                  <Text
                    color="#E4F2FF"
                    fontSize="sm"
                    fontWeight="medium"
                    textAlign="center"
                  >
                    {tech.name}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
          <Flex
            bg="rgba(255, 255, 255, 0.1)"
            borderRadius="2xl"
            p={{ base: 8, md: 10 }}
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            backdropFilter="blur(20px)"
            border="1px solid rgba(255, 255, 255, 0.2)"
          >
            {" "}
            <VStack align={{ base: "center", md: "start" }} spacing={3}>
              <HStack spacing={3}>
                <Coffee size={24} color="#4A90E2" />
                <Heading fontSize="2xl" color="#E4F2FF">
                  {idioma === "pt" ? "Vamos bater um papo?" : "Let's talk?"}
                </Heading>
              </HStack>
              <Text
                color="#BFDEFF"
                fontSize="lg"
                textAlign={{ base: "center", md: "left" }}
              >
                {idioma === "pt"
                  ? "Sempre aberto para novos projetos e oportunidades!"
                  : "Always open to new projects and opportunities!"}
              </Text>
              <Text color="#BFDEFF" fontSize="md" fontFamily="mono">
                victor.bogdanowdornelles@gmail.com
              </Text>
            </VStack>{" "}
            <Button
              leftIcon={
                emailCopied ? <CopyCheck size={20} /> : <Mail size={20} />
              }
              size="lg"
              colorScheme="blue"
              _hover={{
                transform: "translateY(-2px)",
              }}
              onClick={handleCopyEmail}
              mt={{ base: 6, md: 0 }}
              fontWeight="bold"
              px={8}
            >
              {emailCopied
                ? idioma === "pt"
                  ? "E-mail Copiado!"
                  : "Email Copied!"
                : idioma === "pt"
                ? "Copiar E-mail"
                : "Copy Email"}
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
