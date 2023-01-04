import { Coffees } from './components/Coffees'
import { Hero } from './components/Hero'

import { coffees } from '../../data/coffees'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Coffees items={coffees} />
    </HomeContainer>
  )
}
