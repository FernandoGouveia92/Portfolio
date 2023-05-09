import React from 'react'
import { jobs } from '@/utils/jobs';
import { WorkInfoContainer, TitleContainer, WorkContainer, ExperienceContainer, TitleExperience, DescriptionExperience } from '@/styles/jobs/styles';

function Jobs() {

  return (
    <WorkInfoContainer data-aos="fade-up">
      <TitleContainer>Experiências passadas</TitleContainer>
      <WorkContainer>
        {
          jobs.map((job) => (
            <ExperienceContainer>
              <TitleExperience>{job.position}</TitleExperience>
              <DescriptionExperience>{job.description}</DescriptionExperience>
              <DescriptionExperience>{job.periodOfStaying}</DescriptionExperience>
            </ExperienceContainer>
          ))
        }
      </WorkContainer>
    </WorkInfoContainer>
  )
}

export default Jobs