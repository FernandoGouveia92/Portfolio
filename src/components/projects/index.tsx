import React from 'react'
import projectsListUtil from '@/utils/projectsListUtil'
import Project from '../project'
import { ProjectsContainer, ProjectsInfoContainer, TextContent } from '@/styles/projects/styles'

function Projects() {

  return (
    <ProjectsInfoContainer data-aos="fade-up">
      <TextContent>Meus proetos</TextContent>
      <ProjectsContainer>
        {
          projectsListUtil.map(project => (
            <Project
              key={project.id}
              title={project.title}
              authors={project.authors}
              description={project.description}
              stacks={project.stacks}
              deployLink={project.linkDeDeploy}
              imagem={project.imagem}
            />
          ))
        }
      </ProjectsContainer>
    </ProjectsInfoContainer>
  )
}

export default Projects