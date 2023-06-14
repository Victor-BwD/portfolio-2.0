import { Box, Text, Heading, Flex, HStack, extendTheme, ChakraProvider, Icon } from '@chakra-ui/react'
import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const theme = extendTheme({
  breakpoints: {
    sm: "30em",   // 480px
    md: "48em",   // 768px
    lg: "62em",   // 992px
    xl: "80em",   // 1280px
    "2xl": "96em" // 1536px (novo breakpoint)
  },
});

export function Apresentation() {
  const { idioma } = useContext(LanguageContext);
  return (
    <ChakraProvider theme={theme}>
      <Flex height="95vh" alignItems="center" justifyContent="center" ml="8" p="2" mr="8">
        <Box>
          <Box>
            <Text fontSize={{ base: "xl", md: "3xl" }} ml={{ base: "1", md: "2" }} color="white" as="b">
              {idioma === "pt" ? "Olá, meu nome é Victor" : "Hello, my name is Victor"}
            </Text>
            <HStack spacing={{base: "4", md: "6"}} alignItems="center" height="106px">
              <Heading as="h1" fontSize={{ base: "5xl", sm: "6x1", md: "7xl", lg: "9xl" }} color="white">
                Software
              </Heading>
              <HStack spacing="4" alignItems="center" pt="7">
                <Box backgroundColor="white" rounded="10px">
                  <a href='https://github.com/Victor-BwD' target='_blank' rel="noreferrer">
                    <Icon as={GithubIcon} boxSize={{ base: "42px", md: "68px" }} color="black" mt="2"/>
                  </a>
                </Box>
                <Box backgroundColor="white" rounded="10px">
                  <a href='https://www.linkedin.com/in/victorbwd/' target='_blank' rel="noreferrer">
                    <Icon as={LinkedinIcon} boxSize={{ base: "42px", md: "68px" }} color="black" mt="2"/>
                  </a>
                </Box>
                <Box backgroundColor="white" rounded="10px">
                  <a href='https://www.instagram.com/victor_bwd/' target='_blank' rel="noreferrer">
                    <Icon as={InstagramIcon} boxSize={{ base: "42px", md: "68px" }} color="black" mt="2"/>
                  </a>
                </Box>
              </HStack>
            </HStack>
            <Heading
              as="h1"
              pr={{base: "42px", md: "0", lg: "0", xl: "0"}}
              ml={{base: "0px", md: "15%", lg: "15%", xl: "15%"}}
              fontSize={{ base: "5xl", sm: "6x1", md: "8xl", lg: "9xl" }}
              color="white"
              textAlign={{ base: "center", md: "left" }}
              mb={{ base: "2", md: "4", lg: "8" }}
            >
              Developer
            </Heading>
            <Text
              ml={{ base: "0", md: "20%", lg: "30%", xl:"40%"}}
              width={{ base: "100%", md: "80%", lg: "60%", xl: "50%", "2xl": "40%" }}
              fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
              color="white"
              textAlign={{ base: "center", md: "left" }}
              mb={{ base: "8", md: "12", lg: "16" }}
            >
              {idioma === "pt" ? "27 anos, com 3 anos de experiência em tecnologia. Tenho experiência tanto em desenvolvimento de jogos quanto front-end e back-end." 
              : "27 years old, with 3 years of experience in technology. I have experience in both game development and front-end and back-end development."}
            </Text>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}