import { Box } from "@chakra-ui/react";
import { Apresentation } from "../components/Apresentation";
import { Nav } from "../components/Nav";

export function HeroSection() {
  return (
    <Box backgroundColor="#0B214D">
        <Nav />
        <Apresentation/>
    </Box>
  )
}