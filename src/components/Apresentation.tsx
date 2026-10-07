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
          {[
            { name: "GitHub", href: "https://github.com/Victor-BwD", icon: <Github size={20} /> },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/victorbwd/", icon: <Linkedin size={20} /> },
          ].map(social => (
            <Button key={social.name} as={Link} href={social.href} isExternal
              leftIcon={<Box as="span" display="inline-flex" color="#78B7FF">{social.icon}</Box>}
              flex={1} minW={0} minH="48px" px={4} fontSize="sm" fontWeight="semibold"
              borderRadius="md" bg="#122640" color="#F1F6FF" border="1px solid #496B94"
              transition="background-color 0.2s, border-color 0.2s, box-shadow 0.2s"
              _hover={{ bg: "#203C5E", borderColor: "#78B7FF", textDecoration: "none" }}
              _active={{ bg: "#1B304C" }}
              _focusVisible={{ outline: "2px solid #78B7FF", outlineOffset: "3px", boxShadow: "none" }}
              sx={{ "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}>
              {social.name}
            </Button>
          ))}
        </HStack>
      </Flex>
      <Text mt={12} pt={5} borderTop="1px solid #23344D" color="#91A9CA" fontSize="sm">
        Java / Go / Spring Boot / PostgreSQL
      </Text>
    </Container>
  );
}
