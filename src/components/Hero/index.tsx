import { HeroContainer, HeroContent, Subtitle, Title } from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </div>
        <img src="/assets/images/hero-logo.png" alt="" />
      </HeroContent>
    </HeroContainer>
  )
}
