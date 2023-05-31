import { Button, Flex, Heading } from "@chakra-ui/react";


type NavProps = {
  idioma: string;
  alternarIdioma: () => void;
};

export function Nav({ idioma, alternarIdioma }: NavProps) {

  return (
    <Flex justify="space-between" align="center">
      <Heading as="h1" size="lg" ml="2" pt="2" color="white">
          {idioma === "pt" ? "Portfólio" : "Portfolio"}
      </Heading>
      <Button colorScheme="white" onClick={alternarIdioma} mr="2" mt="2">
        {idioma === "pt" ? "EN" : "PT"}
      </Button>
    </Flex>
  )
}