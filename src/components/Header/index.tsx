import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  BrandLink,
  CheckoutLink,
  HeaderContainer,
  HeaderContent,
  LocationInfo,
} from './styles'

export function Header() {
  const cartItemsAmount = 3

  return (
    <HeaderContainer>
      <HeaderContent>
        <BrandLink to="/" title="Página inicial">
          <img src="/assets/images/logo.svg" alt="" />
        </BrandLink>
        <div>
          <LocationInfo>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </LocationInfo>
          <CheckoutLink
            to="/checkout"
            title="Checkout"
            cartItemsAmount={cartItemsAmount}
          >
            <ShoppingCart size={22} weight="fill" />
          </CheckoutLink>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
