import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

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

export const BrandLink = styled(NavLink)`
  display: flex;
  padding: 0.125rem;
  border-radius: 6px;
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

  cursor: not-allowed;

  svg {
    color: ${(props) => props.theme.purple500};
  }
`

interface CheckoutLinkProps {
  amount: number
}

// eslint-disable-next-line prettier/prettier
export const CheckoutLink = styled(NavLink) <CheckoutLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 8px;
  position: relative;

  background: ${(props) => props.theme.yellow300};
  color: ${(props) => props.theme.yellow700};

  cursor: pointer;

  ${(props) =>
    props.amount > -1 &&
    css`
      &::after {
        content: '${props.amount}';
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 0.75rem;
        font-weight: bold;
        line-height: 0;
        border-radius: 50%;

        width: 1.25rem;
        height: 1.25rem;

        position: absolute;
        right: -0.5rem;
        top: -0.5rem;

        color: ${(props) => props.theme.gray100};
        background: ${props.theme.yellow700};
      }
    `}
`
