import { InputHTMLAttributes } from 'react'
import { IMaskInput } from 'react-imask'

import { CheckoutFormInputContainer } from './styles'

interface CheckoutFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  maxWidth: number
  mask?: string | null
}

export function CheckoutFormInput({
  isOptional = false,
  mask = null,
  maxWidth,
  ...props
}: CheckoutFormInputProps) {
  return (
    <CheckoutFormInputContainer maxWidth={maxWidth} optional={isOptional}>
      {mask ? <IMaskInput mask={mask} {...props} /> : <input {...props} />}
    </CheckoutFormInputContainer>
  )
}
