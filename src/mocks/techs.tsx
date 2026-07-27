import React from 'react';
import { FaReact, FaCss3Alt, FaDatabase, FaCode, FaDocker, FaCheck, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTypescript } from 'react-icons/si';

const ReactIcon = FaReact as React.ComponentType<{ size?: number; className?: string }>;
const NextIcon = SiNextdotjs as React.ComponentType<{ size?: number; className?: string }>;
const DatabaseIcon = FaDatabase as React.ComponentType<{ size?: number; className?: string }>;
const MongoIcon = SiMongodb as React.ComponentType<{ size?: number; className?: string }>;
const CssIcon = FaCss3Alt as React.ComponentType<{ size?: number; className?: string }>;
const TypescriptIcon = SiTypescript as React.ComponentType<{ size?: number; className?: string }>;
const CodeIcon = FaCode as React.ComponentType<{ size?: number; className?: string }>;
const DockerIcon = FaDocker as React.ComponentType<{ size?: number; className?: string }>;
const NodeIcon = FaNodeJs as React.ComponentType<{ size?: number; className?: string }>;

const knownTechs = [
    { name: 'React', icon: <ReactIcon />, doc: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjvyfaDqun-AhVBIbkGHYniAPQQFnoECBAQAQ&url=https%3A%2F%2Flegacy.reactjs.org%2Fdocs%2Fgetting-started.html&usg=AOvVaw0sjkhQ84l3Uro6B2RHZiGz' },
    { name: 'NextJS', icon: <NextIcon />, doc: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi_utaQqun-AhW4IbkGHUwJBYQQFnoECAkQAQ&url=https%3A%2F%2Fnextjs.org%2Fdocs&usg=AOvVaw1kpD8C0DvezQl_L3uSjlgy' },
    { name: 'MySQL', icon: <DatabaseIcon />, doc: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiEl6iaqun-AhXBDrkGHUj8AlMQFnoECAgQAQ&url=https%3A%2F%2Fdev.mysql.com%2Fdoc%2F&usg=AOvVaw0CYJqmoN1KbaJZe_ORFXYy' },
    { name: 'MongoDB', icon: <MongoIcon />, doc: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj-9uajqun-AhXVA9QKHalhAhQQFnoECAoQAQ&url=https%3A%2F%2Fwww.mongodb.com%2Fdocs%2F&usg=AOvVaw2PGmD13E_0epdOJM09UX6p' },
    { name: 'CSS', icon: <CssIcon />, doc: 'https://www.w3schools.com/css/css_intro.asp' },
    { name: 'Typescript', icon: <TypescriptIcon />, doc: 'https://www.typescriptlang.org/docs/' },
    { name: 'Javascript', icon: <CodeIcon />, doc: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
    { name: 'ContextAPI', icon: <ReactIcon />, doc: 'https://legacy.reactjs.org/docs/context.html' },
    { name: 'NodeJS', icon: <NodeIcon />, doc: 'https://nodejs.org/en/docs' }
];

const learningTechs = [
    { name: 'Docker', icon: <DockerIcon />, doc: 'https://docs.docker.com' },
]

export {
    knownTechs,
    learningTechs
}