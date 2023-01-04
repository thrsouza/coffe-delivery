import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;

  background: ${(props) => props.theme.gray200};
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-top: 0.75rem;
  margin-bottom: 1rem;

  > span {
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;

    border-radius: 100px;

    background: ${(props) => props.theme.yellow300};
    color: ${(props) => props.theme.yellow700};
  }
`

export const Image = styled.img`
  margin-top: -2.5rem;
`

export const Description = styled.p`
  font-size: 0.875rem;
  text-align: center;

  margin-top: 0.5rem;
  margin-bottom: 2rem;

  color: ${(props) => props.theme.gray600};
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Price = styled.h3`
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;

  &::before {
    content: 'R$';
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 2;
  }
`

export const AmountSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.75rem;
  border-radius: 6px;
  line-height: 0;

  background: ${(props) => props.theme.gray400};

  > button {
    line-height: 0;
    background: transparent;
    border: none;

    cursor: pointer;

    color: ${(props) => props.theme.purple500};

    &:hover {
      color: ${(props) => props.theme.purple700};
    }
  }
`

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  line-height: 0;

  background: ${(props) => props.theme.purple700};
  color: ${(props) => props.theme.gray200};

  &:hover {
    background: ${(props) => props.theme.purple500};
  }
`
