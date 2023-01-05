import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  padding: 0 1rem;
  margin: 5rem 0;
`

export const CheckoutForm = styled.form`
  display: grid;
  grid-template-columns: minmax(40rem, auto) minmax(28rem, auto);
  grid-column-gap: 2rem;

  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 4rem 0;

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > div {
      padding: 2.5rem;
      border-radius: 6px;
      flex: 1;

      background: ${(props) => props.theme.gray200};
    }

    &:last-child > div {
      border-radius: 6px 44px;
    }
  }
`
