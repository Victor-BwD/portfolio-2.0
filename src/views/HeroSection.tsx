import { Box } from "@chakra-ui/react";
import { Apresentation } from "../components/Apresentation";
import { Nav } from "../components/Nav";
import { useState } from "react";

export function HeroSection() {
  const [idioma, setIdioma] = useState("pt");

  const alternarIdioma = () => {
    setIdioma(idioma === "pt" ? "en" : "pt");
  };

  return (
    <Box bgGradient="linear-gradient(to bottom, #0B214D, #0B5EFF)" bgSize="cover" height="100vh">
      <Nav idioma={idioma} alternarIdioma={alternarIdioma}/>
      <Apresentation idioma={idioma}/>
    </Box>
  )
}