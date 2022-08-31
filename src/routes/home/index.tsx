import { Container } from '../../shared/Container'
import { Footer } from '../../shared/Footer'
import { Header } from '../../shared/Header'

export const Home = () => {
  return (
    <>
      <Container classNames='bg-gradient-to-r from-[#543ab7] to-[#00acc1] text-white'>
        <Header />
        <div className='h-[100vh] w-[100vw] flex items-end'>
          <svg
            className='relative w-full h-[30vh] mb-[0px] min-h[100px] max-h[150px]'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 24 150 28'
            preserveAspectRatio='none'
            shapeRendering='auto'
          >
            <defs>
              <path
                id='gentle-wave'
                d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
              />
            </defs>
            <g className='parallax'>
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='0'
                fill='rgba(255,255,255,0.7'
              />
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='3'
                fill='rgba(255,255,255,0.5)'
              />
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='5'
                fill='rgba(255,255,255,0.3)'
              />
              <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
            </g>
          </svg>
        </div>
      </Container>

      <Footer />
    </>
  )
}

export default Home
