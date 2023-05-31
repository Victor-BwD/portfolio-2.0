import { Box } from "@chakra-ui/react";
import { Apresentation } from "../components/Apresentation";
import { Nav } from "../components/Nav";

export function HeroSection() {
  return (
    <Box bgGradient="linear-gradient(to bottom, #0B214D, #0B5EFF)" bgSize="cover" height="100vh">
        <Nav />
        <Apresentation/>
    </Box>
  )
}