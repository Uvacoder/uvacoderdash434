import Link from 'next/link'

interface iNavBar {
  urls: Array<{ url: string; label: string }>
}

export const NavBar = ({ urls }: iNavBar) => {
  return (
    <nav className='w-full'>
      <h1 className='text-3xl p-5'>
        <Link passHref href='/'>
          Pol Penaloza
        </Link>
      </h1>
      {urls.map(({ url, label }) => {
        return (
          <div key={`nav-${url}`} className='text-xl font-bold underline'>
            <Link passHref href={`${url}`}>
              {label}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}
