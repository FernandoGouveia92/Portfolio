import { Title, MainCointainer, TextContainer, PictureTitleContainer } from '@/styles/introduction/styles'
import React from 'react'
import Image from '@/components/image'


export default function Introduction() {
  return (
    <MainCointainer>
      <Image />
      <TextContainer data-aos="fade-left">
        <Title >Muito prazer, eu sou Fernando Gouveia!</Title>
        <h2 >Sou um <strong>Desenvolvedor Web Fullstack Junior</strong>.</h2>
        <p >Atualmente, estou aberto para novas oportunidades!</p>
        <p >Sou formado na Trybe como Desenvolvedor Fullstack desde Abril de 2023, e procuro oportunidades de me conectar pessoas e me desenvolver profissionalmente.</p>
      </TextContainer>
    </MainCointainer>
  )
}
