import { useContext, useRef, useState } from "react";
import { Badge, Box, Button, Collapse, Container, Flex, Grid, Heading, Image, Link, ListItem, Text, UnorderedList, usePrefersReducedMotion } from "@chakra-ui/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

export function Experience() {
  const { idioma } = useContext(LanguageContext);
  const pt = idioma === "pt";
  const [expanded, setExpanded] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const closeDetails = () => {
    trigger.current?.focus();
    setExpanded(false);
  };
  const areas = pt ? [
    {
      title: "Desenvolvimento e performance",
      items: [
        "Desenvolvimento de aplicações e workers em Java e Go para gerenciamento de estoques.",
        "Análise de concorrência e performance em Go, aproveitando os recursos da linguagem para construir aplicações performáticas e escaláveis.",
        "Aplicação de Clean Architecture e Clean Code nos projetos.",
      ],
    },
    {
      title: "Produção e observabilidade",
      items: [
        "Participação em deploys produtivos, troubleshooting e resolução de incidentes em produção.",
        "Investigação de problemas em ambientes distribuídos, incluindo health checks, timeouts, Redis, Kafka e integrações entre serviços.",
        "Análise de métricas e do comportamento das aplicações com Dynatrace e Grafana.",
      ],
    },
    {
      title: "Colaboração e apoio técnico",
      items: [
        "Apoio técnico ao time durante a ausência de liderança técnica, auxiliando em decisões, validações e deploys.",
        "Colaboração com desenvolvedores, SREs e especialistas na resolução de incidentes e na melhoria contínua da plataforma.",
      ],
    },
  ] : [
    {
      title: "Development and performance",
      items: [
        "Development of Java and Go applications and workers for inventory management.",
        "Analysis of concurrency and performance in Go, making use of the language's capabilities to build efficient, scalable applications.",
        "Application of Clean Architecture and Clean Code in projects.",
      ],
    },
    {
      title: "Production and observability",
      items: [
        "Participation in production deployments, troubleshooting and incident resolution.",
        "Investigation of distributed-system issues involving health checks, timeouts, Redis, Kafka and service integrations.",
        "Analysis of application metrics and behavior using Dynatrace and Grafana.",
      ],
    },
    {
      title: "Collaboration and technical support",
      items: [
        "Technical support for the team during the technical lead's absence, helping with decisions, validations and deployments.",
        "Collaboration with developers, SREs and specialists on incident resolution and continuous platform improvement.",
      ],
    },
  ];

  return (
    <Box as="section" id="experience" py={{ base: 12, md: 20 }} borderTop="1px solid #23344D" scrollMarginTop="24px">
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <Text fontSize="xs" letterSpacing="0.18em" color="#78B7FF" mb={3}>{pt ? "TRAJETÓRIA PROFISSIONAL" : "PROFESSIONAL BACKGROUND"}</Text>
        <Heading as="h2" color="#F1F6FF" fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.04em">
          {pt ? "Experiência profissional" : "Professional experience"}
        </Heading>
        <Text color="#91A9CA" mt={4} mb={8} maxW="600px" lineHeight="1.7">
          {pt ? "Desenvolvimento de sistemas, operação em produção e colaboração técnica no dia a dia." : "Building systems, operating in production and collaborating with technical teams every day."}
        </Text>
        <Grid templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" }} gap={5} alignItems="start">
        <Box as="article" minW={0} bg="#101F34" border="1px solid" borderColor={expanded ? "#78B7FF" : "#496B94"} borderRadius="2xl" overflow="hidden">
          <Flex bg="#F1F6FF" minH="80px" px={5} py={4}
            align="center" position="relative">
            <Image src="/companies/casas-bahia.svg" alt="Casas Bahia" width="2838" height="299"
              w="full" maxW="240px" h="auto" objectFit="contain" />
            <Box position="absolute" bottom={0} left={0} w="72px" h="4px" bg="#E5243B" aria-hidden="true" />
          </Flex>
          <Box p={5}>
            <Flex direction="column" gap={2}>
              <Box>
                <Heading as="h3" id="experience-title" color="#F1F6FF" fontSize="xl" letterSpacing="-0.03em">
                  {pt ? "Desenvolvedor back-end" : "Back-end Developer"}
                </Heading>
              </Box>
              <Flex gap={2} align="center" flexWrap="wrap">
                <Text color="#91A9CA" fontSize="sm"><time dateTime="2026-01">Jan 2026</time> — {pt ? "presente" : "present"}</Text>
                <Badge bg="#1B304C" color="#BCD7FA" borderRadius="md" px={2} textTransform="none">{pt ? "Atual" : "Current"}</Badge>
              </Flex>
            </Flex>
            <Text color="#B6C7DF" fontSize="sm" lineHeight="1.7" mt={3}>
              {pt
                ? "Aplicações e workers em Java e Go para gestão de estoques, com foco em performance e operação em produção."
                : "Java and Go applications and workers for inventory management, focused on performance and production operations."}
            </Text>
            <Flex gap={2} flexWrap="wrap" mt={4} mb={4}>
              {["Java", "Go", "Redis", "Kafka"].map(tech => <Badge key={tech} bg="#1B304C" color="#BCD7FA" borderRadius="md" px={2} py={1} textTransform="none" fontWeight="medium">{tech}</Badge>)}
            </Flex>
            <Button ref={trigger} id="experience-trigger" aria-expanded={expanded} aria-controls="experience-details" onClick={() => setExpanded(!expanded)}
              rightIcon={<ChevronDown size={18} style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: reducedMotion ? "none" : "transform 0.3s ease" }} />}
              bg={expanded ? "#78B7FF" : "#203C5E"} color={expanded ? "#071327" : "#F1F6FF"} _hover={{ bg: "#78B7FF", color: "#071327" }}
              minH="48px" w="full">
              {expanded ? (pt ? "Recolher detalhes" : "Hide details") : (pt ? "Ver detalhes" : "View details")}
            </Button>
          </Box>
          <Collapse id="experience-details" role="region" aria-labelledby="experience-title" in={expanded} animateOpacity
            onKeyDown={event => { if (event.key === "Escape") closeDetails(); }}
            transition={{ enter: { duration: reducedMotion ? 0 : 0.35 }, exit: { duration: reducedMotion ? 0 : 0.25 } }}>
            <Box p={5} borderTop="1px solid #2A3B53">
              <Grid templateColumns="minmax(0, 1fr)" gap={5}>
                {areas.map(area => <Box key={area.title}>
                  <Heading as="h4" fontSize="md" color="#F1F6FF" mb={4}>{area.title}</Heading>
                  <UnorderedList color="#B6C7DF" fontSize="sm" spacing={2} ml={4} lineHeight="1.7">
                    {area.items.map(item => <ListItem key={item}>{item}</ListItem>)}
                  </UnorderedList>
                </Box>)}
              </Grid>
              <Button onClick={closeDetails} variant="ghost" color="#B6C7DF" _hover={{ bg: "whiteAlpha.100" }} minH="48px" mt={6} w={{ base: "full", sm: "auto" }}>
                {pt ? "Recolher detalhes" : "Hide details"}
              </Button>
            </Box>
          </Collapse>
        </Box>
        <LighthouseExperience />
        <ZemaExperience />
        <KidsBannerExperience />
        </Grid>
      </Container>
    </Box>
  );
}

function LighthouseExperience() {
  const { idioma } = useContext(LanguageContext);
  const pt = idioma === "pt";
  const [expanded, setExpanded] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const closeDetails = () => {
    trigger.current?.focus();
    setExpanded(false);
  };
  const roles = [
    {
      title: pt ? "Desenvolvedor back-end Node.js" : "Node.js Back-end Developer",
      period: "Jun 2025 — Nov 2025",
      items: pt ? [
        "Implementação de BFF com Fastify para a HS Consórcios, simplificando o consumo de múltiplas APIs pelo frontend.",
        "Telemetria e otimizações de API, com redução de 50% no tempo de resposta para grandes volumes de dados.",
        "Atuação com AWS Lambda e diagnóstico de falhas usando CloudWatch; autenticação e e-mails transacionais via Keycloak.",
        "Testes unitários e de integração com Jest e documentação técnica com Swagger.",
      ] : [
        "Built a Fastify BFF for HS Consórcios, simplifying frontend consumption of multiple APIs.",
        "Implemented telemetry and API optimizations, reducing response times for large datasets by 50%.",
        "Worked with AWS Lambda and investigated failures using CloudWatch; implemented authentication and transactional emails through Keycloak.",
        "Unit and integration testing with Jest and technical documentation with Swagger.",
      ],
    },
    {
      title: pt ? "Desenvolvedor full stack" : "Full Stack Developer",
      period: "Jan 2024 — Jun 2025",
      items: [pt ? "Desenvolvimento de projetos para a ZEMA, alocado pela Lighthouse." : "Developed projects for ZEMA as part of a Lighthouse client assignment."],
    },
    {
      title: pt ? "Estágio em desenvolvimento back-end" : "Back-end Development Intern",
      period: pt ? "Jul 2023 — Dez 2023" : "Jul 2023 — Dec 2023",
      items: [pt ? "Criação de APIs RESTful com Node.js e TypeScript para cadastro e atualização de colaboradores." : "Created RESTful APIs with Node.js and TypeScript for employee registration and updates."],
    },
  ];

  return (
    <Box as="article" minW={0} bg="#101F34" border="1px solid" borderColor={expanded ? "#78B7FF" : "#496B94"} borderRadius="2xl" overflow="hidden">
      <Flex bg="#F1F6FF" minH="80px" px={5} py={4} align="center" position="relative">
        <Text color="#0A1628" fontSize="2xl" fontWeight="800" letterSpacing="-0.04em">Lighthouse</Text>
        <Box position="absolute" bottom={0} left={0} w="72px" h="4px" bg="#FF0050" aria-hidden="true" />
      </Flex>
      <Box p={5}>
        <Flex direction="column" gap={2}>
          <Heading as="h3" id="lighthouse-title" color="#F1F6FF" fontSize="xl" letterSpacing="-0.03em">
            {pt ? "Desenvolvimento Node.js" : "Node.js Development"}
          </Heading>
          <Flex gap={2} align="center" flexWrap="wrap">
            <Text color="#91A9CA" fontSize="sm"><time dateTime="2023-07">Jul 2023</time> — <time dateTime="2025-11">Nov 2025</time></Text>
            <Badge bg="#1B304C" color="#BCD7FA" borderRadius="md" px={2} textTransform="none">{pt ? "3 cargos" : "3 roles"}</Badge>
          </Flex>
        </Flex>
        <Text color="#B6C7DF" fontSize="sm" lineHeight="1.7" mt={3}>
          {pt
            ? "BFFs e APIs com Node.js. Redução de 50% no tempo de resposta da API para grandes volumes de dados."
            : "BFFs and APIs with Node.js. Reduced API response times for large datasets by 50%."}
        </Text>
        <Flex gap={2} flexWrap="wrap" mt={4} mb={4}>
          {["Node.js", "TypeScript", "Fastify", "AWS"].map(tech => <Badge key={tech} bg="#1B304C" color="#BCD7FA" borderRadius="md" px={2} py={1} textTransform="none" fontWeight="medium">{tech}</Badge>)}
        </Flex>
        <Button ref={trigger} id="lighthouse-trigger" aria-expanded={expanded} aria-controls="lighthouse-details" onClick={() => setExpanded(!expanded)}
          rightIcon={<ChevronDown size={18} style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: reducedMotion ? "none" : "transform 0.3s ease" }} />}
          bg={expanded ? "#78B7FF" : "#203C5E"} color={expanded ? "#071327" : "#F1F6FF"} _hover={{ bg: "#78B7FF", color: "#071327" }} minH="48px" w="full">
          {expanded ? (pt ? "Recolher detalhes" : "Hide details") : (pt ? "Ver detalhes" : "View details")}
        </Button>
      </Box>
      <Collapse id="lighthouse-details" role="region" aria-labelledby="lighthouse-title" in={expanded} animateOpacity
        onKeyDown={event => { if (event.key === "Escape") closeDetails(); }}
        transition={{ enter: { duration: reducedMotion ? 0 : 0.35 }, exit: { duration: reducedMotion ? 0 : 0.25 } }}>
        <Box p={5} borderTop="1px solid #2A3B53">
          <Text color="#91A9CA" fontSize="sm" mb={5}>{pt ? "Remoto · evolução na empresa" : "Remote · career progression"}</Text>
          {roles.map((role, index) => <Box key={role.title} borderLeft="2px solid #354E70" pl={{ base: 4, md: 6 }} pb={index < roles.length - 1 ? 8 : 0}>
            <Heading as="h4" fontSize="md" color="#F1F6FF">{role.title}</Heading>
            <Text color="#78B7FF" fontSize="sm" mt={2} mb={3}>{role.period}</Text>
            <UnorderedList color="#B6C7DF" fontSize="sm" spacing={2} ml={4} lineHeight="1.7">
              {role.items.map(item => <ListItem key={item}>{item}</ListItem>)}
            </UnorderedList>
          </Box>)}
          <Button onClick={closeDetails} variant="ghost" color="#B6C7DF" _hover={{ bg: "whiteAlpha.100" }} minH="48px" mt={6} w={{ base: "full", sm: "auto" }}>
            {pt ? "Recolher detalhes" : "Hide details"}
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
}

function KidsBannerExperience() {
  const { idioma } = useContext(LanguageContext);
  const pt = idioma === "pt";
  const [expanded, setExpanded] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const closeDetails = () => {
    trigger.current?.focus();
    setExpanded(false);
  };
  const areas = pt ? [
    {
      title: "Desenvolvimento de jogos",
      items: [
        "Desenvolvimento e refatoração das mecânicas de minijogos 2D infantis em Unity e C#, com foco em uma experiência simples, divertida e acessível.",
        "Implementação de áudio e feedbacks visuais, organização de scripts modulares e reutilizáveis e otimização de cenas para dispositivos móveis.",
        "Colaboração com outro desenvolvedor, aplicando boas práticas de orientação a objetos em C# em um ambiente ágil.",
      ],
    },
    {
      title: "Colaboração internacional",
      items: [
        "Primeira experiência internacional, trabalhando remotamente com a equipe de Vancouver, Canadá.",
        "Comunicação com gestores e desenvolvedores inteiramente em inglês, incluindo documentação técnica e adaptação aos prazos e à cultura de uma equipe global.",
      ],
    },
    {
      title: "Nordica Village",
      items: [
        "Participação no desenvolvimento do jogo infantil publicado na Google Play.",
        "No lançamento, o jogo obteve nota 5,0 e ultrapassou 500 downloads nos primeiros dias.",
      ],
    },
  ] : [
    {
      title: "Game development",
      items: [
        "Developed and refactored children's 2D minigame mechanics in Unity and C#, focusing on simple, fun and accessible gameplay.",
        "Implemented audio and visual feedback, organized modular, reusable scripts and optimized scenes for mobile devices.",
        "Collaborated with another developer, applying C# object-oriented programming practices in an agile environment.",
      ],
    },
    {
      title: "International collaboration",
      items: [
        "First international role, working remotely with a team based in Vancouver, Canada.",
        "Communicated with managers and developers entirely in English, including technical documentation and adapting to a global team's deadlines and work culture.",
      ],
    },
    {
      title: "Nordica Village",
      items: [
        "Contributed to the children's game published on Google Play.",
        "At launch, the game earned a 5.0 rating and exceeded 500 downloads in its first days.",
      ],
    },
  ];

  return (
    <Box as="article" minW={0} bg="#101F34" border="1px solid" borderColor={expanded ? "#78B7FF" : "#496B94"} borderRadius="2xl" overflow="hidden">
      <Flex bg="#F1F6FF" minH="80px" px={5} py={4} align="center" position="relative">
        <Text color="#0A1628" fontSize="2xl" fontWeight="800" letterSpacing="-0.04em">KidsBanner Games</Text>
        <Box position="absolute" bottom={0} left={0} w="72px" h="4px" bg="#FF932E" aria-hidden="true" />
      </Flex>
      <Box p={5}>
        <Heading as="h3" id="kidsbanner-title" color="#F1F6FF" fontSize="xl" letterSpacing="-0.03em">
          {pt ? "Desenvolvedor Unity" : "Unity Developer"}
        </Heading>
        <Flex gap={2} align="center" flexWrap="wrap" mt={2}>
          <Text color="#91A9CA" fontSize="sm"><time dateTime="2022-05">{pt ? "Mai 2022" : "May 2022"}</time> — <time dateTime="2022-11">Nov 2022</time></Text>
          <Badge bg="#1B304C" color="#BCD7FA" borderRadius="md" px={2} textTransform="none">{pt ? "Canadá · remoto" : "Canada · remote"}</Badge>
        </Flex>
        <Text color="#B6C7DF" fontSize="sm" lineHeight="1.7" mt={3}>
          {pt ? "Jogos 2D infantis em Unity e C#, com participação no Nordica Village e colaboração em inglês com uma equipe no Canadá."
            : "Children's 2D games in Unity and C#, contributing to Nordica Village and collaborating in English with a team in Canada."}
        </Text>
        <Flex gap={2} flexWrap="wrap" mt={4} mb={4}>
          {["Unity", "C#", "2D", "Mobile"].map(tech => <Badge key={tech} bg="#1B304C" color="#BCD7FA" borderRadius="md" px={2} py={1} textTransform="none" fontWeight="medium">{tech}</Badge>)}
        </Flex>
        <Button ref={trigger} id="kidsbanner-trigger" aria-expanded={expanded} aria-controls="kidsbanner-details" onClick={() => setExpanded(!expanded)}
          rightIcon={<ChevronDown size={18} style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: reducedMotion ? "none" : "transform 0.3s ease" }} />}
          bg={expanded ? "#78B7FF" : "#203C5E"} color={expanded ? "#071327" : "#F1F6FF"} _hover={{ bg: "#78B7FF", color: "#071327" }} minH="48px" w="full">
          {expanded ? (pt ? "Recolher detalhes" : "Hide details") : (pt ? "Ver detalhes" : "View details")}
        </Button>
      </Box>
      <Collapse id="kidsbanner-details" role="region" aria-labelledby="kidsbanner-title" in={expanded} animateOpacity
        onKeyDown={event => { if (event.key === "Escape") closeDetails(); }}
        transition={{ enter: { duration: reducedMotion ? 0 : 0.35 }, exit: { duration: reducedMotion ? 0 : 0.25 } }}>
        <Box p={5} borderTop="1px solid #2A3B53">
          <Text color="#91A9CA" fontSize="sm" mb={5}>{pt ? "Vancouver, Canadá · tempo integral · remoto" : "Vancouver, Canada · full-time · remote"}</Text>
          <Grid templateColumns="minmax(0, 1fr)" gap={5}>
            {areas.map(area => <Box key={area.title}>
              <Heading as="h4" fontSize="md" color="#F1F6FF" mb={3}>{area.title}</Heading>
              <UnorderedList color="#B6C7DF" fontSize="sm" spacing={2} ml={4} lineHeight="1.7">
                {area.items.map(item => <ListItem key={item}>{item}</ListItem>)}
              </UnorderedList>
            </Box>)}
          </Grid>
          <Button as={Link} href="https://play.google.com/store/apps/details?id=ca.kidsbanner.NordicaVillage" isExternal
            rightIcon={<ArrowUpRight size={18} />} bg="#78B7FF" color="#071327" _hover={{ bg: "#A3CFFF", textDecoration: "none" }} minH="48px" mt={6} w="full">
            {pt ? "Ver na Google Play" : "View on Google Play"}
          </Button>
          <Button onClick={closeDetails} variant="ghost" color="#B6C7DF" _hover={{ bg: "whiteAlpha.100" }} minH="48px" mt={2} w="full">
            {pt ? "Recolher detalhes" : "Hide details"}
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
}

function ZemaExperience() {
  const { idioma } = useContext(LanguageContext);
  const pt = idioma === "pt";
  const [expanded, setExpanded] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const closeDetails = () => {
    trigger.current?.focus();
    setExpanded(false);
  };
  const areas = pt ? [
    {
      title: "Projetos e responsabilidade técnica",
      items: [
        "Atuação terceirizada pela Lighthouse, participando e liderando o desenvolvimento de dois projetos com React e NestJS.",
        "Atuação como único desenvolvedor em projetos junto a DBAs, com autonomia para escolher tecnologias e caminhos de implementação.",
        "Desenvolvimento de uma plataforma de gestão de frotas para logística, com roteirização de caminhões, controle de manutenção e rastreamento.",
      ],
    },
    {
      title: "Backend e integrações",
      items: [
        "Desenvolvimento de módulos backend com NestJS e integração a APIs externas, incluindo a Google Routes API.",
        "Estruturação de controllers e services com injeção de dependência; modelagem e otimização de queries e procedures no SQL Server para operações críticas de negócio.",
      ],
    },
    {
      title: "Qualidade e entrega",
      items: [
        "Aplicação de testes unitários e de integração com Jest e documentação de APIs REST com Swagger/OpenAPI.",
        "Uso de Docker para ambientes locais e preparação do frontend e backend para produção.",
      ],
    },
  ] : [
    {
      title: "Projects and technical responsibility",
      items: [
        "Assigned through Lighthouse, contributing to and leading the development of two projects with React and NestJS.",
        "Worked as the sole developer on projects alongside DBAs, with autonomy over technology choices and implementation approaches.",
        "Developed a logistics fleet management platform with truck routing, maintenance management and tracking.",
      ],
    },
    {
      title: "Backend and integrations",
      items: [
        "Developed NestJS backend modules and integrated external APIs, including the Google Routes API.",
        "Structured controllers and services using dependency injection; designed and optimized SQL Server queries and stored procedures for critical business operations.",
      ],
    },
    {
      title: "Quality and delivery",
      items: [
        "Applied unit and integration testing with Jest and documented REST APIs with Swagger/OpenAPI.",
        "Used Docker for local environments and prepared frontend and backend applications for production.",
      ],
    },
  ];

  return (
    <Box as="article" minW={0} bg="#101F34" border="1px solid" borderColor={expanded ? "#78B7FF" : "#496B94"} borderRadius="2xl" overflow="hidden">
      <Flex bg="#F1F6FF" minH="80px" px={5} py={4} align="center" position="relative">
        <Text color="#005A9C" fontSize="2xl" fontWeight="800" letterSpacing="-0.04em">ZEMA</Text>
        <Box position="absolute" bottom={0} left={0} w="72px" h="4px" bg="#FFD32A" aria-hidden="true" />
      </Flex>
      <Box p={5}>
        <Heading as="h3" id="zema-title" color="#F1F6FF" fontSize="xl" letterSpacing="-0.03em">
          {pt ? "Desenvolvedor full stack" : "Full Stack Developer"}
        </Heading>
        <Flex gap={2} align="center" flexWrap="wrap" mt={2}>
          <Text color="#91A9CA" fontSize="sm"><time dateTime="2024-01">Jan 2024</time> — <time dateTime="2025-06">Jun 2025</time></Text>
          <Badge bg="#1B304C" color="#BCD7FA" borderRadius="md" px={2} textTransform="none">{pt ? "Via Lighthouse" : "Through Lighthouse"}</Badge>
        </Flex>
        <Text color="#B6C7DF" fontSize="sm" lineHeight="1.7" mt={3}>
          {pt
            ? "Desenvolvimento e liderança técnica de dois projetos, incluindo gestão de frotas, com React, NestJS e SQL Server."
            : "Development and technical leadership of two projects, including fleet management, using React, NestJS and SQL Server."}
        </Text>
        <Flex gap={2} flexWrap="wrap" mt={4} mb={4}>
          {["NestJS", "React", "SQL Server", "Docker"].map(tech => <Badge key={tech} bg="#1B304C" color="#BCD7FA" borderRadius="md" px={2} py={1} textTransform="none" fontWeight="medium">{tech}</Badge>)}
        </Flex>
        <Button ref={trigger} id="zema-trigger" aria-expanded={expanded} aria-controls="zema-details" onClick={() => setExpanded(!expanded)}
          rightIcon={<ChevronDown size={18} style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: reducedMotion ? "none" : "transform 0.3s ease" }} />}
          bg={expanded ? "#78B7FF" : "#203C5E"} color={expanded ? "#071327" : "#F1F6FF"} _hover={{ bg: "#78B7FF", color: "#071327" }} minH="48px" w="full">
          {expanded ? (pt ? "Recolher detalhes" : "Hide details") : (pt ? "Ver detalhes" : "View details")}
        </Button>
      </Box>
      <Collapse id="zema-details" role="region" aria-labelledby="zema-title" in={expanded} animateOpacity
        onKeyDown={event => { if (event.key === "Escape") closeDetails(); }}
        transition={{ enter: { duration: reducedMotion ? 0 : 0.35 }, exit: { duration: reducedMotion ? 0 : 0.25 } }}>
        <Box p={5} borderTop="1px solid #2A3B53">
          <Text color="#91A9CA" fontSize="sm" mb={5}>{pt ? "Brasil · remoto · alocação pela Lighthouse" : "Brazil · remote · assigned through Lighthouse"}</Text>
          <Grid templateColumns="minmax(0, 1fr)" gap={5}>
            {areas.map(area => <Box key={area.title}>
              <Heading as="h4" fontSize="md" color="#F1F6FF" mb={3}>{area.title}</Heading>
              <UnorderedList color="#B6C7DF" fontSize="sm" spacing={2} ml={4} lineHeight="1.7">
                {area.items.map(item => <ListItem key={item}>{item}</ListItem>)}
              </UnorderedList>
            </Box>)}
          </Grid>
          <Button onClick={closeDetails} variant="ghost" color="#B6C7DF" _hover={{ bg: "whiteAlpha.100" }} minH="48px" mt={6} w={{ base: "full", sm: "auto" }}>
            {pt ? "Recolher detalhes" : "Hide details"}
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
}
