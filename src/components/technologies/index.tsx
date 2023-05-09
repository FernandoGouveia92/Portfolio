import React from 'react'
import { FaReact, FaCss3Alt, FaDatabase, FaCode, FaDocker, FaCheck, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTypescript } from 'react-icons/si';
import {
    TechContainer,
    TechIcon,
    TechName,
    MainContainer,
    TitleTech,
    SubCointainer,
    FatherContainer,
} from '@/styles/technologies/styles';

const knownTechs = [
    { name: 'React', icon: <FaReact /> },
    { name: 'NextJS', icon: <SiNextdotjs /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Typescript', icon: <SiTypescript /> },
    { name: 'Javascript', icon: <FaCode /> },
    { name: 'ContextAPI', icon: <FaReact /> },
    { name: 'NodeJS', icon: <FaNodeJs /> }
];

export const learningTechs = [
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Django Rest Framework', icon: <FaCheck /> },
    { name: 'Python', icon: <FaPython /> }
]

function Technologies() {

    return (
        <FatherContainer>
            <MainContainer>
                <TitleTech data-aos="fade-rightspl">Stacks atuais</TitleTech>
                <SubCointainer>
                    {knownTechs.map(({ name, icon }) => (
                        <TechContainer
                            key={name}
                            data-aos="fade-up"
                        >
                            <TechIcon>{icon}</TechIcon>
                            <TechName>{name}</TechName>
                        </TechContainer>
                    ))}
                </SubCointainer>
            </MainContainer>
            <MainContainer>
                <TitleTech data-aos="fade-rightspl">Tecnologias que estou aprendendo</TitleTech>
                <SubCointainer>
                    {learningTechs.map(({ name, icon }) => (
                        <TechContainer
                            key={name}
                            data-aos="fade-up"
                        >
                            <TechIcon>{icon}</TechIcon>
                            <TechName>{name}</TechName>
                        </TechContainer>
                    ))}
                </SubCointainer>
            </MainContainer>
        </FatherContainer>
    );
}

export default Technologies