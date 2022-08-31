import { Link } from 'react-router-dom'

interface iNavBar {
  urls: Array<{ url: string; label: string }>
}

export const NavBar = ({ urls }: iNavBar) => {
  return (
    <nav className='w-full'>
      <h1 className='text-3xl p-5'>
        <Link to='/'>Pol Penaloza</Link>
      </h1>
      {urls.map(({ url, label }) => {
        return (
          <div key={`nav-${url}`} className='text-xl font-bold underline'>
            <Link to={`${url}`}>{label}</Link>
          </div>
        )
      })}
    </nav>
  )
}
