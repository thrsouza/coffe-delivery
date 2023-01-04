import { CoffeeData } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesContainer, CoffeesContent } from './styles'

interface CoffeesProps {
  items: CoffeeData[]
}

export function Coffees({ items }: CoffeesProps) {
  return (
    <CoffeesContainer>
      <CoffeesContent>
        <h2>Nossos Cafés</h2>
        <div>
          {items.map((item) => (
            <CoffeeCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              tags={item.tags}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </CoffeesContent>
    </CoffeesContainer>
  )
}
