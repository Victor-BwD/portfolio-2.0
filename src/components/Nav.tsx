import { Button, Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function Nav() {
  const { idioma, alternarIdioma } = useContext(LanguageContext);
  
  return (
    <Flex justify="space-between" align="center">
      <Heading as="h1" size="lg" ml="2" pt="2" color="white">
          {idioma === "pt" ? "Portfólio" : "Portfolio"}
      </Heading>
      <Button colorScheme="gray" onClick={alternarIdioma} mr="2" mt="2">
          {idioma === "pt" ? "EN" : "PT"}
      </Button>
    </Flex>
  )
}