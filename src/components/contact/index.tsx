import { ContactContainer, Text, IconContainer, IconLink, TextQuestion } from '@/styles/contact/styles';
import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


function Contact() {

    return (
        <ContactContainer>
            <TextQuestion>Vamos trabalhar juntos?</TextQuestion>
            <Text>Como entrar em contato comigo:</Text>
            <IconContainer>
                <IconLink target="_blank" href="https://www.linkedin.com/in/fernando-gouveia-soares/">
                    <FaLinkedin size={40} />
                </IconLink>
                <IconLink target="_blank" href="https://github.com/FernandoGouveia92">
                    <FaGithub size={40} />
                </IconLink>
                <IconLink target="_blank" href="https://www.instagram.com/nandosgouveia/">
                    <FaInstagram size={40} />
                </IconLink>
            </IconContainer>
        </ContactContainer>
    )
}

export default Contact