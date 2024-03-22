import { useState } from 'react'

import { MenuItems } from '@utils/constants'
import { IMenuItem } from '@utils/types'

import MenuItem from '@components/MenuItem'

import styles from './Header.module.scss'
import logo from '@assets/Logo.webp'
import searchIcon from '@assets/search.png'
import menuIcon from '@assets/menu.png'
import closeIcon from '@assets/x.png'
import arrow from '@assets/drop-icon.png'

const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    const onMenuToggler = () => {
        setIsMenuOpened(prevState => !prevState)
    }
    return (
        <header className={styles.header}>
            <div className={styles.topPart}>
                <div>
                    <img src={menuIcon}
                        onClick={onMenuToggler}
                        className={styles.menuIcon}
                        alt="menu-icon"
                    />
                </div>
                <div>
                    <img src={logo} alt="logo" style={{ cursor: 'default' }} />
                </div>
                <div>
                    <img src={searchIcon} alt="search-icon" />
                </div>
            </div>

            <nav className={styles.desktopMenu}>
                {MenuItems.map((item: IMenuItem) => {
                    return <MenuItem key={item.id} title={item.title} />
                })}
            </nav>

            {isMenuOpened
                ?
                (
                    <>
                        <div
                            className={styles.menuBackground}
                            onClick={onMenuToggler}
                        >
                        </div>
                        <div className={styles.mobileMenu} >
                            <div className={styles.mobileTopPart}>
                                <div>
                                    <img src={logo} alt="logo" />
                                </div>
                                <div>
                                    <img
                                        src={closeIcon}
                                        onClick={onMenuToggler}
                                        alt="close-icon"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                            </div>

                            <nav className={styles.mobileMenuItems}>
                                {MenuItems.map((item: IMenuItem) => {
                                    return (
                                        <div key={item.id}>
                                            <span>{item.title}</span>
                                            <img src={arrow} alt="arrow" />
                                        </div>
                                    )
                                })}
                            </nav>
                        </div>
                    </>
                )
                :
                null}
        </header>
    )
}

export default Header