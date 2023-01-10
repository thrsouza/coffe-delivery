import { ReactNode } from 'react'
import { CheckoutContentTitleContainer } from './styles'

interface CheckoutContentTitleProps {
  title: string
  subtitle: string
  children: ReactNode
}

export function CheckoutContentTitle({
  title,
  subtitle,
  children,
}: CheckoutContentTitleProps) {
  return (
    <CheckoutContentTitleContainer>
      {children}
      <div>
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
    </CheckoutContentTitleContainer>
  )
}
