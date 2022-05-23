import { NavBar } from '../nav'

export const Header = () => {
  const navLinks = [
    { url: '/binary-clock', label: 'Binary Clock' },
  ]
  return (
    <div className='flex h-full flex-col text-center'>
      <NavBar urls={navLinks} />
    </div>
  )
}
