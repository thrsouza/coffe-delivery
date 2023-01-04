import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Advantage } from '../Advantage'
import {
  Advantages,
  HeroContainer,
  HeroContent,
  Subtitle,
  Title,
} from './styles'

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
          <Advantages>
            <Advantage
              description="Compra simples e segura"
              spanCircleColor="yellow700"
            >
              <ShoppingCart size={16} weight="fill" />
            </Advantage>

            <Advantage
              description="Embalagem mantém o café intacto"
              spanCircleColor="gray700"
            >
              <Package size={16} weight="fill" />
            </Advantage>

            <Advantage
              description="Entrega rápida e rastreada"
              spanCircleColor="yellow500"
            >
              <Timer size={16} weight="fill" />
            </Advantage>

            <Advantage
              description="O café chega fresquinho até você"
              spanCircleColor="purple500"
            >
              <Coffee size={16} weight="fill" />
            </Advantage>
          </Advantages>
        </div>
        <img src="/assets/images/hero-logo.png" alt="" />
      </HeroContent>
    </HeroContainer>
  )
}
