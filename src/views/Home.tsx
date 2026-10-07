import { Box } from "@chakra-ui/react";
import { Apresentation } from "../components/Apresentation";
import { Nav } from "../components/Nav";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <Box
      id="top"
      backgroundColor="#0A1628"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Nav />
      <Box as="main">
        <Apresentation />
        <Experience />
        <Projects />
        <About />
      </Box>
      <Footer />
    </Box>
  );
}
