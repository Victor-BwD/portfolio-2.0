import { Box, Button, Grid, HStack, Stack, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Copy, CopyCheck } from "lucide-react";

const technologies = [
  { id: 1, name: "ReactJS" },
  { id: 2, name: "NextJS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "Typescript" },
  { id: 5, name: "Node.js" },
  { id: 6, name: "HTML/CSS" },
  { id: 7, name: "Jest" },
  { id: 8, name: "Babylon.js" },
  { id: 9, name: "C#" },
  { id: 10, name: "Unity" },
  { id: 11, name: "Java/Spring Boot" },
  { id: 12, name: "PostgreSQL" },
  { id: 13, name: "MongoDB" },
  { id: 14, name: "API Restful" },
  { id: 15, name: "Looker Studio" },
  { id: 16, name: "Git" },
  { id: 17, name: "UT/IT" },
  { id: 18, name: "Scrum" },
];

export function About() {
  const { idioma } = useContext(LanguageContext);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    const emailInput = document.getElementById("email");
    if (emailInput) {
      navigator.clipboard.writeText(emailInput.innerHTML);
      setEmailCopied(true);
    }
  };

  setTimeout(() => {
    setEmailCopied(false);
  }, 3000);

  return (
    <Stack
      direction={["column", "row"]}
      spacing={24}
      height={{ base: "auto", md: "960px", lg: "560px", xl: "680px" }}
      alignItems={["flex-start", "center"]}
      justifyContent="space-between"
      ml={{ lg: "13px" }}
      mr={{ lg: "13px" }}
      mb={{ base: "42px", md: "24px", lg: "24px", xl: "24px" }}
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
          <Text color="#E4F2FF" fontSize={["md", "lg"]}>
            {idioma === "pt"
              ? "Gosto de aprender cada vez mais visando entregar projetos mais complexos e para somar dentro do time, gosto de ajudar e conversar com todos dentro do projeto, desde arte até back-end."
              : "I enjoy continuously learning to deliver increasingly complex projects and to contribute effectively within the team. I take pleasure in assisting and engaging with all team members throughout the project, from artwork to back-end development."}
          </Text>
          <Text color="#E4F2FF" fontSize={["md", "lg"]}>
            {idioma === "pt"
              ? "Atualmente atuando como fullstack na empresa Lighthouse."
              : "Currently, I am working as a full-stack developer at Lighthouse company."}
          </Text>
          <HStack>
            <Text as="b" color="#E4F2FF" fontSize={["md", "lg"]}>
              {idioma === "pt" ? "Mande-me um e-mail:" : "Send me an email:"}
            </Text>
            <Text as="span" id="email" color="#E4F2FF" wordBreak="break-word">
              victor.bogdanowdornelles@gmail.com
            </Text>
            {!emailCopied ? (
              <Button size="sm" onClick={handleCopyEmail}>
                <Copy size="19px" />
              </Button>
            ) : (
              <Button size="sm">
                <CopyCheck size="19px" />
              </Button>
            )}
          </HStack>
        </Stack>
      </Box>

      <Box mt={["2", "4"]} width={["100%", "auto"]} ml={[0, "12px"]}>
        <Box as="b" fontSize={["2xl", "3xl"]} color="#E4F2FF">
          {idioma === "pt"
            ? "Tecnologias que tenho experiência:"
            : "Technologies I have experience with:"}
        </Box>
        <Box mt={2}>
          <Grid
            templateColumns={[
              "repeat(auto-fit, minmax(90px, 1fr))",
              "repeat(auto-fit, minmax(128px, 1fr))",
            ]}
            gap={[2, 2, 3]}
            mt={2}
          >
            {technologies.map((technology) => (
              <Box
                key={technology.id}
                borderWidth="1px"
                borderRadius="md"
                borderColor="white"
                p={2}
              >
                <Text color="#E4F2FF">{technology.name}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}
