import api from '@/services'
import React, { useState, useEffect } from 'react'


function Projects() {
  const END_POINT_GET_PROJECTS = "http://localhost:8080/projects/"

  const [projects, setProject] = useState<IProject | any>([])

  const getProjects = async () => {
    const response = await api
    .get(END_POINT_GET_PROJECTS)
    .then((data) => data.data)

    setProject(response)
  }

  useEffect(() => {
    getProjects()
  }, [])


  return (
    <div>
      {
        projects.map(project => (
          <div>
            <title>{project.name}</title>
            <h2>{project.authors}</h2>
            <h2>{project.location}</h2>
            <p>{project.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Projects