import { useTheme } from 'styled-components'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { CheckoutContentTitle } from './components/CheckoutContentTitle'

import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormContent,
  CheckoutFormContentRow,
  CheckoutFormSection,
  PaymentTypeOption,
  PaymentTypes,
} from './styles'
import { CheckoutFormInput } from './components/CheckoutFormInput'

export function Checkout() {
  const theme = useTheme()

  return (
    <CheckoutContainer>
      <CheckoutForm>
        <CheckoutFormSection>
          <h5>Complete seu pedido</h5>
          <CheckoutFormContent>
            <CheckoutContentTitle
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
            >
              <MapPinLine size={20} color={theme.yellow700} />
            </CheckoutContentTitle>
            <CheckoutFormContentRow>
              <CheckoutFormInput
                placeholder="CEP"
                mask={'00000-000'}
                maxWidth={12.5}
              ></CheckoutFormInput>
            </CheckoutFormContentRow>

            <CheckoutFormContentRow>
              <CheckoutFormInput
                placeholder="Rua"
                maxWidth={35}
              ></CheckoutFormInput>
            </CheckoutFormContentRow>

            <CheckoutFormContentRow>
              <CheckoutFormInput
                placeholder="Número"
                maxWidth={12.5}
              ></CheckoutFormInput>
              <CheckoutFormInput
                placeholder="Complemento"
                maxWidth={21.75}
                isOptional
              ></CheckoutFormInput>
            </CheckoutFormContentRow>

            <CheckoutFormContentRow>
              <CheckoutFormInput
                placeholder="Bairro"
                maxWidth={12.5}
              ></CheckoutFormInput>
              <CheckoutFormInput
                placeholder="Cidade"
                maxWidth={17.25}
              ></CheckoutFormInput>
              <CheckoutFormInput
                placeholder="UF"
                maxLength={2}
                maxWidth={3.75}
              ></CheckoutFormInput>
            </CheckoutFormContentRow>
          </CheckoutFormContent>

          <CheckoutFormContent>
            <CheckoutContentTitle
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            >
              <CurrencyDollar size={20} color={theme.purple500} />
            </CheckoutContentTitle>
            <PaymentTypes>
              <PaymentTypeOption type="button">
                <CreditCard size={16} /> Cartão de Crédito
              </PaymentTypeOption>
              <PaymentTypeOption type="button">
                <Bank size={16} /> Cartão de Débito
              </PaymentTypeOption>
              <PaymentTypeOption type="button">
                <Money size={16} /> Dinheiro
              </PaymentTypeOption>
            </PaymentTypes>
          </CheckoutFormContent>
        </CheckoutFormSection>
        <CheckoutFormSection>
          <h5>Cafés selecionados</h5>
          <CheckoutFormContent></CheckoutFormContent>
        </CheckoutFormSection>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
