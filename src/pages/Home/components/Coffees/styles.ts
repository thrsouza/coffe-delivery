import styled from 'styled-components'

export const CoffeesContainer = styled.section`
  width: 100%;
  padding: 0 1rem;
`

export const CoffeesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.375rem;

  width: 100%;
  max-width: 70rem;
  margin: 2rem auto;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, auto));
    grid-gap: 2rem;
  }
`
