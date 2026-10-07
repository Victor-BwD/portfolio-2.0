import { Box, Button, Container, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function Apresentation() {
  const { idioma } = useContext(LanguageContext);
  const pt = idioma === "pt";
  return (
    <Container as="section" maxW="1200px" px={{ base: 5, md: 8 }} py={{ base: 16, md: 24 }}>
      <Text color="#91A9CA" fontSize="xs" letterSpacing="0.2em" textTransform="uppercase" mb={6}>
        Victor Bogdanow Dornelles
      </Text>
      <Heading as="h1" fontSize={{ base: "clamp(3rem, 13vw, 6rem)", md: "clamp(6rem, 10vw, 9rem)" }}
        lineHeight="0.95" letterSpacing="-0.065em" fontWeight="800" color="#F1F6FF">
        <Box as="span" display="block">Back-end</Box>
        <Box as="span" display="block" color="#78B7FF">Developer<Box as="span" color="#F1F6FF">.</Box></Box>
      </Heading>
      <Flex direction={{ base: "column", lg: "row" }} justify="space-between" gap={8} mt={{ base: 8, md: 12 }}>
        <Box maxW="560px">
          <Text color="#B6C7DF" fontSize={{ base: "lg", md: "xl" }} lineHeight="1.8">
            {pt
              ? "Desenvolvo APIs e sistemas com foco em regras de negócio, dados e performance. Transformo problemas em soluções que funcionam nos bastidores."
              : "I develop APIs and systems focused on business logic, data and performance. Turning problems into solutions that work behind the scenes."}
          </Text>
          <Flex direction={{ base: "column", sm: "row" }} gap={3} mt={7}>
            <Button as="a" href="#projects" rightIcon={<ArrowDown size={18} />} size="lg" bg="#78B7FF" color="#071327"
              _hover={{ bg: "#A3CFFF" }}>{pt ? "Ver projetos" : "View projects"}</Button>
            <Button as="a" href="#contact" rightIcon={<ArrowUpRight size={18} />} size="lg" variant="outline"
              borderColor="#354963" color="#F1F6FF" _hover={{ bg: "whiteAlpha.100" }}>{pt ? "Entrar em contato" : "Get in touch"}</Button>
          </Flex>
        </Box>
        <HStack spacing={3} w={{ base: "full", lg: "auto" }} maxW={{ base: "360px", lg: "none" }}
          alignSelf={{ base: "start", lg: "end" }}>
          <Button as={Link} href="https://github.com/Victor-BwD" isExternal leftIcon={<Github size={22} />}
            flex={1} minW={0} minH="52px" px={4} fontSize="sm" bg="#F1F6FF" color="#0A1628"
            border="1px solid #F1F6FF" _hover={{ bg: "#D5E7FF", textDecoration: "none" }}>
            GitHub
          </Button>
          <Button as={Link} href="https://www.linkedin.com/in/victorbwd/" isExternal leftIcon={<Linkedin size={22} />}
            flex={1} minW={0} minH="52px" px={4} fontSize="sm" bg="#0A66C2" color="white"
            border="1px solid #4097EE" _hover={{ bg: "#0855A3", textDecoration: "none" }}>
            LinkedIn
          </Button>
        </HStack>
      </Flex>
      <Text mt={12} pt={5} borderTop="1px solid #23344D" color="#91A9CA" fontSize="sm">
        Java / Spring Boot / PostgreSQL / Node.js
      </Text>
    </Container>
  );
}
