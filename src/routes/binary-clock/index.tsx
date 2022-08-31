import Clock from '../../shared/Binary'
import { Container } from '../../shared/Container'
import { Footer } from '../../shared/Footer'
import { Header } from '../../shared/Header'

export const BinaryClock = () => {
  return (
    <>
      <Container classNames='bg-[#27272c] text-white'>
        <Header />
        <div className='flex'>
          <Clock />
        </div>
      </Container>

      <Footer classNames='bg-[#27272c] text-white' />
    </>
  )
}

export default BinaryClock
