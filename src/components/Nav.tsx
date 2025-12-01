import {
  Flex,
  Heading,
  HStack,
  Button,
  IconButton,
  Box,
  useDisclosure,
  useMediaQuery,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { UserIcon, GlobeIcon, BracesIcon } from "lucide-react";

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
        onClose();
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

  const downloadCV = () => {

    const cvPath = idioma === "pt" ? "/Currículo Victor B. Dornelles.pdf" : "/Resume Victor B. Dornelles- Eng.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = cvPath.substring(cvPath.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <Button
            size="lg"
            onClick={() => downloadCV()}
            bg="linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)"
            color="white"
            leftIcon={<DownloadIcon />}
            borderRadius="full"
            px="8"
            py="4"
            fontWeight="700"
            fontSize="md"
            shadow="0 8px 32px rgba(0, 212, 255, 0.3)"
            transform="translateY(0)"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            border="2px solid transparent"
            _hover={{
              bg: "linear-gradient(135deg, #0099CC 0%, #0066AA 100%)",
              transform: "translateY(-3px)",
              shadow: "0 12px 40px rgba(0, 212, 255, 0.4)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
            _active={{
              transform: "translateY(-1px)",
              shadow: "0 6px 24px rgba(0, 212, 255, 0.3)",
            }}
          >
            {idioma === "pt" ? "Baixe meu currículo!" : "Download my resume!"}
          </Button>
          <ScrollLink to="projects" smooth={true} duration={400}>
            <Button
              size="lg"
              onClick={() => handleScrollToSection("projects")}
              variant="ghost"
              color="white"
              leftIcon={<Icon as={BracesIcon} w={5} h={5} />}
              borderRadius="xl"
              px="6"
              py="3"
              fontWeight="600"
              border="2px solid transparent"
              transition="all 0.3s ease"
              _hover={{
                color: "#00D4FF",
                bg: "rgba(0, 212, 255, 0.1)",
                border: "2px solid #00D4FF",
                transform: "translateY(-2px)",
                shadow: "0 6px 20px rgba(0, 212, 255, 0.2)",
              }}
              _active={{
                transform: "translateY(0)",
              }}
            >
              {idioma === "pt" ? "Projetos" : "Projects"}
            </Button>
          </ScrollLink>
          <ScrollLink to="About" smooth={true} duration={400}>
            <Button
              size="lg"
              onClick={() => handleScrollToSection("About")}
              variant="ghost"
              color="white"
              leftIcon={<Icon as={UserIcon} w={5} h={5} />}
              borderRadius="xl"
              px="6"
              py="3"
              fontWeight="600"
              border="2px solid transparent"
              transition="all 0.3s ease"
              _hover={{
                color: "#00D4FF",
                bg: "rgba(0, 212, 255, 0.1)",
                border: "2px solid #00D4FF",
                transform: "translateY(-2px)",
                shadow: "0 6px 20px rgba(0, 212, 255, 0.2)",
              }}
              _active={{
                transform: "translateY(0)",
              }}
            >
              {idioma === "pt" ? "Sobre" : "About"}
            </Button>
          </ScrollLink>
          <Button
            onClick={alternarIdioma}
            size="lg"
            variant="outline"
            color="white"
            leftIcon={<Icon as={GlobeIcon} w={5} h={5} />}
            borderColor="rgba(255, 255, 255, 0.3)"
            borderRadius="xl"
            px="6"
            py="3"
            fontWeight="600"
            transition="all 0.3s ease"
            _hover={{
              bg: "rgba(0, 212, 255, 0.1)",
              borderColor: "#00D4FF",
              color: "#00D4FF",
              transform: "translateY(-2px)",
              shadow: "0 6px 20px rgba(0, 212, 255, 0.2)",
            }}
            _active={{
              transform: "translateY(0)",
            }}
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
              borderRadius="xl"
              size="lg"
              transition="all 0.3s ease"
              _hover={{
                bg: "rgba(255, 255, 255, 0.1)",
                transform: "scale(1.05)",
              }}
              _active={{
                transform: "scale(0.95)",
              }}
            />
            {isOpen && (
              <Box
                pos="absolute"
                top="16"
                right="0"
                left="0"
                zIndex={10}
                bg="rgba(255, 255, 255, 0.98)"
                backdropFilter="blur(15px)"
                borderRadius="2xl"
                mx="4"
                shadow="0 25px 50px rgba(0, 0, 0, 0.15)"
                border="1px solid rgba(255, 255, 255, 0.3)"
                overflow="hidden"
              >
                <VStack spacing="0" align="stretch" p="6">
                  <ScrollLink to="projects" smooth={true} duration={400}>
                    <Button
                      size="lg"
                      onClick={onToggle}
                      leftIcon={<Icon as={BracesIcon} w={5} h={5} />}
                      color="gray.700"
                      variant="ghost"
                      borderRadius="xl"
                      px="6"
                      py="4"
                      h="14"
                      fontWeight="600"
                      w="full"
                      justifyContent="flex-start"
                      transition="all 0.3s ease"
                      _hover={{
                        bg: "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 153, 204, 0.1) 100%)",
                        color: "#00D4FF",
                        transform: "translateX(4px)",
                        shadow: "0 4px 12px rgba(0, 212, 255, 0.2)",
                      }}
                    >
                      {idioma === "pt" ? "Projetos" : "Projects"}
                    </Button>
                  </ScrollLink>

                  <ScrollLink to="About" smooth={true} duration={400}>
                    <Button
                      size="lg"
                      onClick={onToggle}
                      color="gray.700"
                      variant="ghost"
                      leftIcon={<Icon as={UserIcon} w={5} h={5} />}
                      borderRadius="xl"
                      px="6"
                      py="4"
                      h="14"
                      fontWeight="600"
                      w="full"
                      justifyContent="flex-start"
                      transition="all 0.3s ease"
                      _hover={{
                        bg: "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 153, 204, 0.1) 100%)",
                        color: "#00D4FF",
                        transform: "translateX(4px)",
                        shadow: "0 4px 12px rgba(0, 212, 255, 0.2)",
                      }}
                    >
                      {idioma === "pt" ? "Sobre" : "About"}
                    </Button>
                  </ScrollLink>

                  <Button
                    onClick={alternarIdioma}
                    size="lg"
                    color="gray.700"
                    variant="ghost"
                    leftIcon={<Icon as={GlobeIcon} w={5} h={5} />}
                    borderRadius="xl"
                    px="6"
                    py="4"
                    h="14"
                    fontWeight="600"
                    w="full"
                    justifyContent="flex-start"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 153, 204, 0.1) 100%)",
                      color: "#00D4FF",
                      transform: "translateX(4px)",
                      shadow: "0 4px 12px rgba(0, 212, 255, 0.2)",
                    }}
                  >
                    {idioma === "pt" ? "Português" : "English"}
                  </Button>

                  <Box h="4" />

                  <Button
                    onClick={() => downloadCV()}
                    bg="linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)"
                    color="white"
                    leftIcon={<DownloadIcon />}
                    borderRadius="2xl"
                    px="8"
                    py="6"
                    h="16"
                    fontWeight="700"
                    fontSize="md"
                    shadow="0 8px 32px rgba(0, 212, 255, 0.3)"
                    w="full"
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{
                      bg: "linear-gradient(135deg, #0099CC 0%, #0066AA 100%)",
                      transform: "translateY(-2px)",
                      shadow: "0 12px 40px rgba(0, 212, 255, 0.4)",
                    }}
                    _active={{
                      transform: "translateY(0)",
                      shadow: "0 8px 32px rgba(0, 212, 255, 0.3)",
                    }}
                  >
                    {idioma === "pt" ? "Baixar Currículo" : "Download Resume"}
                  </Button>
                </VStack>
              </Box>
            )}
          </Box>
        </>
      )}
    </Flex>
  );
}
