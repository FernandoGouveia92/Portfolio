import styled from "styled-components";

export const WorkInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 50px;
    gap: 10px;
    width: 80%;

    /* border-radius: 8px;
    border: solid 5px white;
    filter: drop-shadow(0px 0px 13px rgba(255, 255, 255, 0.5)); */
`;

export const TitleContainer = styled.h1`
    font-weight: bolder;
    color: white;
`;

export const WorkContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 80%;
`

export const ExperienceContainer = styled.div`
    width: 100%;
`

export const TitleExperience = styled.div`
    font-weight: bolder;
`

export const DescriptionExperience = styled.p`
    font-weight: 200;
    text-align: justify;
`
