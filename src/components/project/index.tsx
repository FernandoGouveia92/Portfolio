import { Title, AppImage, Authors, DeployLink, Description, ProjectContainer, Stacks, TextContentContainer } from '@/styles/eachProject/styles'
import React from 'react'

export default function Project(props: IProject) {

    const { title, authors, description, stacks, deployLink, imagem } = props;
    return (
        <ProjectContainer data-aos="fade-right">
            <TextContentContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Authors>
                    Autor/Autores:
                    {' '}
                    {authors}
                </Authors>
                <Stacks>
                    Stacks:
                    {' '}
                    {stacks.map((stack, index) => (
                        <span key={index}>{stack}</span>
                    ))}
                </Stacks>
                <DeployLink target="_blank" href={deployLink}>Dá uma olhada!</DeployLink>
            </TextContentContainer>
            <AppImage src={imagem} alt={title} />
        </ProjectContainer>
    )
}
