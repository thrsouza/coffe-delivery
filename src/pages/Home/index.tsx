import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeCard } from './components/CoffeeCard'

import {
  CoffeesContainer,
  CoffeesContent,
  HomeContainer,
  IntroAdvantageItem,
  IntroAdvantageItemIcon,
  IntroAdvantages,
  IntroContainer,
  IntroContent,
  IntroSubtitle,
  IntroTitle,
} from './styles'

import { coffees } from '../../data/coffees'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroContent>
          <div>
            <IntroTitle>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <IntroSubtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </IntroSubtitle>
            <IntroAdvantages>
              <IntroAdvantageItem>
                <IntroAdvantageItemIcon backgroundColor="yellow700">
                  <ShoppingCart size={16} weight="fill" />
                </IntroAdvantageItemIcon>
                Compra simples e segura
              </IntroAdvantageItem>
              <IntroAdvantageItem>
                <IntroAdvantageItemIcon backgroundColor="gray700">
                  <Package size={16} weight="fill" />
                </IntroAdvantageItemIcon>
                Embalagem mantém o café intacto
              </IntroAdvantageItem>
              <IntroAdvantageItem>
                <IntroAdvantageItemIcon backgroundColor="yellow500">
                  <Timer size={16} weight="fill" />
                </IntroAdvantageItemIcon>
                Entrega rápida e rastreada
              </IntroAdvantageItem>
              <IntroAdvantageItem>
                <IntroAdvantageItemIcon backgroundColor="purple500">
                  <Coffee size={16} weight="fill" />
                </IntroAdvantageItemIcon>
                O café chega fresquinho até você
              </IntroAdvantageItem>
            </IntroAdvantages>
          </div>
          <img src="/assets/images/hero-logo.png" alt="" />
        </IntroContent>
      </IntroContainer>

      <CoffeesContainer>
        <CoffeesContent>
          <h2>Nossos Cafés</h2>
          <div>
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                description={coffee.description}
                tags={coffee.tags}
                price={coffee.price}
                imageUrl={coffee.imageUrl}
              />
            ))}
          </div>
        </CoffeesContent>
      </CoffeesContainer>
    </HomeContainer>
  )
}
