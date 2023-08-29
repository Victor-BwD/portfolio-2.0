import { Box } from "@chakra-ui/react";
import { Apresentation } from "../components/Apresentation";
import { Nav } from "../components/Nav";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Footer } from "../components/Footer";


export function Home() {
  return (
    <Box backgroundColor="#0B214D">
        <Nav />
        <Apresentation/>
        <Projects />
        <About />
        <Footer />
    </Box>
  )
}