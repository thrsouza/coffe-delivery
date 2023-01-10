import styled from 'styled-components'

export const CheckoutContentTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 22px auto;
  grid-column-gap: 8px;
  margin-bottom: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;

    span {
      &:first-child {
        color: ${(props) => props.theme.gray800};
        line-height: 1.3;
      }
      &:last-child {
        font-size: 0.75rem;
        line-height: 1.3;
      }
    }
  }
`
