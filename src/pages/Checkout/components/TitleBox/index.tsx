import { ReactNode } from 'react'
import { TitleBoxContainer } from './styles'

interface TitleBoxProps {
  title: string
  subtitle: string
  children: ReactNode
}

export function TitleBox({ title, subtitle, children }: TitleBoxProps) {
  return (
    <TitleBoxContainer>
      {children}
      <div>
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
    </TitleBoxContainer>
  )
}
