import { App } from '../../components/app'
import Clock from '../../components/Binary'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export const BinaryClock = () => {
  return (
    <App>
      <Container classNames='bg-[#27272c] text-white'>
        <Header />
        <div className='flex'>
          <Clock />
        </div>
      </Container>

      <Footer classNames='bg-[#27272c] text-white' />
    </App>
  )
}

export default BinaryClock
