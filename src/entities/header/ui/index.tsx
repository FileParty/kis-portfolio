'use client'

import Link from 'next/link'
import { DarkModeButton } from '~/entities/theme/ui/dark-mode-button'
import useStore from '~/lib/store'
import clsx from 'clsx'

export const Header = () => {

  const { isDarkMode } = useStore();

  return (
    <header className="w-full h-[82px]">
      <div className={clsx(
        'w-full h-[82px] fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b-4 p-2 pl-16 pr-16',
        {
          'bg-gray-300 text-black border-black-400': isDarkMode,
          'bg-gray-900 text-white border-white-800': !isDarkMode,
        }
      )}>
        <div className="header__logo">
          <Link href="/" className="text-2xl font-bold hover:text-gray-400">
            <h3>KIS Portfolio</h3>
          </Link>
        </div>
        <div className="header__menu">
          <nav>
            <ul>
              
            </ul>
          </nav>
        </div>
        <div className="header__actions">
          <DarkModeButton />
        </div>
      </div>
    </header>
  )
}