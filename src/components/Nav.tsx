import { Box, Button, Container, Flex, HStack, IconButton, Link, useDisclosure, VStack } from "@chakra-ui/react";
import { Download, Menu, X } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function Nav() {
  const { idioma, alternarIdioma } = useContext(LanguageContext);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const pt = idioma === "pt";
  const sections = [
    { href: "#experience", label: pt ? "Experiência" : "Experience" },
    { href: "#projects", label: pt ? "Projetos" : "Projects" },
    { href: "#About", label: pt ? "Sobre" : "About" },
    { href: "#contact", label: pt ? "Contato" : "Contact" },
  ];
  const resume = pt ? "/Currículo Victor B. Dornelles.pdf" : "/Resume Victor B. Dornelles- Eng.pdf";
  return (
    <Box as="header" borderBottom="1px solid #23344D">
      <Container maxW="none" px={{ base: 5, md: 8, lg: 12 }}>
        <Flex as="nav" aria-label={pt ? "Navegação principal" : "Main navigation"} minH="80px" align="center" justify="space-between" gap={3}>
          <Link href="#top" color="#F1F6FF" fontFamily="mono" fontSize="xl" fontWeight="bold" _hover={{ color: "#78B7FF" }}>
            victor<Box as="span" color="#78B7FF">.dev</Box>
          </Link>
          <Flex align="center" gap={{ base: 2, md: 5, lg: 8 }}>
          <HStack spacing={{ md: 8, lg: 12 }} display={{ base: "none", md: "flex" }}>
            <HStack spacing={4}>
            {sections.map(section => <Link key={section.href} href={section.href} color="#B6C7DF" fontSize="sm" py={3}>{section.label}</Link>)}
            </HStack>
            <Button as="a" href={resume} download size="sm" minH="48px" px={4} bg="#78B7FF" color="#071327"
              fontWeight="bold" border="1px solid #A3CFFF" boxShadow="0 4px 16px rgba(120, 183, 255, 0.2)"
              aria-label={pt ? "Baixar currículo" : "Download resume"} leftIcon={<Download size={18} />}
              _hover={{ bg: "#A3CFFF", boxShadow: "0 4px 20px rgba(120, 183, 255, 0.35)" }}
              _active={{ bg: "#5CA6FA" }} _focusVisible={{ outline: "2px solid #F1F6FF", outlineOffset: "3px" }}>
              {pt ? "Currículo" : "Resume"}
            </Button>
          </HStack>
          <HStack spacing={2}>
            <Button onClick={alternarIdioma} aria-label={pt ? "Switch to English" : "Mudar para português"} variant="ghost"
              color="#B6C7DF" minH="44px" minW="44px" _hover={{ bg: "whiteAlpha.100" }}>{pt ? "EN" : "PT"}</Button>
            <IconButton display={{ base: "flex", md: "none" }} onClick={onToggle} icon={isOpen ? <X /> : <Menu />}
              aria-label={pt ? (isOpen ? "Fechar menu" : "Abrir menu") : (isOpen ? "Close menu" : "Open menu")}
              aria-expanded={isOpen} aria-controls="mobile-navigation" color="#F1F6FF" variant="ghost" minH="44px" minW="44px"
              _hover={{ bg: "whiteAlpha.100" }} />
          </HStack>
          </Flex>
        </Flex>
        {isOpen && <VStack id="mobile-navigation" as="nav" aria-label={pt ? "Navegação mobile" : "Mobile navigation"}
          display={{ base: "flex", md: "none" }} align="stretch" pb={5} spacing={1}>
          {sections.map(section => <Link key={section.href} href={section.href} onClick={onClose} color="#B6C7DF" py={3}>{section.label}</Link>)}
          <Box pt={4}>
          <Button as="a" href={resume} download onClick={onClose} leftIcon={<Download size={18} />} bg="#78B7FF" color="#071327"
            w="full" minH="48px" fontWeight="bold" border="1px solid #A3CFFF" boxShadow="0 4px 16px rgba(120, 183, 255, 0.2)"
            _hover={{ bg: "#A3CFFF", boxShadow: "0 4px 20px rgba(120, 183, 255, 0.35)" }} _active={{ bg: "#5CA6FA" }}
            _focusVisible={{ outline: "2px solid #F1F6FF", outlineOffset: "3px" }}>{pt ? "Baixar currículo" : "Download resume"}</Button>
          </Box>
        </VStack>}
      </Container>
    </Box>
  );
}
