import {
  Flex,
  Heading,
  HStack,
  Button,
  IconButton,
  Box,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

export function Nav() {
  const { idioma, alternarIdioma } = useContext(LanguageContext);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isNotMobile] = useMediaQuery("(min-width: 768px)");

  const navigation = useNavigate();
  const handleScrollToSection = (sectionId: string) => {
    navigation(`/#${sectionId}`);

    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: 400,
      offset: -100,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (isNotMobile) {
        onClose(); // Fecha os botões quando a tela é redimensionada para uma resolução maior
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNotMobile, onClose]);

  useEffect(() => {
    const sectionId = window.location.hash.substr(1);
    if (sectionId === "projects" || sectionId === "About") {
      handleScrollToSection(sectionId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex justify="space-between" align="center" pt="4">
      <Heading
        as="h1"
        size="lg"
        ml={{ base: "6", md: "12" }}
        pt="2"
        color="#E4F2FF"
      >
        {idioma === "pt" ? "< Portfólio />" : "< Portfolio />"}
      </Heading>

      {isNotMobile ? (
        <HStack gap="4" mr={{ base: "8", md: "12" }} mt="2">
          <ScrollLink to="projects" smooth={true} duration={400}>
            <Button
              size="lg"
              onClick={() => handleScrollToSection("projects")}
              _hover={{ color: "blue.700" }}
            >
              {idioma === "pt" ? "Projetos" : "Projects"}
            </Button>
          </ScrollLink>
          <ScrollLink to="About" smooth={true} duration={400}>
            <Button
              size="lg"
              onClick={() => handleScrollToSection("About")}
              _hover={{ color: "blue.700" }}
            >
              {idioma === "pt" ? "Sobre" : "About"}
            </Button>
          </ScrollLink>
          <Button
            colorScheme="gray"
            onClick={alternarIdioma}
            size="lg"
            _hover={{ color: "blue.700" }}
          >
            {idioma === "pt" ? "EN" : "PT"}
          </Button>
        </HStack>
      ) : (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            mr={{ base: "6", md: "12" }}
          >
            <IconButton
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="2xl" />}
              onClick={onToggle}
              color="white"
              variant="ghost"
              display={{ base: "flex", md: "none" }}
              position="relative"
            />
            {isOpen && (
              <Box
                p="4"
                color="black"
                pos="absolute"
                top="16"
                right="0"
                left="0"
                zIndex={10}
              >
                <HStack spacing="4" align="center" justifyContent="center">
                  <ScrollLink to="projects" smooth={true} duration={400}>
                    <Button size="lg" onClick={onToggle} color="black">
                      {idioma === "pt" ? "Projetos" : "Projects"}
                    </Button>
                  </ScrollLink>
                  <ScrollLink to="About" smooth={true} duration={400}>
                    <Button size="lg" onClick={onToggle} color="black">
                      {idioma === "pt" ? "Sobre" : "About"}
                    </Button>
                  </ScrollLink>
                  <Button
                    colorScheme="gray"
                    onClick={alternarIdioma}
                    size="lg"
                    color="black"
                  >
                    {idioma === "pt" ? "EN" : "PT"}
                  </Button>
                </HStack>
              </Box>
            )}
          </Box>
        </>
      )}
    </Flex>
  );
}
