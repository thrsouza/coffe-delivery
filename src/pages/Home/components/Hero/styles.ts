import styled from 'styled-components'

export const HeroContainer = styled.section`
  background: url(/assets/images/hero-background.svg) no-repeat center;
  background-size: cover;
  width: 100%;
  padding: 0 1rem;
`

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 4rem 0;
`

export const Title = styled.h1`
  display: block;
`

export const Subtitle = styled.span`
  display: block;
  font-size: 1.25rem;
  margin-top: 1rem;
`

export const Advantages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1.25rem 2.5rem;
  margin-top: 4rem;
`
