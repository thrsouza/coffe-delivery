import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { TitleBox } from './components/TitleBox'

import { CheckoutContainer, CheckoutForm } from './styles'

export function Checkout() {
  const theme = useTheme()

  return (
    <CheckoutContainer>
      <CheckoutForm>
        <section>
          <h5>Complete seu pedido</h5>
          <div>
            <TitleBox
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
            >
              <MapPinLine size={20} color={theme.yellow700} />
            </TitleBox>
          </div>

          <div>
            <TitleBox
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            >
              <CurrencyDollar size={20} color={theme.purple500} />
            </TitleBox>
          </div>
        </section>
        <section>
          <h5>Cafés selecionados</h5>
          <div></div>
        </section>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
