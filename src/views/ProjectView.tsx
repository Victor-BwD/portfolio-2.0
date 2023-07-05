import { useParams } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { ProjectDisplay } from '../components/ProjectDisplay';
import { Box, Text } from '@chakra-ui/react';
import { projectsInfo } from '../components/Projects'


export function ProjectView() {
  const { projectId } = useParams();

  const project = projectsInfo.find((p: { id: number; }) => p.id === Number(projectId));

  return (
    <Box backgroundColor="#0B214D">
    <Nav />
    {project ? (
        <ProjectDisplay project={project} />
      ) : (
        <Text color="white">Projeto não encontrado.</Text>
      )}
    </Box>
  )
}