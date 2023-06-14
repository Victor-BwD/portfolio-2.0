import { Box } from "@chakra-ui/react";
import { About } from "../components/About";

export function AboutView() {
  return (
    <Box backgroundColor="#0B214D" pt={{base: "20%", md: "14px"}}>
        <About />
    </Box>
  )
}