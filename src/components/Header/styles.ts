import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 1rem;
  position: fixed;
  background-color: ${(props) => props.theme.gray100};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.5rem;
  max-width: 70rem;
  margin: 0 auto;

  img {
    height: 2.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 8px;

  font-size: 0.875rem;
  background: ${(props) => props.theme.purple300};
  color: ${(props) => props.theme.purple700};

  svg {
    color: ${(props) => props.theme.purple500};
  }
`

export const CheckoutLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 8px;

  background: ${(props) => props.theme.yellow300};
  color: ${(props) => props.theme.yellow700};
`
