import { ReactNode } from 'react'
import { AdvantageContainer, SpanCircleProps } from './styles'

interface AdvantageProps extends SpanCircleProps {
  description: string
  children: ReactNode
}

export function Advantage({
  description,
  spanCircleColor,
  children,
}: AdvantageProps) {
  return (
    <AdvantageContainer spanCircleColor={spanCircleColor}>
      <span>{children}</span>
      {description}
    </AdvantageContainer>
  )
}
