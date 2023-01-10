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
`

export const CheckoutFormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &:last-child > div {
    border-radius: 6px 44px;
  }
`

export const CheckoutFormContent = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  flex: 1;

  background: ${(props) => props.theme.gray200};
`

export const CheckoutFormContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  gap: 0.75rem;
`

export const PaymentTypes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.75rem;
`

export const PaymentTypeOption = styled.button`
  border: none;
  border-radius: 6px;
  padding: 1rem;
  gap: 0.75rem;

  display: flex;
  align-items: center;

  font-size: 0.75rem;
  line-height: 0;
  text-transform: uppercase;

  background: ${(props) => props.theme.gray400};
`
