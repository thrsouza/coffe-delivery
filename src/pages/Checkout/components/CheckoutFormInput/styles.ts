import styled from 'styled-components'

interface CheckoutFormInputContainerProps {
  maxWidth: number
  optional: boolean
}

export const CheckoutFormInputContainer = styled.div<CheckoutFormInputContainerProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth}rem;

  > input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;

    border-radius: 4px;
    padding: 0.75rem;
    width: 100%;

    border: 1px solid ${(props) => props.theme.gray400};
    background: ${(props) => props.theme.gray300};
  }
`
