'use client'

import Link from "next/link"
import { DarkModeButton } from "~/entities/theme/ui/dark-mode-button"
import useStore from "~/lib/store"

export const Header = () => {

  const { isDarkMode } = useStore();

  return (
    <header className="w-full h-[82px]">
      <div className={`
        ${isDarkMode 
          ? 'bg-white text-black' 
          : 'bg-gray-900 text-white'
        } 
        w-full h-[82px] fixed top-0 left-0 right-0 z-50 flex 
        items-center justify-between border-b border-gray-400
        p-2 pl-16 pr-16
      `}>
        <div className="header__logo">
          <Link href="/">
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