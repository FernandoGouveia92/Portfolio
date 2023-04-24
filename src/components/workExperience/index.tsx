import React, { useState, useEffect } from 'react'
import axios, { AxiosError, AxiosResponse } from "axios";
import api from '@/services';
import { jobs } from '@/utils/jobs';
import { WorkContainer, ExperienceContainer, TitleExperience, DescriptionExperience } from '@/styles/workExperience/styles';

function WorkExperience() {
  `IMPLEMENTAR DB PARA POPULAR EXPERIENCIAS DE TRABALHO`
  // const [jobs, setJobs] = useState<IJobType | any>([])

  // useEffect(() => {
  //   `I wish....`
  //   getJobs()
  // }, [])

  // const getJobs = async () => {
  //   const response = await api.get("endpoint de um get")
  //   setJobs(response.data)
  // }

  return (
    <WorkContainer>
      {
        jobs.map((job) => (
          <ExperienceContainer data-aos="fade-up">
            <TitleExperience>{job.position}</TitleExperience>
            <DescriptionExperience>{job.description}</DescriptionExperience>
            <p>{job.periodOfStaying}</p>
          </ExperienceContainer>
        ))
      }
    </WorkContainer>
  )
}

export default WorkExperience