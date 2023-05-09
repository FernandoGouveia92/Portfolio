import { TextTitle, Text, TextContainer, StyledLinkTrybe, BiografyInfoContainer } from '@/styles/biography/styles'
import React from 'react'

export default function Biografia() {
  return (
    <BiografyInfoContainer data-aos="fade-up">
      <TextContainer>
        <TextTitle>Quem sou eu?</TextTitle>
        <Text>Sou formado na <StyledLinkTrybe href="https://www.betrybe.com" target="_blank"><strong>Trybe</strong></StyledLinkTrybe> como Desenvolvedor Fullstack desde Abril de 2023. Sou bastante comunicativo, proativo, focado em resultados e procuro aprender algo novo sempre que possível. Um team-player que abraça novas ideias e respeita o espaço e opinião de todos na equipe. Minha vontade de aprender só não é maior do que minha paciência para aprender com meus erros, pois entendo que é errando que temos a oportunidade de aprender algo novo.</Text>
      </TextContainer>
    </BiografyInfoContainer>
  )
}
