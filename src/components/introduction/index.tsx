import { Title, MainCointainer, TextContainer, TextContent } from '@/styles/introduction/styles'
import React from 'react'
import Image from '@/components/image'

export default function Introduction() {
  return (
    <MainCointainer>
      <Image />
      <TextContainer data-aos="fade-left">
        <Title >Muito prazer, eu sou Fernando Gouveia!</Title>
        <h2>Sou um <strong>Desenvolvedor Web Fullstack Junior</strong>.</h2>
        <TextContent>Atualmente, estou <strong>aberto</strong> para novas <strong>oportunidades</strong>!</TextContent>
      </TextContainer>
    </MainCointainer>
  )
}
