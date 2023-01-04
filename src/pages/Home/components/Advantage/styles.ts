import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'

export interface SpanCircleProps {
  spanCircleColor: keyof typeof defaultTheme
}

export const AdvantageContainer = styled.div<SpanCircleProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background: ${(props) => props.theme[props.spanCircleColor]};
    color: ${(props) => props.theme.gray100};
  }
`
