import {
  Box,
  Container,
  Flex,
  Text,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export function Footer() {
  const { idioma } = useContext(LanguageContext);

  return (
    <Box
      as="footer"
      bg="rgba(255, 255, 255, 0.02)"
      borderTop="1px solid rgba(255, 255, 255, 0.1)"
      py={{ base: 8, md: 12 }}
      mt="auto"
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={6}
        >
          {" "}
          <HStack spacing={6}>
            <Link
              href="https://github.com/Victor-BwD"
              isExternal
              _hover={{ transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <Icon
                as={Github}
                boxSize={6}
                color="#BFDEFF"
                _hover={{ color: "#E4F2FF" }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/victorbwd/"
              isExternal
              _hover={{ transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <Icon
                as={Linkedin}
                boxSize={6}
                color="#BFDEFF"
                _hover={{ color: "#E4F2FF" }}
              />
            </Link>{" "}
            <Link
              href="https://www.instagram.com/victor_bwd/"
              isExternal
              _hover={{ transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              {" "}
              <Icon
                as={FaInstagram as any}
                boxSize={6}
                color="#BFDEFF"
                _hover={{ color: "#E4F2FF" }}
              />
            </Link>
            <Link
              href="https://www.facebook.com/victor.bogdanowdornelles"
              isExternal
              _hover={{ transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <Icon
                as={FaFacebook as any}
                boxSize={6}
                color="#BFDEFF"
                _hover={{ color: "#E4F2FF" }}
              />
            </Link>
            <Link
              href="mailto:victor.bogdanow@gmail.com"
              _hover={{ transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <Icon
                as={Mail}
                boxSize={6}
                color="#BFDEFF"
                _hover={{ color: "#E4F2FF" }}
              />
            </Link>
          </HStack>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={{ base: 2, md: 6 }}
            textAlign="center"
          >
            <HStack spacing={2} color="#BFDEFF">
              <Icon as={MapPin} boxSize={4} />
              <Text fontSize="sm">{idioma === "pt" ? "Brasil" : "Brazil"}</Text>
            </HStack>

            <Text fontSize="sm" color="#BFDEFF">
              © 2025 Victor Bogdanow Dornelles
            </Text>
          </Flex>
        </Flex>

        <Text
          textAlign="center"
          mt={6}
          fontSize="sm"
          color="rgba(191, 222, 255, 0.7)"
          fontStyle="italic"
        >
          {idioma === "pt"
            ? "Desenvolvido com muito ☕"
            : "Built with lots of ☕"}
        </Text>
      </Container>
    </Box>
  );
}
