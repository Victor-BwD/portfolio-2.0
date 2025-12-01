import {
  Box,
  Text,
  Heading,
  Flex,
  HStack,
  extendTheme,
  ChakraProvider,
  Icon,
  keyframes,
} from "@chakra-ui/react";
import { GithubIcon, LinkedinIcon, ChevronDown } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useTypewriter } from "../hooks/useTypewriter";

const theme = extendTheme({
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px (novo breakpoint)
  },
});

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export function Apresentation() {
  const { idioma } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(true);

  const fullstackText = useTypewriter("Fullstack", 150, 500);
  const developerText = useTypewriter(
    "Developer",
    150,
    fullstackText.isComplete ? 300 : 0
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsVisible(scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex
        height="95vh"
        alignItems="center"
        justifyContent="center"
        ml="8"
        p="2"
        mr="8"
      >
        <Box>
          <Box>
            <Text
              fontSize={{ base: "xl", md: "3xl" }}
              ml={{ base: "1", md: "2" }}
              color="#E4F2FF"
              as="b"
            >
              Victor Bogdanow Dornelles
            </Text>
            <HStack
              spacing={{ base: "4", md: "6" }}
              alignItems="center"
              height="106px"
            >
              {" "}
              <Heading
                as="h1"
                fontSize={{ base: "4xl", sm: "5xl", md: "8xl", lg: "9xl" }}
                color="#E4F2FF"
                height={{ base: "36px", sm: "42px", md: "90px", lg: "152px" }}
                position="relative"
              >
                {fullstackText.displayText}
                {!fullstackText.isComplete && fullstackText.showCursor && (
                  <Box
                    as="span"
                    animation={`${bounce} 1s infinite`}
                    color="#4A90E2"
                    ml="2px"
                  >
                    |
                  </Box>
                )}
              </Heading>
              <HStack spacing="4" alignItems="center" pt="7">
                <Box backgroundColor="white" rounded="10px">
                  <a
                    href="https://github.com/Victor-BwD"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      as={GithubIcon}
                      boxSize={{ base: "42px", md: "68px" }}
                      color="black"
                      mt="2"
                      _hover={{ color: "blue.500" }}
                    />
                  </a>
                </Box>
                <Box backgroundColor="white" rounded="10px">
                  <a
                    href="https://www.linkedin.com/in/victorbwd/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      as={LinkedinIcon}
                      boxSize={{ base: "42px", md: "68px" }}
                      color="black"
                      mt="2"
                      _hover={{ color: "blue.500" }}
                    />
                  </a>
                </Box>
              </HStack>
            </HStack>{" "}
            <Heading
              as="h1"
              pr={{ base: "42px", md: "0", lg: "0", xl: "0" }}
              ml={{ base: "0px", md: "15%", lg: "15%", xl: "15%" }}
              fontSize={{ base: "4xl", sm: "5xl", md: "8xl", lg: "9xl" }}
              color="#E4F2FF"
              textAlign={{ base: "left", md: "left" }}
              mb={{ base: "2", md: "4", lg: "8" }}
              px={{ base: "4", md: "0" }}
              position="relative"
            >
              {developerText.displayText}
              {!developerText.isComplete && developerText.showCursor && (
                <Box
                  as="span"
                  animation={`${bounce} 1s infinite`}
                  color="#4A90E2"
                  ml="2px"
                >
                  |
                </Box>
              )}
            </Heading>{" "}
            <Text
              ml={{ base: "0", md: "20%", lg: "30%", xl: "40%" }}
              fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
              color="#BFDEFF"
              textAlign={{ base: "left", md: "left" }}
              mb={{ base: "8", md: "12", lg: "16" }}
              px={{ base: "4", md: "0" }}
            >
              {idioma === "pt"
                ? "Com 4 anos de experiência em desenvolvimento de software, trabalho com foco em resultados e prezando pela qualidade da entrega."
                : "With 4 years of experience in software development, I work with a focus on delivering results while prioritizing the quality of delivery."}
            </Text>{" "}
            <Flex
              justifyContent="center"
              display={{ base: "flex", md: "none" }}
              mt="4"
              opacity={isVisible ? 0.8 : 0}
              transform={isVisible ? "translateY(0)" : "translateY(20px)"}
              transition="all 0.5s ease-in-out"
              pointerEvents={isVisible ? "auto" : "none"}
            >
              <Icon
                as={ChevronDown}
                boxSize="32px"
                color="#E4F2FF"
                animation={isVisible ? `${bounce} 2s infinite` : "none"}
              />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
