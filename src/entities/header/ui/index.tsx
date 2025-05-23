import Link from "next/link"
import { DarkModeButton } from "~/entities/theme/ui/drak-mode-button"

export const Header = () => {
  return (
    <header className="w-full h-[32px] bg-white dark:bg-gray-900">
      <div className="container h-[32px] fixed top-0 left-0 right-0 z-50 flex items-center justify-between">
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