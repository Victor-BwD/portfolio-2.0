import { Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function Footer() {
  const { idioma } = useContext(LanguageContext);
  return (
    <Flex justifyContent="center" pb="2">
      <Text color="white" fontWeight="600">
        {idioma === "pt" ? "Feito com ❤️ por Victor B. Dornelles" : 
        "Made with ❤️ by Victor B. Dornelles"}
      </Text>
    </Flex>
  )
}