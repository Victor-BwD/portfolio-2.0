import {
  Avatar, Box, Button, Container, Flex, Heading, HStack, Link, Text, useToast,
} from "@chakra-ui/react";
import { Check, Copy, Mail } from "lucide-react";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { technologies } from "../data/technologies";

const backendNames = ["Java", "Go", "Spring Boot", "Kafka", "Redis", "Dynatrace", "Grafana", "PostgreSQL", "Docker", "Node.js", "NestJS", "MongoDB", "C#"];
const email = "victor.bogdanowdornelles@gmail.com";

export function About() {
  const { idioma } = useContext(LanguageContext);
  const pt = idioma === "pt";
  const [emailCopied, setEmailCopied] = useState(false);
  const toast = useToast();
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      toast({ description: pt ? "E-mail copiado!" : "Email copied!", status: "success", duration: 3000 });
    } catch {
      toast({ description: pt ? "Não foi possível copiar. Use o link de e-mail abaixo." : "Could not copy. Use the email link below.", status: "error" });
    }
  };
  return (
    <Box as="section" id="About" py={{ base: 14, md: 20 }} borderTop="1px solid #23344D" scrollMarginTop="24px">
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <Flex direction={{ base: "column-reverse", md: "row" }} align={{ base: "start", md: "center" }} justify="space-between" gap={8}>
          <Box maxW="650px">
            <Text fontSize="xs" letterSpacing="0.18em" color="#78B7FF" mb={3}>{pt ? "SOBRE MIM" : "ABOUT ME"}</Text>
            <Heading as="h2" color="#F1F6FF" fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.04em">
              {pt ? "Quem sou eu" : "Who I am."}
            </Heading>
            <Text color="#B6C7DF" mt={5} fontSize="lg" lineHeight="1.8">
              {pt
                ? "Sou Victor, desenvolvedor back-end com foco em Java e Go. Nas Casas Bahia, desenvolvo aplicações e workers para gestão de estoques, trabalhando com concorrência, performance e escalabilidade em sistemas distribuídos."
                : "I'm Victor, a back-end developer focused on Java and Go. At Casas Bahia, I develop applications and workers for inventory management, working with concurrency, performance and scalability in distributed systems."}
            </Text>
            <Text color="#91A9CA" mt={4} lineHeight="1.8">
              {pt
                ? "Aplico Clean Architecture e Clean Code e atuo em integrações com Kafka e Redis, deploys e troubleshooting de incidentes em produção. Uso Dynatrace e Grafana para observabilidade e análise de métricas, colaborando com desenvolvedores e SREs na melhoria contínua da plataforma."
                : "I apply Clean Architecture and Clean Code and work on Kafka and Redis integrations, deployments and production incident troubleshooting. I use Dynatrace and Grafana for observability and metrics analysis, collaborating with developers and SREs on continuous platform improvement."}
            </Text>
          </Box>
          <Avatar name="Victor Bogdanow Dornelles" size="2xl" src="https://github.com/Victor-BwD.png" border="3px solid #354963" />
        </Flex>
        <Box mt={10}>
          <Heading as="h3" color="#F1F6FF" fontSize="lg" mb={4}>{pt ? "Tecnologias com que trabalho" : "Technologies I work with"}</Heading>
          <Flex gap={2} flexWrap="wrap">
            {backendNames.map(name => {
              const tech = technologies.find(item => item.name === name);
              const primary = name === "Java" || name === "Go";
              return <HStack key={name} px={4} py={3} bg={primary ? "#122640" : "#101F34"}
                border="1px solid" borderColor={primary ? "#78B7FF" : "#2A3B53"} borderRadius="lg" spacing={2}>
                <Box w={2} h={2} borderRadius="full" bg={tech?.color ?? "#78B7FF"} />
                <Text color={primary ? "#F1F6FF" : "#B6C7DF"} fontWeight={primary ? "semibold" : "normal"} fontSize="sm">{name}</Text>
              </HStack>;
            })}
          </Flex>
        </Box>
        <Box as="section" id="contact" mt={{ base: 14, md: 20 }} p={{ base: 5, md: 10 }} bg="#122640" border="1px solid #354963"
          borderRadius="2xl" scrollMarginTop="24px">
          <Text fontSize="xs" letterSpacing="0.18em" color="#78B7FF" mb={3}>{pt ? "CONTATO" : "CONTACT"}</Text>
          <Heading as="h2" color="#F1F6FF" fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="-0.03em">
            {pt ? "Vamos conversar sobre seu próximo projeto?" : "Let's talk about your next project."}
          </Heading>
          <Text mt={4} color="#B6C7DF" lineHeight="1.7">{pt ? "Para oportunidades, projetos ou uma boa troca de ideias." : "For opportunities, projects or a good exchange of ideas."}</Text>
          <Link href={`mailto:${email}`} display="block" color="#BCD7FA" fontSize="sm" overflowWrap="anywhere" mt={5}>{email}</Link>
          <Flex direction={{ base: "column", sm: "row" }} gap={3} mt={6}>
            <Button as="a" href={`mailto:${email}`} leftIcon={<Mail size={18} />} bg="#78B7FF" color="#071327" minH="48px"
              _hover={{ bg: "#A3CFFF" }}>{pt ? "Enviar e-mail" : "Send email"}</Button>
            <Button onClick={handleCopyEmail} leftIcon={emailCopied ? <Check size={18} /> : <Copy size={18} />} variant="outline"
              borderColor="#49607C" color="#F1F6FF" minH="48px" _hover={{ bg: "whiteAlpha.100" }}>
              {emailCopied ? (pt ? "Copiado!" : "Copied!") : (pt ? "Copiar e-mail" : "Copy email")}
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
