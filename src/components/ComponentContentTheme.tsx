import clsx from 'clsx'
import { ReactNode } from 'react'

export type ComponentContentThemeProps = {
  children?: ReactNode
  theme?: 'light' | 'dark'
}

const ComponentContentTheme = ({
  theme,
  children,
}: ComponentContentThemeProps) => {
  return (
    <section
      className={clsx(
        'flex flex-col gap-8 rounded-lg p-8 rounded-2xl',
        theme === 'dark' &&
          'dark bg-schemes-dark-surface text-schemes-dark-onSurface',
        theme === 'light' &&
          'light bg-schemes-light-surface text-schemes-light-onSurface'
      )}
    >
      <h2 className="title-large">{theme}</h2>
      {children}
    </section>
  )
}

export default ComponentContentTheme
