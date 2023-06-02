import { Box, Grid, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const technologies = [
  { id: 1, name: "ReactJS" },
  { id: 2, name: "NextJS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "Typescript" },
  { id: 5, name: "Node.js" },
  { id: 6, name: "HTML/CSS" },
  { id: 7, name: "BabylonJS" },
  { id: 8, name: "C#" },
  { id: 9, name: "Unity" },
  { id: 10, name: "Java" },
  { id: 11, name: "MySQL" },
  { id: 12, name: "MongoDB" },
  { id: 13, name: "APIRest" },
  { id: 14, name: "Looker Studio" },
  { id: 15, name: "Git" },
];

export function About() {
  const [showEmail, setShowEmail] = useState(false)
  const { idioma } = useContext(LanguageContext);
  
  const handleShowEmail = () => {
    setShowEmail(true)
  }

  return (
    <Stack direction={["column", "row"]} spacing={4} height={{base: "890px", md: "960px", lg: "560px"}} pb="6" alignItems="center" justifyContent="center">
      <Box width={["90%", "580px"]} mx={["5%", "10%"]} id="About">
        <Text as="b" fontSize={["3xl", "4xl", "5xl"]} color="white">
          {idioma === "pt" ? "Minha carreira até agora" : "My career so far"}
        </Text>
        <Stack spacing={2} mt={2}>
          <Text color="white" fontSize={["md", "lg"]}>
            {idioma === "pt" ? 
            "Sempre procurando um desafio, comecei a faculdade em 2016 e desde então sigo estudando." 
            : "Always seeking a challenge, I started college in 2016 and have been studying ever since."}
          </Text>
          <Text color="white" fontSize={["md", "lg"]}>
            {idioma === "pt" ? 
            "Com mais de 2 anos de experiência técnica, trabalhei em diversos ramos da tecnologia, como experiências únicas em engenharia de dados, desenvolvimento web e desenvolvimento de jogos." 
            : "With over 2 years of technical experience, I have worked in various fields of technology, such as unique experiences in data engineering, web development, and game development."}
          </Text>
          <Text color="white" fontSize={["md", "lg"]}>
            {idioma === "pt" ? 
            "Tudo se resume a minha paixão por tecnologia e aprender cada vez mais para somar dentro do time, gosto de ajudar e conversar com todos dentro do projeto, desde arte até back-end." 
            : "It all comes down to my passion for technology and learning more and more to contribute to the team. I enjoy helping and interacting with everyone in the project, from design to back-end."}
          </Text>
          <Text color="white" fontSize={["md", "lg"]}>
            {idioma === "pt" ? 
            "Atualmente, estou trabalhando como freelancer em desenvolvimento web." 
            : "Currently, I am working as a freelance web developer."}
          </Text>
          <Text as="b" color="white" fontSize={["md", "lg"]}>
            {idioma === "pt" ? "Encontre-me online:" : "Find me online:"}
          </Text>
          <HStack spacing={2}>
            <Link color="white" href="https://github.com/Victor-BwD">Github</Link>
            <Link color="white" href="https://www.linkedin.com/in/victorbwd/">Linkedin</Link>
            <Text as="button" display="inline-block" onClick={handleShowEmail} color="white">
              {idioma === "pt" ? "Clique para ver o e-mail:" : "Click to see email:"}
            </Text>
          </HStack>
          {showEmail && (
              <Text as="span" color="white" wordBreak="break-word">
                victor.bogdanowdornelles@gmail.com
              </Text>
            )}
        </Stack>
      </Box>

      <Box mt={["2", "4"]} height="410px" width={["90%", "auto"]}>
        <Box as="b" fontSize={["2xl", "3xl"]} color="white">
          {idioma === "pt" ? "Tecnologias que tenho experiência:" : "Technologies I have experience with:"}
        </Box>
        <Box mt={2}>
          <Grid templateColumns={["repeat(auto-fit, minmax(90px, 1fr))", "repeat(auto-fit, minmax(115px, 1fr))"]} gap={[2, 2, 3]} mt={2}>
            {technologies.map((technology) => (
            <Box
            key={technology.id}
            borderWidth="1px"
            borderRadius="md"
            borderColor="white"
            p={2}
            >
              <Text color="white">{technology.name}</Text>
            </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Stack>
  )
}