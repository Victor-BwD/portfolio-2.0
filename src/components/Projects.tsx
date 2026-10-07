import { useContext, useRef, useState } from "react";
import {
  Badge, Box, Button, Collapse, Container, Flex, Grid, Heading, Image, Link, Text,
  useBreakpointValue, usePrefersReducedMotion,
} from "@chakra-ui/react";
import { ChevronDown, Github } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

const projects = [
  {
    id: 2, name: "Smart Expenses API", category: "BACKEND", image: "https://i.imgur.com/80CK9WI.png",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Flyway", "JWT"],
    summary: ["API de finanças pessoais com categorização automática de transações.", "Personal finance API with automatic transaction categorization."],
    objective: ["Facilitar o controle das finanças pessoais e reduzir o trabalho de organizar cada transação.", "Make personal finances easier to manage and reduce the effort of organizing each transaction."],
    implementation: ["API em Java e Spring Boot, persistência em PostgreSQL, migrações com Flyway e autenticação com JWT.", "Java and Spring Boot API with PostgreSQL persistence, Flyway migrations and JWT authentication."],
    challenges: ["Criar uma categorização automática baseada em palavras-chave definidas pelo próprio usuário, integrada ao cadastro das transações.", "Build automatic categorization using user-defined keywords, integrated into the transaction creation flow."],
    repository: "https://github.com/Victor-BwD/smart-expenses-api",
  },
  {
    id: 3, name: "Desafio 1BRC", nameEnglish: "1BRC Challenge", category: "PERFORMANCE", image: "https://i.imgur.com/GrHWDC1.png",
    technologies: ["Java", "I/O", "Algoritmos"],
    summary: ["Leitura e agregação de um bilhão de linhas, explorando eficiência em Java.", "Reading and aggregating one billion rows, exploring efficiency in Java."],
    objective: ["Processar e organizar um bilhão de linhas, reduzindo tempo de execução e uso de memória.", "Process and organize one billion rows while reducing execution time and memory usage."],
    implementation: ["Manipulação de arquivos na casa dos bytes, estruturas de dados eficientes e algoritmos voltados a grandes volumes de dados.", "Byte-level file processing, efficient data structures and algorithms designed for large datasets."],
    challenges: ["Equilibrar processamento e leitura em disco. O teste registrado levou aproximadamente 3 minutos em um HD de 7200 RPM; o resultado depende do hardware e das condições de execução.", "Balance processing and disk I/O. The recorded test took approximately 3 minutes on a 7200 RPM HDD; results depend on hardware and execution conditions."],
    repository: "https://github.com/Victor-BwD/1BRC_otimization",
  },
];

export function Projects() {
  const { idioma } = useContext(LanguageContext);
  const pt = idioma === "pt";
  const language = pt ? 0 : 1;
  const columns = useBreakpointValue({ base: 1, md: 2 }) ?? 1;
  const reducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<number | null>(null);
  const triggers = useRef<Record<number, HTMLButtonElement | null>>({});
  const rows = [];
  for (let index = 0; index < projects.length; index += columns) {
    rows.push(projects.slice(index, index + columns));
  }

  const toggleProject = (id: number) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };
  const closeDetails = () => {
    if (activeId !== null) triggers.current[activeId]?.focus();
    setActiveId(null);
  };

  return (
    <Box as="section" id="projects" py={{ base: 12, md: 20 }} borderTop="1px solid #23344D" scrollMarginTop="24px">
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <Text fontSize="xs" letterSpacing="0.18em" color="#78B7FF" mb={3}>{pt ? "NA PRÁTICA" : "IN PRACTICE"}</Text>
        <Heading as="h2" color="#F1F6FF" fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.04em">
          {pt ? "Projetos selecionados" : "Selected projects"}
        </Heading>
        <Text color="#91A9CA" mt={4} mb={8} maxW="560px" lineHeight="1.7">
          {pt ? "APIs, performance e outras ideias que saíram do papel. Abra os detalhes para conhecer o que está por trás de cada projeto."
            : "APIs, performance and other ideas brought to life. Open the details to discover what is behind each project."}
        </Text>
        <Box display="grid" gap={5}>
          {rows.map(row => {
            return (
              <Box key={row[0].id} minW={0}>
                <Grid templateColumns={columns === 1 ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))"} gap={5} alignItems="stretch">
                  {row.map(project => {
                    const expanded = activeId === project.id;
                    const name = !pt && project.nameEnglish ? project.nameEnglish : project.name;
                    return (
                      <Flex as="article" key={project.id} direction="column" minW={0} overflow="hidden" bg="#101F34"
                        border="1px solid" borderColor={expanded ? "#78B7FF" : "#2A3B53"} borderRadius="2xl">
                        <Image src={project.image} alt={name} loading="lazy" w="100%" aspectRatio={16 / 9} objectFit="cover" bg="#172B45" />
                        <Flex direction="column" p={{ base: 5, md: 7 }} flex={1}>
                          <Text color="#78B7FF" fontSize="xs" letterSpacing="0.14em" mb={3}>{project.category}</Text>
                          <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} color="#F1F6FF" letterSpacing="-0.03em">{name}</Heading>
                          <Text color="#B6C7DF" lineHeight="1.7" mt={3} mb={5}>{project.summary[language]}</Text>
                          <Flex gap={2} flexWrap="wrap" mt="auto" mb={6}>
                            {project.technologies.map(tech => <Badge key={tech} bg="#1B304C" color="#BCD7FA" borderRadius="md"
                              px={2} py={1} textTransform="none" fontWeight="medium">{tech}</Badge>)}
                          </Flex>
                          <Flex direction={{ base: "column", sm: "row" }} gap={2}>
                            <Button ref={element => { triggers.current[project.id] = element; }} id={`project-trigger-${project.id}`}
                              aria-expanded={expanded} aria-controls={`project-details-${project.id}`} onClick={() => toggleProject(project.id)}
                              rightIcon={<ChevronDown size={18} style={{ transform: expanded ? "rotate(180deg)" : undefined }} />}
                              bg={expanded ? "#78B7FF" : "#203C5E"} color={expanded ? "#071327" : "#F1F6FF"}
                              _hover={{ bg: "#78B7FF", color: "#071327" }} minH="48px" flex={1}>
                              {expanded ? (pt ? "Recolher detalhes" : "Hide details") : (pt ? "Ver detalhes" : "View details")}
                            </Button>
                            <Button as={Link} href={project.repository} isExternal leftIcon={<Github size={18} />}
                              variant="ghost" color="#B6C7DF" _hover={{ bg: "whiteAlpha.100" }} minH="48px">
                              {pt ? "Código" : "Code"}
                            </Button>
                          </Flex>
                        </Flex>
                      </Flex>
                    );
                  })}
                </Grid>
                {row.map(detail => <Collapse key={detail.id} id={`project-details-${detail.id}`} role="region"
                  aria-labelledby={`project-trigger-${detail.id}`} in={activeId === detail.id} animateOpacity
                  onKeyDown={event => { if (event.key === "Escape") closeDetails(); }}
                  transition={{ enter: { duration: reducedMotion ? 0 : 0.3 }, exit: { duration: reducedMotion ? 0 : 0.2 } }}>
                  <Box
                    mt={4} p={{ base: 5, md: 8 }} bg="#101F34" border="1px solid #354E70" borderRadius="2xl"
                    >
                    <Text color="#78B7FF" fontSize="sm" mb={6} fontWeight="bold">{!pt && detail.nameEnglish ? detail.nameEnglish : detail.name}</Text>
                    <Grid templateColumns={{ base: "minmax(0, 1fr)", lg: "repeat(3, minmax(0, 1fr))" }} gap={6}>
                      {([
                        [pt ? "01 / Objetivo" : "01 / Objective", detail.objective],
                        [pt ? "02 / Implementação" : "02 / Implementation", detail.implementation],
                        [pt ? "03 / Desafios" : "03 / Challenges", detail.challenges],
                      ] as const).map(([label, text]) => <Box key={label}>
                        <Heading as="h4" fontSize="md" color="#F1F6FF" mb={3}>{label}</Heading>
                        <Text color="#B6C7DF" fontSize="md" lineHeight="1.8">{text[language]}</Text>
                      </Box>)}
                    </Grid>
                    <Flex direction={{ base: "column", sm: "row" }} flexWrap="wrap" gap={3} mt={7} pt={5} borderTop="1px solid #2A3B53">
                      <Button as={Link} href={detail.repository} isExternal leftIcon={<Github size={18} />} bg="#78B7FF"
                        color="#071327" _hover={{ bg: "#A3CFFF" }} minH="48px">{pt ? "Ver repositório" : "View repository"}</Button>
                      <Button onClick={closeDetails} variant="ghost" color="#B6C7DF" _hover={{ bg: "whiteAlpha.100" }}
                        minH="48px" ml={{ base: 0, sm: "auto" }}>{pt ? "Recolher detalhes" : "Hide details"}</Button>
                    </Flex>
                  </Box>
                </Collapse>)}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
