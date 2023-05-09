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
    { name: 'React', icon: <FaReact />, doc: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjvyfaDqun-AhVBIbkGHYniAPQQFnoECBAQAQ&url=https%3A%2F%2Flegacy.reactjs.org%2Fdocs%2Fgetting-started.html&usg=AOvVaw0sjkhQ84l3Uro6B2RHZiGz' },
    { name: 'NextJS', icon: <SiNextdotjs />, doc: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi_utaQqun-AhW4IbkGHUwJBYQQFnoECAkQAQ&url=https%3A%2F%2Fnextjs.org%2Fdocs&usg=AOvVaw1kpD8C0DvezQl_L3uSjlgy' },
    { name: 'MySQL', icon: <FaDatabase />, doc: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiEl6iaqun-AhXBDrkGHUj8AlMQFnoECAgQAQ&url=https%3A%2F%2Fdev.mysql.com%2Fdoc%2F&usg=AOvVaw0CYJqmoN1KbaJZe_ORFXYy' },
    { name: 'MongoDB', icon: <SiMongodb />, doc: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj-9uajqun-AhXVA9QKHalhAhQQFnoECAoQAQ&url=https%3A%2F%2Fwww.mongodb.com%2Fdocs%2F&usg=AOvVaw2PGmD13E_0epdOJM09UX6p' },
    { name: 'CSS', icon: <FaCss3Alt />, doc: 'https://www.w3schools.com/css/css_intro.asp' },
    { name: 'Typescript', icon: <SiTypescript />, doc: 'https://www.typescriptlang.org/docs/' },
    { name: 'Javascript', icon: <FaCode />, doc: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
    { name: 'ContextAPI', icon: <FaReact />, doc: 'https://legacy.reactjs.org/docs/context.html' },
    { name: 'NodeJS', icon: <FaNodeJs />, doc: 'https://nodejs.org/en/docs' }
];

export const learningTechs = [
    { name: 'Docker', icon: <FaDocker />, doc: 'https://docs.docker.com' },
    { name: 'Django Rest Framework', icon: <FaCheck />, doc: 'https://www.djangoproject.com' },
    { name: 'Python', icon: <FaPython />, doc: 'https://www.python.org' }
]

function Technologies() {

    return (
        <FatherContainer>
            <MainContainer>
                <TitleTech data-aos="fade-rightspl">Stacks atuais</TitleTech>
                <SubCointainer data-aos="fade-up">
                    {knownTechs.map(({ name, icon, doc }) => (
                        <TechContainer
                            key={name}
                        >
                            <TechIcon target='_blank' href={doc}>{icon}</TechIcon>
                            <TechName>{name}</TechName>
                        </TechContainer>
                    ))}
                </SubCointainer>
            </MainContainer>
            <MainContainer>
                <TitleTech data-aos="fade-rightspl">Tecnologias que estou aprendendo</TitleTech>
                <SubCointainer data-aos="fade-up">
                    {learningTechs.map(({ name, icon, doc }) => (
                        <TechContainer
                            key={name}
                        >
                            <TechIcon target='_blank' href={doc}>{icon}</TechIcon>
                            <TechName>{name}</TechName>
                        </TechContainer>
                    ))}
                </SubCointainer>
            </MainContainer>
        </FatherContainer>
    );
}

export default Technologies