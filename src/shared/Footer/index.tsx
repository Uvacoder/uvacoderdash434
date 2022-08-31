import classnames from 'classnames/dedupe'

interface iFooter {
  classNames?: string | { [key: string]: any }
}

export const Footer = ({ classNames }: iFooter) => {
  const computedClassNames = classnames([
    'relative h-[20vh] text-center',
    classNames,
  ])
  return (
    <div className={computedClassNames}>
      <a
        target={'_blank'}
        href='https://twitter.com/polpenaloza'
        rel='noopener noreferrer'
      >
        @polpenaloza
      </a>
    </div>
  )
}
