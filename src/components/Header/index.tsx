import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  CheckoutLink,
  HeaderContainer,
  HeaderContent,
  LocationInfo,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Página inicial">
          <img src="/assets/images/logo.svg" alt="" />
        </NavLink>
        <div>
          <LocationInfo>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </LocationInfo>
          <CheckoutLink to="/checkout" title="Checkout">
            <ShoppingCart size={22} weight="fill" />
          </CheckoutLink>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
