import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import {
  AddToCartButton,
  AmountSelector,
  CoffeeCardContainer,
  Description,
  Footer,
  Image,
  Price,
  Tags,
} from './styles'

interface CoffeeCardProps {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  imageUrl: string
}

export function CoffeeCard({
  id,
  name,
  description,
  tags,
  price,
  imageUrl,
}: CoffeeCardProps) {
  const [amount, setAmount] = useState(1)

  function handleIncreaseAmount() {
    setAmount((state) => {
      if (state < 5) {
        return state + 1
      }
      return 5
    })
  }

  function handleDecreaseAmount() {
    setAmount((state) => {
      if (state > 1) {
        return state - 1
      }
      return 1
    })
  }

  return (
    <CoffeeCardContainer key={id}>
      <Image src={imageUrl} alt={description} width={120} height={120} />
      <Tags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <h4>{name}</h4>
      <Description>{description}</Description>
      <Footer>
        <Price>{price.toLocaleString()}</Price>
        <div>
          <AmountSelector>
            <button onClick={handleDecreaseAmount}>
              <Minus size={14} weight="bold" />
            </button>
            {amount}
            <button onClick={handleIncreaseAmount}>
              <Plus size={14} weight="bold" />
            </button>
          </AmountSelector>
          <AddToCartButton type="button">
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </div>
      </Footer>
    </CoffeeCardContainer>
  )
}
