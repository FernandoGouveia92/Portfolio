import React from 'react'
import projectsListUtil from '@/utils/projectsListUtil'
import Project from '../project'
import { ProjectsContainer } from '@/styles/projects/styles'


function Projects() {

  return (
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
  )
}

export default Projects