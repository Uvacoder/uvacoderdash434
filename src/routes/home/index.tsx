import { Header } from '../../shared/header'

export const Home = () => {
  return (
    <>
      <div className='text-center bg-gradient-to-r from-[#543ab7] to-[#00acc1] text-white'>
        <div className='flex h-[60vh] flex-col justify-center items-center'>
          <Header />
        </div>
        <div>
          <svg
            className='relative w-full h-[15vh] mb-[7px] min-h[100px] max-h[150px]'
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
      </div>

      <div className='relative h-[20vh] text-center bg-white'>
        <a
          target={'_blank'}
          href='https://twitter.com/polpenaloza'
          rel='noopener noreferrer'
        >
          @polpenaloza
        </a>
      </div>
    </>
  )
}
