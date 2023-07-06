import { Box, Grid, HStack, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
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
  const { idioma } = useContext(LanguageContext);

  return (
    <Stack
      direction={["column", "row"]}
      spacing={24}
      height={{ base: "auto", md: "960px", lg: "560px", xl: "680px" }}
      alignItems={["flex-start", "center"]}
      justifyContent="center"
     
      ml={{ base: "0px", md: "0px", lg: "12px" }}
      px={[4, 0]}
      p={[4, 8]}
    >
      <Box width={["100%", "580px", "640px"]} id="About">
        <Text as="b" fontSize={["3xl", "4xl", "5xl"]} color="#E4F2FF">
          {idioma === "pt" ? "Minha carreira até agora" : "My career so far"}
        </Text>
        <Stack spacing={2} mt={2}>
          <Text color="#E4F2FF" fontSize={["md", "lg"]}>
            {idioma === "pt"
              ? "Sempre procurando um desafio, comecei a faculdade em 2016 e desde então sigo estudando."
              : "Always seeking a challenge, I started college in 2016 and have been studying ever since."}
          </Text>
          <Text color="#E4F2FF" fontSize={["md", "lg"]}>
            {idioma === "pt"
              ? "Com 3 anos de experiência profissional, trabalhei em diversos ramos da tecnologia, como experiências únicas em engenharia de dados, desenvolvimento web e desenvolvimento de jogos."
              : "With 3 years of professional experience, I have worked in various fields of technology, such as unique experiences in data engineering, web development, and game development."}
          </Text>
          <Text color="white" fontSize={["md", "lg"]}>
            {idioma === "pt"
              ? "Tudo se resume a minha paixão por tecnologia e aprender cada vez mais para somar dentro do time, gosto de ajudar e conversar com todos dentro do projeto, desde arte até back-end."
              : "It all comes down to my passion for technology and learning more and more to contribute to the team. I enjoy helping and interacting with everyone in the project, from design to back-end."}
          </Text>
          <Text color="white" fontSize={["md", "lg"]}>
            {idioma === "pt"
              ? "Atualmente, estou trabalhando como freelancer em desenvolvimento web."
              : "Currently, I am working as a freelance web developer."}
          </Text>
          <HStack>
            <Text as="b" color="#E4F2FF" fontSize={["md", "lg"]}>
              {idioma === "pt" ? "Mande-me um e-mail:" : "Send me an email:"}
            </Text>
            <Text as="span" color="#E4F2FF" wordBreak="break-word">
              victor.bogdanowdornelles@gmail.com
            </Text>
          </HStack>
        </Stack>
      </Box>
      
      <Box
      width={{ base: "100%", xl: "23%" }}
      ml={{ base: 0, xl: "24px" }}
      display={{ base: "none", xl: "block" }}
      />


      <Box mt={["2", "4"]} width={["100%", "auto"]} ml={[0, "12px"]} >
        <Box as="b" fontSize={["2xl", "3xl"]} color="#E4F2FF">
          {idioma === "pt" ? "Tecnologias que tenho experiência:" : "Technologies I have experience with:"}
        </Box>
        <Box mt={2}>
          <Grid
            templateColumns={["repeat(auto-fit, minmax(90px, 1fr))", "repeat(auto-fit, minmax(128px, 1fr))"]}
            gap={[2, 2, 3]}
            mt={2}
          >
            {technologies.map((technology) => (
              <Box key={technology.id} borderWidth="1px" borderRadius="md" borderColor="white" p={2}>
                <Text color="#E4F2FF">{technology.name}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Stack>
  )
}