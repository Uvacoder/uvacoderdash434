import { NavBar } from '../Nav'

export const Header = () => {
  const navLinks = [{ url: '/binary-clock', label: 'Binary Clock' }]
  return (
    <div className='flex h-1/3 flex-col justify-center items-center'>
      <div className='flex h-full flex-col text-center'>
        <NavBar urls={navLinks} />
      </div>
    </div>
  )
}
