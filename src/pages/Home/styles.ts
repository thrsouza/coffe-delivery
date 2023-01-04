import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const HomeContainer = styled.main`
  margin: 6.5rem 0;
`

export const IntroContainer = styled.section`
  background: url(/assets/images/hero-background.svg) no-repeat center;
  background-size: cover;
  width: 100%;
  padding: 0 1rem;
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 4rem 0;
`

export const IntroTitle = styled.h1`
  display: block;
`

export const IntroSubtitle = styled.span`
  display: block;
  font-size: 1.25rem;
  margin-top: 1rem;
`

export const IntroAdvantages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1.25rem 2.5rem;
  margin-top: 4rem;
`

export const IntroAdvantageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IntroAdvantageItemIconProps {
  backgroundColor: keyof typeof defaultTheme
}

export const IntroAdvantageItemIcon = styled.span<IntroAdvantageItemIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${(props) => props.theme[props.backgroundColor]};
  color: ${(props) => props.theme.gray100};
`

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
